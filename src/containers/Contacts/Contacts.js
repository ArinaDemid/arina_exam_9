import React, {Component, Fragment} from 'react';
import Contact from '../../components/Contact/Contact';
import {connect} from "react-redux";
import {fetchContacts} from '../../store/actions/contacts';
import Spinner from '../../components/UI/Spinner/Spinner';

class Contacts extends Component{

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const contacts = this.props.contacts;
    let showContacts = null;
    if (contacts) {
      showContacts = (
        Object.keys(contacts).map(id => (
          <div className='Contact' key={id}>
            <Contact
              id={id}
              name={contacts[id].name}
              photo={contacts[id].photo}
            />
          </div>
        ))
      );
    }
    
    return (
      !this.props.spinner ? 
      <Fragment>
        <div className='ContactApp'>
          <div className='Contacts'>
            {showContacts}
          </div>
        </div>
      </Fragment>
      : <Spinner />
    );
  }
}

const mapStateToProps= state => {
  return {
    contacts: state.contacts.contacts,
    spinner: state.contacts.spinner,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(fetchContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);