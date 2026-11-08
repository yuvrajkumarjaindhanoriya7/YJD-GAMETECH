// =============================================================
//  YJD GameTech · Manohari Engine — engine.js
// =============================================================

// ---- TIME HELPERS -------------------------------------------
// 1 second = 1000 milliseconds
const MINUTE    = 1000 * 60;            // "1 minute"
const DAY_IN_MS = 1000 * 60 * 60 * 24;  // "24 hours"
const TIME_STEP = 1000 * 20;          // demo: each time of day lasts 20 seconds


// ---- 1. GLOBAL STATE ----------------------------------------
let currentTime = "day";   // "day" | "evening" | "night"
let stateone    = false;   // story switch (e.g. the car has crashed)
// You can add more states: let statetwo = false; ...

// Optional: flip a state automatically after some time
// setTimeout(() => { stateone = true; }, MINUTE);


// ---- 2. NORMAL MAPS (Clean City) ----------------------------
// "current file": { key: "next file" }
const dayMap = {
    "street.html":   { w: "park.html", a: "sidewalk.html" },
    "park.html":     { s: "street.html" },
    "sidewalk.html": { d: "street.html" }
};

const eveningMap = {
    "street.html":       { w: "park_sunset.html", a: "sidewalk.html" },
    "park_sunset.html":  { s: "street.html" },
    "sidewalk.html":     { d: "street.html" }
};

const nightMap = {
    "street.html":      { w: "park_night.html", a: "sidewalk.html" },
    "park_night.html":  { s: "street.html" },
    "sidewalk.html":    { d: "street.html" }
};

// Group the three maps by time so the engine can pick one
const normalWorld = {
    day:     dayMap,
    evening: eveningMap,
    night:   nightMap
};


// ---- 3. STATE MAPS (Post-Accident) --------------------------
// Used when stateone === true. Same shape: time -> file -> key.
const stateoneMaps = {
    day:     { "park.html":        { s: "street_crashed.html" },
               "street_crashed.html": { w: "park.html" } },
    evening: { "park_sunset.html": { s: "street_crashed.html" },
               "street_crashed.html": { w: "park_sunset.html" } },
    night:   { "park_night.html":  { s: "street_crashed.html" },
               "street_crashed.html": { w: "park_night.html" } }
};


// ---- 4. TIME CYCLE: day -> evening -> night -> day ... -------
const timeOrder = ["day", "evening", "night"]; // add more if you like

// Let maps (chunks) ask the time: window.parent.getGameTime()
window.getGameTime  = () => currentTime;
window.getGameState = () => stateone;

setInterval(() => {
    const next = (timeOrder.indexOf(currentTime) + 1) % timeOrder.length;
    currentTime = timeOrder[next];
    console.log("Time is now:", currentTime);
}, TIME_STEP); // time changes every TIME_STEP


// ---- 5. HELPERS ---------------------------------------------
function getCurrentFile(iframe) {
    const path = iframe.getAttribute("src") || "";
    return decodeURIComponent(path.split("/").pop().split("?")[0]);
}

function applyEffect(frame) {
    frame.style.opacity = "0.7";
    setTimeout(() => { frame.style.opacity = "1"; }, 200);
}

// Put special logic for the street here (sounds, pop-ups, etc.)
function handleStreetEvents(key) {
    // example: if (key === "e") alert("You honk the horn!");
}


// ---- 6. KEYBOARD NAVIGATION ENGINE --------------------------
function handleKey(event) {
    const keyPressed = event.key.toLowerCase();
    const iframe = document.getElementById("myIframe");
    if (!iframe) return;

    const currentFile = getCurrentFile(iframe);

    // SYSTEM: special function when the player is on the street
    if (currentFile === "street.html") {
        handleStreetEvents(keyPressed);
    }

    // STEP 1: pick the world (normal or state)
    const currentWorld = stateone ? stateoneMaps : normalWorld;

    // STEP 2: pick the map for the current TIME, then for this file
    const timeSpecificMap = currentWorld[currentTime] || {};
    const activeMap = timeSpecificMap[currentFile];

    if (activeMap && activeMap[keyPressed]) {

        // SPECIAL TRIGGER: on the street + 'w' -> the car crashes
        if (!stateone && currentFile === "street.html" && keyPressed === "w") {
            stateone = true;
            console.log("CRASH DETECTED! Switching to stateoneMaps.");
        }

        iframe.src = activeMap[keyPressed];
        applyEffect(iframe);
    }
}

// Listen on the main page...
window.addEventListener("keydown", handleKey);

// ...and inside every map, so keys still work after the player
// clicks on the game (clicking moves focus into the iframe)
const gameFrame = document.getElementById("myIframe");
function listenInsideMap() {
    try {
        gameFrame.contentWindow.addEventListener("keydown", handleKey);
    } catch (e) {
        // maps on another website cannot be listened to — keep them in the same folder
    }
}
if (gameFrame) {
    listenInsideMap();                                  // map that is already loaded
    gameFrame.addEventListener("load", listenInsideMap); // every new map
}

// Maps can also send keys with postMessage (works even on hosts that
// block direct access between frames):
//   parent.postMessage({ yjdKey: event.key }, "*");
window.addEventListener("message", (e) => {
    if (e.data && typeof e.data.yjdKey === "string") handleKey({ key: e.data.yjdKey });
    if (e.data && e.data.yjdAsk === "time" && e.source) {
        e.source.postMessage({ yjdTime: currentTime }, "*");
    }
});
