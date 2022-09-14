import { authApi } from './axios';

export const fetchAllContacts = async () =>
  await authApi.get('/contacts').then(r => r.data);

export const fetchAddContact = async contact =>
  await authApi.post('/contacts', contact).then(r => r.data);

export const fetchDeleteContact = async id =>
  await authApi.delete(`/contacts/${id}`).then(r => r.data);

export const fetchEditContact = async ({ id, name, number }) =>
  await authApi.patch(`/contacts${id}`, { name, number }).then(r => r.data);
