// 1 second = 1000 milliseconds
// This is much easier to read as "1 minute"
setTimeout(() => {
    stateone= true/false;
}, 1000 * 60); 

// This is clearly "24 hours"
const DAY_IN_MS = 1000 * 60 * 60 * 24;


// 1. GLOBAL STATE
let currentTime = "day"; 
let stateone = false; // The switch
// you can add more statemants for maps

// 2. CONFIGURATION: Normal Maps (Clean City)
const dayMap = {
    "street.html": { 'w': 'park.html', 'a': 'sidewalk.html' }

const eveningMap = {
    "street.html": { 'w': 'park_sunset.html' }
}

const nightMap = {
    "street.html": { 'w': 'park_sunset.html' }
}

// 3. CONFIGURATION: Crashed Maps (Post-Accident)
const stateoneMaps = {

};

// map changing with time(day,evening,night),user can add more
setTimeout(() => {
    if(currentworld = dayMap) currentworld = eveningMap ;
    if(currentworld = eveningMap) currentworld = eveningMap ;
    if(currentworld = nightMap)   currentworld = nightMap ;

}, 1000 * 60); // time changes after each minute

// --- KEYBOARD NAVIGATION ENGINE ---
window.addEventListener('keydown', (event) => {
    const keyPressed = event.key.toLowerCase();
    const iframe = document.getElementById('myIframe');
    if (!iframe) return;

    let currentPath = iframe.getAttribute('src') || "";
    let currentFile = decodeURIComponent(currentPath.split('/').pop().split('?')[0]);



    let currentWorld;

if (caseone === true) {
    currentWorld = stateoneMaps;
} else {
    currentWorld = dayMaps;
}



    // STEP 2: Get the specific map for the current TIME
    const timeSpecificMap = currentWorld[currentTime];
    const activeMap = timeSpecificMap[currentFile];

    if (activeMap && activeMap[keyPressed]) {

        // SPECIAL TRIGGER: suppose If user is at the street and hits 'w', crash the car
        if (!crashedCar && currentFile === "street.html" && keyPressed === "w") {
            crashedCar = true;
            console.log("CRASH DETECTED! Switching to crashedMaps logic."); // you can change this section according to state 
        }

        activeSide = null; 
        const nextScene = activeMap[keyPressed];
        iframe.src = nextScene;

        applyEffect(iframe);
    }
});

function applyEffect(frame) {
    frame.style.opacity = "0.7";
    setTimeout(() => { frame.style.opacity = "1"; }, 200);
}
    // SYSTEM: Trigger specific function if current iframe is street.html
    if (currentFile === "street.html") {
        handleStreetEvents(keyPressed);
    }