import fs from "node:fs";

const required = ["index.html", "css/styles.css", "js/app.js", "AGENTS.md"];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing required file: ${file}`);
}

const html = fs.readFileSync("index.html", "utf8");
const js = fs.readFileSync("js/app.js", "utf8");
const requiredIds = [
  "scriptInput", "startBtn", "promptScreen", "promptContent", "promptHud",
  "mirrorBtn", "guideBtn", "paceMode", "paceValue", "fileInput", "importBtn",
  "keyMappingBody", "gamepadMappings"
];
for (const id of requiredIds) {
  if (!html.includes(`id="${id}"`)) throw new Error(`Critical DOM id missing: ${id}`);
}

const markers = ["mark", "pause", "speed", "wpm", "cue", "countdown"];
for (const marker of markers) {
  if (!js.includes(`'${marker}'`) && !js.includes(`\"${marker}\"`)) {
    throw new Error(`Marker support may be missing: ${marker}`);
  }
}

console.log("Static project checks passed.");
