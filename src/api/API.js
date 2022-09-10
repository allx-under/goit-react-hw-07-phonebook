import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://631cde274fa7d3264cb85f44.mockapi.io/api/',
});

export const getContacts = async () => {
  const { data } = await instance.get('contacts');
  return data;
};

export const postContact = async contact => {
  const { data } = await instance.post(`contacts`, contact);
  return data;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`contacts/${id}`);
  return data.id;
};
