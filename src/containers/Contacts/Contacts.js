import React, {Component, Fragment} from 'react';
import Contact from '../../components/Contact/Contact';
import {connect} from "react-redux";
import {fetchContacts, showModal, closeModal, loadContact} from '../../store/actions/contacts';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';

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
              save={() => this.props.loadContact(id)}
              close={this.props.closeModal}
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
        <Modal show={this.props.modal} close={this.props.closeModal}>
        </Modal>
      </Fragment>
      : <Spinner />
    );
  }
}

const mapStateToProps= state => {
  return {
    contacts: state.contacts.contacts,
    spinner: state.contacts.spinner,
    modal: state.contacts.modal,
    idSearchContact: state.contacts.idSearchContact
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(fetchContacts()),
    showModal: () => dispatch(showModal()),
    closeModal: () => dispatch(closeModal()),
    loadContact: (contactID) => dispatch(loadContact(contactID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);