const { promisify } = require("util");
const { resolve } = require("path");
const fs = require("fs");
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(
    subdirs.map(async subdir => {
      const res = resolve(dir, subdir);
      return (await stat(res)).isDirectory() ? getFiles(res) : res;
    }),
  );
  return files.reduce((files, file) => files.concat(file.replace(`${__dirname}/${dir}`, "")), []);
}

async function generatePathMap(files) {
  return files
    .filter(file => file.endsWith(".js"))
    .filter(file => !file.includes("/_"))
    .reduce((pathMap, file) => {
      const page = file.replace(/\.js$/, "").replace(/index$/, "");

      pathMap[page] = { page };
      return pathMap;
    }, {});
}

module.exports = {
  exportPathMap: () => getFiles("pages").then(generatePathMap),
  webpack(config, options) {
    const { dev } = options;

    if (!dev) {
      config.devtool = "source-map";
    }

    return config;
  },
};
