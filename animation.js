// =============================================================
//  animation.js — reusable frame animation for YJD GameTech
//  Usage:  playAnimation("main-image", ["a1.png","a2.png"], 120);
// =============================================================

function playAnimation(elementId, frames, frameSpeed = 500, loop = true) {
    const el = document.getElementById(elementId);
    if (!el || frames.length === 0) return null;

    // Preload so frames don't flicker the first time
    frames.forEach(src => { const img = new Image(); img.src = src; });

    let currentFrame = 0;
    el.src = frames[0];

    const timer = setInterval(() => {
        currentFrame++;
        if (currentFrame >= frames.length) {
            if (!loop) { clearInterval(timer); return; } // play once
            currentFrame = 0;                             // loop
        }
        el.src = frames[currentFrame];
    }, frameSpeed);

    // Return a "stop" button you can call later
    return () => clearInterval(timer);
}

