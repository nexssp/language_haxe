let languageConfig = Object.assign({}, require("./haxe.win32.nexss.config"));
let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}
languageConfig.compilers = {
  haxe: {
    install: `${sudo}apt install -y haxe`,
    command: "haxe",
    // args: "-main <file> --interp",
    args: "--run <fileNoExt>",
    help: ``,
  },
};

const {
  replaceCommandByDist,
  dist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

const distName = dist();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  default:
    languageConfig.compilers.haxe.install = replaceCommandByDist(
      languageConfig.compilers.haxe.install
    );
    break;
}

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
