import React, {Component, Fragment} from "react";
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import './ShowContact.css';
import {loadContact, closeModal } from '../../store/actions/contacts';
import Spinner from "../UI/Spinner/Spinner";

class ShowContact extends Component {

  render() {
    
    let buttonsBlock = null;
    buttonsBlock = (
      <div className="ShowContact">
        <NavLink className="ShowContact_btn" to={'/contacts/' + this.props.idSearchContact + '/edit'} >
          <i className="fas fa-edit" style={{fontSize: '20px'}}/>
          Edit
        </NavLink>
        <button className="ShowContact_btn" >
          <i className="fas fa-trash-alt" style={{fontSize: '20px', marginRight: '5px'}}/>
          Delete
        </button>
      </div>
    );

    return (
      this.props.contactShow ?
      <Fragment>
        <button className="ShowContact_close"
          onClick={this.props.closeModal}>
          <i className="fas fa-times" style={{fontSize: '20px', marginRight: '5px'}}/>
        </button>
        <div className="ShowContact_block">
          <img className="ShowContact_img" src={this.props.contactShow.photo} alt="photo_people" />
          <div className="ShowContact_info">
            <h4 className="ShowContact_text">{this.props.contactShow.name}</h4>
            <p>{this.props.contactShow.phone}</p>
            <p>{this.props.contactShow.email}</p>
          </div>
        </div>
        {buttonsBlock}
      </Fragment>
      : <Spinner />
    )
  }
};

const mapStateToProps= state => {
  return {
    contactShow: state.contacts.contactShow,
    idSearchContact: state.contacts.idSearchContact
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadContact: (contactID) => dispatch(loadContact(contactID)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowContact);