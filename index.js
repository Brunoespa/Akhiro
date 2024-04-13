const { spawn: s } = require("child_process");
function startProject() {
  const c = s("node", ["Akhiro.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true,
  });
  c.on("close", (code) => {
    if (code == 2) {
      console.log("Restarting Project...");
      startProject();
    }
  });
}
startProject();
