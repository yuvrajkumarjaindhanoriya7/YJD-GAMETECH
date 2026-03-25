/** * MASTER GAME ENGINE
 * Combined: Physics, Time-Synced Maps, and Day/Night Fading
 */

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const obj = document.getElementById("object"); 
const obstacle = document.getElementById("obstacle");
const iframe = document.getElementById('myIframe');

// --- 1. CONFIGURATION & TIME ---
let playerY = 0;
let playerX = 100;
let velocity = 0;
const gravity = 0.8;
const ground = 400;

let gameMinutes = 0;
const DAY_LENGTH = 1440;
let currentPhase = "morning"; // Can be "morning" or "night"

// --- 2. MAP ADDRESSES (Integrated Code 2) ---
// Note: filenames should look like "map1-morning.html" or "map1-night.html"
const allMaps = {
    // FORMAT: "Current-File.html": { 'key': 'Target-Base-Name' }
    "map1-morning.html": { 'a': 'map2', 's': 'map3' },
    "map1-night.html": { 'a': 'map2', 's': 'map3' },
    "map2-morning.html": { 'd': 'map1' },
    "map2-night.html": { 'd': 'map1' }
};

// Peeking/Rotation Logic addresses
const config = {
    "map1-morning.html": { top: "attic-morning.html", bottom: "basement-morning.html" },
    "map1-night.html": { top: "attic-night.html", bottom: "basement-night.html" }
};

// --- 3. ASSET SETUP ---
const assetNames = ['bg', 'player', 'obstacle']; 
const themes = { morning: {}, night: {} };

['morning', 'night'].forEach(time => {
    assetNames.forEach(name => {
        const el = document.getElementById(`${name}-${time}`);
        if (el) themes[time][name] = el;
    });
});

// --- 4. CORE FUNCTIONS ---

function getCurrentFileName() {
    if (!iframe) return "";
    return decodeURIComponent(iframe.src.split('/').pop().split('?')[0]);
}

function syncMapToTime(phase) {
    const currentFile = getCurrentFileName();
    const baseName = currentFile.split('-')[0]; // Gets "map1" from "map1-morning.html"
    const newSrc = `${baseName}-${phase}.html`;
    
    if (currentFile !== newSrc && currentFile !== "") {
        iframe.src = newSrc;
    }
}

function isTouching(rect1, rect2) {
    if (!rect1 || !rect2) return false;
    const r1 = rect1.getBoundingClientRect();
    const r2 = rect2.getBoundingClientRect();
    return !(r1.top > r2.bottom || r1.bottom < r2.top || r1.left > r2.right || r1.right < r2.left);
}

// --- 5. THE MASTER LOOP ---

function masterLoop() {
    // A. Advance Time
    gameMinutes = (gameMinutes + 2) % DAY_LENGTH;
    let newPhase = (gameMinutes >= 420 && gameMinutes < 1080) ? "morning" : "night";

    // B. Check for Phase Shift
    if (newPhase !== currentPhase) {
        currentPhase = newPhase;
        syncMapToTime(currentPhase);
    }

    // C. Physics
    if (playerY < ground) {
        velocity += gravity;
        playerY += velocity;
    } else {
        playerY = ground;
        velocity = 0;
    }

    // D. Day/Night Alpha
    let nightAlpha = Math.abs((gameMinutes - 720) / 720);
    let morningAlpha = 1 - nightAlpha;

    // E. Draw Canvas Layers
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.globalAlpha = morningAlpha;
    if (themes.morning.bg) ctx.drawImage(themes.morning.bg, 0, 0);
    if (themes.morning.player) ctx.drawImage(themes.morning.player, playerX, playerY);

    ctx.globalAlpha = nightAlpha;
    if (themes.night.bg) ctx.drawImage(themes.night.bg, 0, 0);
    if (themes.night.player) ctx.drawImage(themes.night.player, playerX, playerY);

    // F. Sync Physics Sprite for Collision
    obj.style.top = playerY + "px"; 
    if (isTouching(obj, obstacle)) {
        obj.style.outline = "2px solid red";
    } else {
        obj.style.outline = "none";
    }

    requestAnimationFrame(masterLoop);
}

// --- 6. INPUT CONTROLS ---

window.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    const currentFile = getCurrentFileName();

    // 1. Jump
    if (key === " " && playerY >= ground) velocity = -15;

    // 2. Map Jump (AllMaps)
    const mapData = allMaps[currentFile];
    if (mapData && mapData[key]) {
        // Automatically adds the current phase suffix
        iframe.src = `${mapData[key]}-${currentPhase}.html`;
    }

    // 3. Map Peeking (Config)
    const configData = config[currentFile];
    if (configData && configData[key]) {
        iframe.src = configData[key];
    }
});

masterLoop();
