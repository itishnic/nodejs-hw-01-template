import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { faker } from '@faker-js/faker';
import { createFakeContact } from '../utils/createFakeContact.js';



export const addOneContact = async () => {
  const myNewContact = faker.helpers.multiple(createFakeContact, {
    count: 1,
  });
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
    const contacts = JSON.parse(data);
    const updatedContacts = [...contacts, myNewContact];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf8');
  } catch (err) {
    console.error(err);
  }
};




addOneContact();
