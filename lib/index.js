"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import packages
const fs = require("fs");
// read all files, including those in sub directories, of a directory
async function dirFlat(directory) {
    const start = directory.replace(/\/?$/, "/");
    const files = await fs.promises.readdir(directory).then(async (directoryContents) => {
        return (await Promise.all(directoryContents.map(async (directoryObject) => {
            const path = start + directoryObject;
            const stats = await fs.promises.stat(path);
            const isDirectory = stats.isDirectory();
            const recursion = isDirectory ? await dirFlat(path) : [directoryObject];
            return recursion.map(fileName => (!isDirectory ? start : "") + fileName).flat(1);
        }))).flat(1);
    });
    return files;
}
module.exports = dirFlat;
