import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const contacts = JSON.parse(data);
    const newContacts = contacts.slice(0, -1);
    await fs.writeFile(PATH_DB, JSON.stringify(newContacts), 'utf8');
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
