let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Haxe";
languageConfig.description =
  "Haxe is an open source toolkit based on a modern, high level, strictly typed programming language, a cross-compiler, a complete cross-platform standard library and ways to access each platform's native capabilities.";
languageConfig.url = "https://haxe.org/";
languageConfig.extensions = [".hx"];
languageConfig.builders = {};
languageConfig.compilers = {
  haxe: {
    install: "scoop install haxe",
    command: "haxe",
    args: "-main <file> --interp",
    help: ``
  }
};
languageConfig.errors = require("./nexss.haxe.errors");
languageConfig.languagePackageManagers = {
  haxelib: {
    installation: "scoop install haxe",
    messageAfterInstallation: "",
    installed: "haxelib installed",
    search: "haxelib search",
    install: "haxelib require",
    uninstall: "haxelib remove",
    help: "haxelib",
    version: "haxelib version",
    init: () => {},
    else: "haxelib"
  }
};

module.exports = languageConfig;
