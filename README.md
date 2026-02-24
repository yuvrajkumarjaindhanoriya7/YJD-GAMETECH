# 🎮 Unified JS Game Engine (Physics + Day/Night + Map System)

A lightweight and powerful JavaScript game engine that combines **HTML5 Canvas** and **Iframes** to create a dynamic, living world. This engine features physics-based movement, an automatic day-night cycle, and an intelligent map-switching system.

---

## 🚀 Key Features

* **Physics Engine:** Real-time gravity and jump velocity logic for player movement.
* **Day-Night Cycle:** An in-game clock that smoothly fades textures and background maps based on the time of day.
* **Smart Map Switching:** Filename-based navigation that detects the current time (Morning/Night) and loads the corresponding environment.
* **Collision Detection:** Pixel-aware sensing to check interactions between the player and game objects.

---

## 🛠️ Function Explanations (Plain English)

### 1. `masterLoop()`
**The Heartbeat:** This function runs 60 times every second. It acts as the game's "Director," advancing the clock, calculating gravity, and redrawing every frame on the screen to create smooth animation.

### 2. `getCurrentFileName()`
**The GPS:** This function checks the `iframe` to see exactly which map file is currently loaded. Without this, the engine wouldn't know your current location in the world.

### 3. `syncMapToTime(phase)`
**The Time Traveler:** When the game transitions from day to night, this function swaps the background map file automatically.
* **Static Map Check:** If a filename does not contain a dash (`-morning` or `-night`), this function ignores it. This allows for "Static" maps like underground caves that stay the same regardless of the time.

### 4. `isTouching(rect1, rect2)`
**The Sensor:** This compares the "Hitboxes" (rectangular boundaries) of two objects. If the player and an obstacle overlap, it returns `true`, allowing you to trigger game-over screens or interactions.

### 5. `handleRotation(sideKey)`
**The Peek Function:** This allows the player to "peek" into temporary rooms (like an attic or basement). It remembers the "Parent" map so you can return to exactly where you started without getting lost.

### 6. `window.addEventListener('keydown')`
**The Ears:** This listens for keyboard inputs. 
* **Space:** Triggers the jump physics.
* **A, S, D Keys:** Triggers map changes based on the `allMaps` address book.

---

## 📁 File Naming Convention

To ensure the automatic systems work correctly, use the following naming format for your HTML files:

1.  **Time-Sensitive Maps:** `mapname-morning.html` and `mapname-night.html`.
2.  **Static Maps:** `anyname.html` (No dashes). If there is no dash in the name, the engine will not attempt to change the map when the time changes.

---

## 🎮 Controls

| Key | Action |
| :--- | :--- |
| **Space** | Jump / Throw Object |
| **A / S / D** | Change Map (Left / Bottom / Right) |
| **Top / Bottom** | Peek into Attic / Basement |

---

## ⚙️ Setup Instructions

1.  Define your images in your main HTML file using `id="assetname-morning"` format.
2.  Include the `master.js` script at the end of your HTML body.
3.  Ensure your Iframe has the ID `id="myIframe"`.
