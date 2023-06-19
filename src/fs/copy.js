import fs from 'fs';
import {FILES_COPY_PATH, FILES_PATH} from "./consts/path.js";
import {ERROR_MESSAGE} from "./consts/messages.js";
import {getAbsolutePath} from "./utils.js";

const FILE_PATH_ABS = getAbsolutePath(FILES_PATH);
const FILE_COPY_PATH_ABS = getAbsolutePath(FILES_COPY_PATH);

const copy = async () => {
    try {
        fs.cpSync(FILES_PATH, FILES_COPY_PATH, {recursive: true});
    } catch (err) {
        throw new Error(ERROR_MESSAGE);
    }
};

await copy();