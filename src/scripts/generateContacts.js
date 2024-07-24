import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { faker } from '@faker-js/faker';

export const generateContacts = async (number) => {
  const users = faker.helpers.multiple(createFakeContact, {
    count: number,
  });

  const dataAsString = JSON.stringify(users);

  try {
    await fs.writeFile(PATH_DB, dataAsString, 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

generateContacts(5);

