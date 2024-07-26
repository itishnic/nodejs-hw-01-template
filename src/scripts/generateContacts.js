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
   const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const existingContacts = JSON.parse(data);
    existingContacts.push(dataAsString);

await fs.writeFile(PATH_DB, JSON.stringify(existingContacts, null, 2), {
  encoding: 'utf8',
});

  } catch (err) {
    console.error(err);
  }
};

generateContacts(5);

