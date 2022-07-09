import {matchSorter} from 'match-sorter';

export const SET_CONTACTS = 'SET_CONTACTS';
export const ADD_CONTACT = 'ADD_CONTACT';
export const SET_ACTIVE_CONTACT = 'SET_ACTIVE_CONTACT'

const sorter = (contacts = []) => {
  let sortedContacts = contacts.sort(function (a, b) {
    if (a.displayName && b.displayName) {
      const nameA = a.displayName.toUpperCase(); // ignore upper and lowercase
      const nameB = b.displayName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    }
  });

  return sortedContacts;
};

export const setContacts = contacts => dispatch => {
  const sortedContacts = sorter(contacts);

  dispatch({
    type: SET_CONTACTS,
    contacts: sortedContacts,
  });
};

export const addContact = contact => dispatch => {
  dispatch({
    type: ADD_CONTACT,
    contact: contact,
  });
};


export const setActiveContact = phoneNumber => dispatch => {
  
  dispatch({
    type: SET_ACTIVE_CONTACT,
    phoneNumber : phoneNumber
  })
}
