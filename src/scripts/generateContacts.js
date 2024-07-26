import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { faker } from '@faker-js/faker';

export const generateContacts = async (number) => {
  const newContacts = faker.helpers.multiple(createFakeContact, {
    count: number,
  });

  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const existingContacts = JSON.parse(data);
    const updatedContacts = [...existingContacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), {
      encoding: 'utf8',
    });
  } catch (err) {
    console.error(err);
  }
};

generateContacts(3);
