 // import packages
import * as fs from "fs";

 // read all files, including those in sub directories, of a directory
async function dirFlat(directory: string): Promise<string[]> {
    const start: string = directory.replace(/\/?$/, "/");
    const files: string[] = await fs.promises.readdir(directory).then(async (directoryContents: string[]): Promise<string[]> => {
        return (await Promise.all(directoryContents.map(async (directoryObject: string): Promise<string[]> => {
            const path: string = start + directoryObject;
            const stats: fs.Stats = await fs.promises.stat(path);
            const isDirectory: boolean = stats.isDirectory();
            const recursion: string[] = isDirectory ? await dirFlat(path) : [directoryObject];

            return recursion.map(fileName => (!isDirectory ? start : "") + fileName).flat(1);
        }))).flat(1);
    });

    return files;
}

module.exports = dirFlat;