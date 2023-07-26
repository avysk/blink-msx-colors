// The colors are taken from https://paulwratt.github.io/programmers-palettes/HW-MSX/HW-MSX-palettes.html

const msx = {
  msx1: "#000000", // black
  msx2: "#3EB849", // medium green
  msx3: "#74D07D", // light green
  msx4: "#5955E0", // dark blue
  msx5: "#8076F1", // light blue
  msx6: "#B95E51", // dark red
  msx7: "#65DBEF", // cyan
  msx8: "#DB6550", // medium red
  msx9: "#FF897D", // light red
  msx10: "#CCC35E", // dark yellow
  msx11: "#DED087", // light yellow
  msx12: "#3AA241", // dark green
  msx13: "#B766B5", // magenta
  msx14: "#CCCCCC", // gray
  msx15: "#FFFFFF" // white
};

t.prefs_.set('color-palette-overrides', [
  msx.msx1, // blacķ => black
  msx.msx6, // red => dark red
  msx.msx12, // green => dark green
  msx.msx10, // yellow => dark yellow
  msx.msx4, // blue => dark blue
  msx.msx8, // magenta => medium red
  msx.msx2, // cyan => medium green
  msx.msx14, // white => gray
  msx.msx14, // light black => gray (duplicate!)
  msx.msx9, // light red => light red
  msx.msx3, // light green => light green
  msx.msx11, // light yellow => light yellow
  msx.msx5, // light blue => light blue
  msx.msx13, // light magenta => magenta
  msx.msx7, // light cyan => cyan
  msx.msx15 // light white => white
]);

t.prefs_.set('cursor-color', msx.msx15); // white
t.prefs_.set('foreground-color', msx.msx15); // white
t.prefs_.set('background-color', msx.msx4); // dark blue
