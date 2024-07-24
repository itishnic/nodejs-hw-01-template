import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
    fs.readFile(PATH_DB, { encoding: 'utf8' })
      .then((data) => JSON.parse(data))
      .then((contacts) => console.log( contacts))
      .catch((error) => console.error(error));
};

console.log(await getAllContacts());
