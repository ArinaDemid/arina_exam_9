import axiosContacts from '../../axios-contacts';
import {  FETCH_CONTACTS_SUCCESS, 
          FETCH_CONTACTS_ERROR, 
          FETCH_CONTACTS_REQUEST,
          CHANGE_CONTACT_FROM_FRB, 
          POST_CONTACT_TO_FRB_ERROR,
          POST_CONTACT_TO_FRB_REQUEST,
          VALUE_CHANGE,
          CHANGE_CONTACT_FROM_FRB_REQUEST,
          CHANGE_CONTACT_FROM_FRB_ERROR,
          PRE_VIEW_CONTACT_REQUEST, 
          PRE_VIEW_CONTACT_SUCCESS, 
          PRE_VIEW_CONTACT_ERROR,
          CLOSE_MODAL,
          SHOW_MODAL,
          SAVE_ID,
          LOAD_CONTACT_SUCCESS, 
          LOAD_CONTACT_REQUEST, 
          LOAD_CONTACT_ERROR,
          POST_CONTACT_TO_FRB_SUCCESS,
          DELETE_CONTACT_FROM_FRB_ERROR,
          DELETE_CONTACT_FROM_FRB_REQUEST,
          CLEAN_FORM } 
from '../actions/actionsType';

export const fetchContactsRequest = () => ({ type: FETCH_CONTACTS_REQUEST });
export const fetchContactsSuccess = (contacts) => ({ type: FETCH_CONTACTS_SUCCESS, contacts });
export const fetchContactsError = (error) => ({ type: FETCH_CONTACTS_ERROR, error });

export const postContactToFRBRequest = () => ({ type: POST_CONTACT_TO_FRB_REQUEST });
export const postContactToFRBError = (error) => ({type: POST_CONTACT_TO_FRB_ERROR, error });
export const postContactToFRBSuccess = () => ({type: POST_CONTACT_TO_FRB_SUCCESS });

export const valueChange = (name, value) => ({ type: VALUE_CHANGE, name, value });

export const changeContactFromFRBRequest = () => ({ type: CHANGE_CONTACT_FROM_FRB_REQUEST });
export const changeContactFromFRBSuccess = (contactID, changeContact) => ({type: CHANGE_CONTACT_FROM_FRB, contactID, changeContact });
export const changeContactFromFRBError = () => ({type: CHANGE_CONTACT_FROM_FRB_ERROR });

export const preViewContactRequest = () => ({ type: PRE_VIEW_CONTACT_REQUEST });
export const preViewContactSuccess = (contact, contactID) => ({ type: PRE_VIEW_CONTACT_SUCCESS, contact, contactID });
export const preViewContactError = () => ({ type: PRE_VIEW_CONTACT_ERROR });
export const closeModal = () => ({ type: CLOSE_MODAL });

export const showModal = () => ({ type: SHOW_MODAL });
export const saveID = (contactID) => ({ type: SAVE_ID, contactID});

export const loadContactRequest = () => ({ type: LOAD_CONTACT_REQUEST });
export const loadContactSuccess = (contact) => ({type: LOAD_CONTACT_SUCCESS, contact });
export const loadContactError = () => ({ type: LOAD_CONTACT_ERROR });

export const deleteContactFromFRBRequest = () => ({ type: DELETE_CONTACT_FROM_FRB_REQUEST});
export const deleteContactFromFRBError = () => ({ type: DELETE_CONTACT_FROM_FRB_ERROR });

export const cleanForm = () => ({ type: CLEAN_FORM });

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
      dispatch(postContactToFRBSuccess());
      dispatch(fetchContacts());
    } catch(error) {
      dispatch(postContactToFRBError(error));
    }
  }
};

export const preViewContact = (contactID) => {
  return async dispatch => {
    try {
      dispatch(preViewContactRequest());
      const response = await axiosContacts.get(`/contacts/${contactID}.json`);
      dispatch(preViewContactSuccess(response.data, contactID));
    } catch (error) {
      dispatch(preViewContactError(error));
    }
  }
};

export const changeContactFromFRB = (contactID, changeContact) => {
  return async dispatch => {
    try {
      dispatch(changeContactFromFRBRequest());
      await axiosContacts.put(`/contacts/${contactID}.json`, changeContact);
      dispatch(changeContactFromFRBSuccess(contactID, changeContact));
    } catch(error) {
      dispatch(changeContactFromFRBError(error));
    }
  }
};

export const loadContact = (contactID) => {
  return async dispatch => {
    try {
      dispatch(loadContactRequest());
      const response = await axiosContacts.get(`/contacts/${contactID}.json`);
      dispatch(saveID(contactID));
      dispatch(loadContactSuccess(response.data));
      dispatch(showModal());
    } catch (error) {
      dispatch(loadContactError(error));
    };
  }
};

export const deleteContactFromFRB = (contactID) => {
  return async dispatch => {
    try {
      dispatch(deleteContactFromFRBRequest());
      await axiosContacts.delete(`/contacts/${contactID}.json`);
      dispatch(closeModal());
      dispatch(fetchContacts());
    } catch(err) {
      dispatch(deleteContactFromFRBError(err));
    }
  }
};