const { ProgrammingLanguage } = require("../../lib/programmingLanguage");
const pl = new ProgrammingLanguage(".hx");

pl.add("title", "haxe");
pl.add("description", `Haxe`);
pl.add("packageManager", { all: "haxelib install" });
// pl.add("packageManagerInstallation", {
//   win32: "PowerShell.exe -File installComposer.ps1",
//   linux: "bash install/installComposer.sh",
//   darwin: "bash install/installComposer.sh"
// });

pl.add("compilerInstallation", {
  all: "haxelib install hxp"
});

pl.add("packageManager", {
  all: "haxelib install <package>"
});
pl.add("afterPackageInstallMessage", {
  all: ""
});
pl.add("url", "https://php.net");
pl.addError("Uncaught Error: Class '(.*?)'", {
  win32: "nexss install php <package>",
  darwin: "nexss install php <package>",
  linux: "nexss install php <package>"
});

pl.addHelp("executeCommandLine", "php -r");
pl.addHelp("InteractiveShell", "php -a");

module.exports = pl.data;
