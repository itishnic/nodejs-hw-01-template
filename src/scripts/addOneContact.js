import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';



export const addOneContact = async (newContact) => {
    try {
      const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
      const contacts = JSON.parse(data);
      contacts.push(newContact); // Добавляем новый контакт в массив
      await fs.writeFile(PATH_DB, JSON.stringify(contacts), 'utf8');
      console.log('Контакт успешно добавлен.');
    } catch (err) {
      console.error('Ошибка при записи в файл:', err);
    }
};

const myNewContact =
  faker.helpers.multiple(createFakeContact, {
    count: 1,
  })
    ;


addOneContact(myNewContact);
