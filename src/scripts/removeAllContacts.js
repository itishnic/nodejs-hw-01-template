import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    const dataAsString = JSON.stringify([]);
    try {
      await fs.writeFile(PATH_DB, dataAsString);
      console.log('Файл успішно видалено.');
    } catch (err) {
      console.error('Помилка видалення файлу:', err);
    }
};

removeAllContacts();
