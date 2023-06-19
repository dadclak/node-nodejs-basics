import fs from "fs";
import {ERROR_MESSAGE} from "./consts/messages.js";
import {getAbsolutePath} from "./utils.js";
import {FILES_PATH} from "./consts/path.js";

const FILE_PATH = getAbsolutePath(`${FILES_PATH}/fileToRemove.txt`);

const remove = async () => {
    fs.exists(FILE_PATH, (exists) => {
        if (exists) {
            fs.unlinkSync(FILE_PATH);
        } else {
            throw new Error(ERROR_MESSAGE);
        }
    });
};

await remove();