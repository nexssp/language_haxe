let languageConfig = Object.assign({}, require("./haxe.win32.nexss.config"));
languageConfig.compilers = {
  haxe: {
    install: "scoop install haxe",
    command: "haxe",
    // args: "-main <file> --interp",
    args: "--run <fileNoExt>",
    help: ``,
  },
};

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
    else: "haxelib",
  },
};

module.exports = languageConfig;
