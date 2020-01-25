import { FETCH_CONTACTS_SUCCESS, 
  FETCH_CONTACTS_REQUEST, 
  FETCH_CONTACTS_ERROR, 
  POST_CONTACT_TO_FRB_ERROR,
  POST_CONTACT_TO_FRB_REQUEST
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
    default:
      return state;
  }
};
export default reducer;
