import fs from "fs";
import {FILES_PATH} from "./consts/path.js";
import {getAbsolutePath} from "./utils.js";
import {ERROR_MESSAGE} from "./consts/messages.js";

const OLD_PATH = getAbsolutePath(`${FILES_PATH}/wrongFilename.txt`);
const NEW_PATH = getAbsolutePath(`${FILES_PATH}/properFilename.md`);

const rename = async () => {
    fs.exists(NEW_PATH, (exists) => {
        if (!exists) {
            fs.renameSync(OLD_PATH, NEW_PATH)
        } else {
            throw new Error(ERROR_MESSAGE);
        }
    });
};

await rename();