# RK Teleprompter Pro V3 — Codex Project

An offline-first teleprompter designed for Android tablets, Lenovo Smart Connect, Bluetooth HID remotes, keyboards, mouse/touchpad input, touch gestures, and gamepads.

## Project variants

- `index.html` + `css/styles.css` + `js/app.js`: maintainable development version.
- `legacy/RK_Teleprompter_Pro_V3_SmartConnect_Single_File.html`: original portable one-file build.

## Run locally

No build step is required.

### Windows PowerShell

```powershell
cd RK_Teleprompter_Pro_V3_Codex_Project
python -m http.server 8080
```

Open `http://localhost:8080` in Chrome or Edge.

You may also open `index.html` directly, but browser features such as voice recognition, wake lock, orientation lock, and fullscreen permissions can behave more reliably from a local web server or HTTPS site.

## Basic development workflow

1. Edit `index.html`, `css/styles.css`, or `js/app.js`.
2. Run `npm run check` or `node --check js/app.js`.
3. Open the app through the local server.
4. Test keyboard, mouse wheel, touchscreen and Bluetooth/gamepad input.
5. Keep the single-file edition as the tablet fallback.

## Codex workflow

Open this folder or its Git repository in Codex. Codex will read `AGENTS.md` before working. Give one clearly scoped task at a time and ask it to run the validation commands before finishing.

Example task:

> Add a rehearsal mode that highlights the current paragraph, preserves mirror mode, works offline, and does not change existing localStorage keys. Update documentation and run all checks.

## Important data note

Scripts and settings are stored in browser `localStorage`. Export a full JSON backup before clearing browser storage, reinstalling a browser, changing tablets, or altering storage-key formats.

## Validation

```bash
npm run check
```

The check validates JavaScript syntax and confirms the main project files and critical DOM IDs are present.
