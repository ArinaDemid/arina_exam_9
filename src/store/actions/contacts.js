import axiosContacts from '../../axios-contacts';
import {  FETCH_CONTACTS_SUCCESS, 
          FETCH_CONTACTS_ERROR, 
          FETCH_CONTACTS_REQUEST,
          POST_CONTACT_TO_FRB_REQUEST,
          POST_CONTACT_TO_FRB_ERROR,
          VALUE_CHANGE,
          
        } 
from '../actions/actionsType';

export const fetchContactsRequest = () => ({ type: FETCH_CONTACTS_REQUEST });
export const fetchContactsSuccess = (contacts) => ({ type: FETCH_CONTACTS_SUCCESS, contacts });
export const fetchContactsError = (error) => ({ type: FETCH_CONTACTS_ERROR, error });
export const postContactToFRBRequest = () => ({ type: POST_CONTACT_TO_FRB_REQUEST });
export const postContactToFRBError = (error) => ({type: POST_CONTACT_TO_FRB_ERROR, error });
export const valueChange = (name, value) => ({ type: VALUE_CHANGE, name, value });


export const fetchContacts = () => {
  return async dispatch => {
    try {
      dispatch(fetchContactsRequest());
      const response = await axiosContacts.get('/contacts.json');
      dispatch(fetchContactsSuccess(response.data));
    } catch (error) {
      dispatch(fetchContactsError(error));
    }
  }
};

export const addContactToFRB = (event, contact) => {
  event.preventDefault();
  return async dispatch => {
    try {
      dispatch(postContactToFRBRequest());
      await axiosContacts.post('/contacts.json', contact);
      dispatch(fetchContacts());
    } catch(error) {
      dispatch(postContactToFRBError(error));
    }
  }
};

