import fs from 'fs';
import {FILES_PATH} from "./consts/path.js";
import {ERROR_MESSAGE} from "./consts/messages.js";
import {getAbsolutePath} from "./utils.js";

const CONTENT = 'I am fresh and young';
const FILE_NAME = 'fresh.txt';

const create = async () => {
    try {
        fs.writeFileSync(getAbsolutePath(`${FILES_PATH}/${FILE_NAME}`), CONTENT, {flag: 'wx'})
    } catch (err) {
        throw new Error(ERROR_MESSAGE);
    }
};

await create();