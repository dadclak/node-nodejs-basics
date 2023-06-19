import fs from "fs";
import {ERROR_MESSAGE} from "./consts/messages.js";
import {getAbsolutePath} from "./utils.js";
import {FILES_PATH} from "./consts/path.js";

const FILE_PATH = getAbsolutePath(`${FILES_PATH}/fileToRead.txt`);

const read = async () => {
    fs.exists(FILE_PATH, (exists) => {
        if (exists) {
            const content = fs.readFileSync(FILE_PATH, {encoding: 'utf8'});
            console.log(content)
        } else {
            throw new Error(ERROR_MESSAGE);
        }
    });
};

await read();