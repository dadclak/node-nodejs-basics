import fs from "fs";
import {ERROR_MESSAGE} from "./consts/messages.js";
import {getAbsolutePath} from "./utils.js";
import {FILES_PATH} from "./consts/path.js";

const FILE_PATH = getAbsolutePath(FILES_PATH);

const list = async () => {
    fs.exists(FILE_PATH, (exists) => {
        if (exists) {
            const list = fs.readdirSync(FILE_PATH);
            console.table(list)
        } else {
            throw new Error(ERROR_MESSAGE);
        }
    });
};

await list();