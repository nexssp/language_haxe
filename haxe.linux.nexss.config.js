let languageConfig = Object.assign({}, require("./haxe.win32.nexss.config"));
let sudo = process.sudo;

// https://github.com/HaxeFoundation/haxe/releases/download/4.2.1/haxe-4.2.1-linux64.tar.gz

const haxeVersion = "4.2.1";
const foldername = `haxe-${haxeVersion}-linux64`;
const filename = `${foldername}.tar.gz`;

languageConfig.compilers = {
  haxe: {
    install: process.replacePMByDistro(`${sudo}apt install -y wget tar xz
if [ ! -f ${process.env.NEXSS_APPS_PATH}/${filename} ];then wget https://github.com/HaxeFoundation/haxe/releases/download/${haxeVersion}/${filename} -P ${process.env.NEXSS_APPS_PATH}/; fi
if [ ! -d "${process.env.NEXSS_APPS_PATH}/haxe${haxeVersion}/" ]; then mkdir ${process.env.NEXSS_APPS_PATH}/haxe${haxeVersion} ; fi
tar -xf ${process.env.NEXSS_APPS_PATH}/${filename} --strip-components 1 -C ${process.env.NEXSS_APPS_PATH}/haxe${haxeVersion}
cd ${process.env.NEXSS_APPS_PATH}/haxe${haxeVersion}
${sudo}ln -s ${process.env.NEXSS_APPS_PATH}/haxe${haxeVersion}/haxe /usr/bin/haxe
${sudo}ln -s ${process.env.NEXSS_APPS_PATH}/haxe${haxeVersion}/haxelib /usr/bin/haxelib`),
    command: "haxe",
    // args: "-main <file> --interp",
    args: "--run <fileNoExt>",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  //

  default:
    languageConfig.compilers.haxe.install = process.replacePMByDistro(
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
