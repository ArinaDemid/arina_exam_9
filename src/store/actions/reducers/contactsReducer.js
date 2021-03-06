import {  FETCH_CONTACTS_SUCCESS, 
          FETCH_CONTACTS_REQUEST, 
          FETCH_CONTACTS_ERROR, 
          ADD_CONTACT_TO_FRB,
          CHANGE_CONTACT_FROM_FRB,
          POST_CONTACT_TO_FRB_REQUEST,
          POST_CONTACT_TO_FRB_ERROR,
          POST_CONTACT_TO_FRB_SUCCESS,
          VALUE_CHANGE,
          PRE_VIEW_CONTACT_REQUEST,
          PRE_VIEW_CONTACT_SUCCESS,
          PRE_VIEW_CONTACT_ERROR,
          CLOSE_MODAL,
          SHOW_MODAL,
          SAVE_ID,
          LOAD_CONTACT_SUCCESS,
          CLEAN_FORM
} from "../actionsType";

const initialState = {
  contacts: [],
  contact: {
    name: "",
    phone: "",
    photo: "",
    email: ""
  },
  spinner: false,
  modal: false,
  idSearchContact: "",
  contactShow: {}
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CONTACTS_SUCCESS:
      return {...state, contacts: action.contacts, spinner: false};
    case FETCH_CONTACTS_REQUEST:
      return {...state, spinner: true};
    case FETCH_CONTACTS_ERROR:
      return {...state, spinner: false};
    case POST_CONTACT_TO_FRB_ERROR:
      return {...state, spinner: false};
    case POST_CONTACT_TO_FRB_REQUEST:
      return {...state, spinner: true, modal: false};
    case POST_CONTACT_TO_FRB_SUCCESS:
      return {...state, contact: {
        ...state.contact,
        name: "",
        phone: "",
        photo: "",
        email: "",
        }
      };
    case CHANGE_CONTACT_FROM_FRB:
      return {...state, 
        contacts: {
          ...state.contacts, 
          [action.contactID]: action.changeContact
        },
        modal: false
      };
    case VALUE_CHANGE:
      return {...state, 
        contact: {
        ...state.contact,
        [action.name]: action.value
        },
        modal: false
      };
    case ADD_CONTACT_TO_FRB:
      return {...state, 
        contact: {
        ...state.contact,
        name: "",
        phone: "",
        photo: "",
        email: ""
        },
        spinner: false,
        modal: false
      };
    case PRE_VIEW_CONTACT_REQUEST:
      return {...state, spinner: true};
    case PRE_VIEW_CONTACT_SUCCESS:
      return {...state, 
        contact: {
          ...state.contact,
          name: action.contact.name,
          phone: action.contact.phone,
          photo: action.contact.photo,
          email: action.contact.email
          },
        spinner: false};
    case PRE_VIEW_CONTACT_ERROR:
      return {...state, spinner: false};
    case SHOW_MODAL:
      return {...state, modal: true};
    case SAVE_ID:
      return {...state, 
        idSearchContact: action.contactID,
        modal: true};
    case CLOSE_MODAL:
      return {...state, modal: false};
    case LOAD_CONTACT_SUCCESS:
      return {...state, 
        contactShow: action.contact};
  case CLEAN_FORM:
    return {...state,  
      contact: {
        ...state.contact,
        name: "",
        phone: "",
        photo: "",
        email: ""
        },
        contactShow: {},
        idSearchContact: ""
    };
    default:
      return state;
  }
};
export default reducer;
