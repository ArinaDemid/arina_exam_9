import axiosContacts from '../../axios-contacts';
import {  FETCH_CONTACTS_SUCCESS, 
          FETCH_CONTACTS_ERROR, 
          FETCH_CONTACTS_REQUEST,
        } 
from '../actions/actionsType';

export const fetchContactsSuccess = (contacts) => {
  return { type: FETCH_CONTACTS_SUCCESS, contacts };
};
export const fetchContactsError = (error) => {
  return { type: FETCH_CONTACTS_ERROR, error };
};
export const fetchContactsRequest = () => {
  return { type: FETCH_CONTACTS_REQUEST };
};

export const fetchContacts = () => {
  return dispatch => {
    dispatch(fetchContactsRequest());
    axiosContacts.get('/contacts.json').then(response => {
      dispatch(fetchContactsSuccess(response.data));
    }, error => {
      dispatch(fetchContactsError(error));
    });
  }
};


