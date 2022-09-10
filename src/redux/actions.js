import { createAction } from '@reduxjs/toolkit';
// import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './types';

// export const addContact = createAction(ADD_CONTACT);
// export const removeContact = createAction(REMOVE_CONTACT);
export const setFilter = createAction('filter/set');

// export const addContact = payload => ({
//   type: ADD_CONTACT,
//   payload,
// });

// export const removeContact = payload => ({
//   type: REMOVE_CONTACT,
//   payload,
// });

// export const setFilter = payload => ({
//   type: SET_FILTER,
//   payload,
// });
