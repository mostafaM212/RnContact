import {ADD_CONTACT, SET_ACTIVE_CONTACT, SET_CONTACTS} from '../actions/contactsActions';

const initialState = {
  contacts: [],
  error: null,
  isLoading: false,
  activeContact : {}
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.contacts,
      };
      break;
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.contact, ...action.contacts],
      };
      break;
    case SET_ACTIVE_CONTACT:
      let givenContact = state.contacts.filter(con => {
        const index = con.phoneNumbers.findIndex(
          el => el.number === action.phoneNumber,
        );
        if (index >= 0) {
          return true;
        }
        return false;
      });
      console.log(state.contacts , 'reducer')
      return {
        ...state,
        activeContact : givenContact
      }
      break;
    default:
      return {...ADD_CONTACTstate};
      break;
  }
};

export default contactsReducer;
