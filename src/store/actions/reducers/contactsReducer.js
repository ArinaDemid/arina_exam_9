import { FETCH_CONTACTS_SUCCESS, 
  FETCH_CONTACTS_REQUEST, 
  FETCH_CONTACTS_ERROR, 
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
    default:
      return state;
  }
};
export default reducer;
