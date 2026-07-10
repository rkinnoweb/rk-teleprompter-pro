# AGENTS.md — RK Teleprompter Pro

## Product goal
Maintain a reliable, low-distraction, offline-first teleprompter for Android tablets and laptop-assisted control through Lenovo Smart Connect.

## Non-negotiable requirements
- Preserve offline operation. Do not add cloud services, analytics, trackers, fonts, CDNs, or required network calls.
- Preserve the portable single-file build in `legacy/` unless the task explicitly replaces it.
- Do not rename or remove existing localStorage keys without a migration path and documentation.
- Preserve horizontal mirror mode, fullscreen prompting, keyboard controls, touch gestures, mouse-wheel controls, gamepad support, markers, script backup/import, wake lock, and auto-recovery.
- Avoid frameworks and build systems unless the task explicitly requires one. Prefer plain semantic HTML, CSS and modern JavaScript.
- Do not silently discard scripts or settings. Data-loss prevention takes priority over cosmetic changes.
- Keep tablet controls large enough for touch use and ensure laptop keyboard/mouse operation remains effective.

## Code organization
- `index.html`: semantic UI structure only.
- `css/styles.css`: all styling and responsive behaviour.
- `js/app.js`: state, storage, markers, input handling and prompt engine.
- `legacy/`: portable single-file release.
- `docs/`: user and developer documentation.

## Quality requirements
- Use descriptive names and small functions.
- Escape user-provided script content before inserting it into HTML.
- Keep marker parsing backward compatible.
- Avoid duplicate animation loops, orphaned timeouts and unreleased wake locks.
- Handle unsupported browser APIs gracefully.
- Maintain keyboard accessibility and visible focus states in setup mode.
- Test landscape and portrait layouts at tablet widths.

## Required validation before completion
Run:

```bash
npm run check
```

Then manually verify, where possible:
1. App loads with no console errors.
2. Start, pause, resume, restart and exit work.
3. Mirror mode and guide line work.
4. Keyboard and mouse-wheel controls work.
5. Import/export and autosave do not lose text.
6. Marker types remain functional: `mark`, `pause`, `speed`, `wpm`, `cue`, `countdown`.

## Release discipline
- Update `CHANGELOG.md` for user-visible changes.
- Update `docs/USER_GUIDE.md` for changed controls or workflows.
- Increment the displayed app version only for a deliberate release.
- Do not overwrite the last known-good release without keeping a backup.
