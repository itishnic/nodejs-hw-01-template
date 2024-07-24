import path from "node:path";
import * as fs from "node:fs/promises";

export const PATH_DB = path.resolve('src','db','db.json');
fs.readFile(PATH_DB, { encoding: "utf-8" })
    .then((data) => console.log(data));
