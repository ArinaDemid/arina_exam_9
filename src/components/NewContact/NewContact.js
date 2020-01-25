import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import {connect} from "react-redux";
import {addContactToFRB, valueChange, changeContactFromFRB, preViewContact, closeModal} from '../../store/actions/contacts';
import {NavLink} from 'react-router-dom';

class NewContact extends Component {
  componentDidMount() {
    if(this.props.match.params.id) {
      this.props.preViewContact(this.props.match.params.id);
    }
  }

  render() {

    const contact = this.props.contact;
    let buttonForm = null;
    let title = null;
    if (this.props.match.params.id) {
      buttonForm = <Button type="submit" 
                      onClick={() => this.props.changeContact(this.props.match.params.id, contact)} 
                      style={{border: 'none', padding: '0 0'}}
                    >
                      <NavLink to="/" style={{backgroundColor: 'rgb(86, 22, 146)', color: 'white', padding: '15px 20px', textDecoration: 'none'}} >
                        Change contact
                      </NavLink>
                  </Button>;
      title = <h2 className="NewContact_title">Change contact</h2>;
    } else {
      buttonForm = <Button type="submit" 
                      onClick={(event) => this.props.submitContact(event, contact)} 
                      style={{border: 'none', padding: '0 0'}}
                    >
                      <NavLink to="/" style={{backgroundColor: 'rgb(86, 22, 146)', color: 'white', padding: '15px 20px', textDecoration: 'none'}} >
                        Save
                      </NavLink>
                    </Button> ;
      title = <h2 className="NewContact_title">Add new contact</h2>;
    }
    return (
      <div className="NewContact_block">
        {title}
          <Form className="NewContact_form"  >
            <FormGroup>
              <Label for="name">Name</Label>
                <Input required type="text" name="name" id="name" 
                  value={this.props.match.params.id ? this.props.contact.name : undefined}
                  onChange={(event) => this.props.valueChange(event.target.name, event.target.value)} 
                />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 NewContact_group">
              <Label for="phone">Phone</Label>
              <Input required type="text" name="phone" id="phone"
                value={this.props.match.params.id ? this.props.contact.phone : undefined} 
                onChange={(event) => this.props.valueChange(event.target.name, event.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 NewContact_group">
              <Label for="email">Email</Label>
              <Input required type="text" name="email" id="email" 
                value={this.props.match.params.id ? this.props.contact.email : undefined}
                onChange={(event) => this.props.valueChange(event.target.name, event.target.value)}
              />
            </FormGroup>
            <FormGroup className="NewContact_group">
              <Label for="photo">Photo</Label>
              <Input type="text" name="photo" id="photo" 
                value={this.props.match.params.id ? this.props.contact.photo : undefined}
                onChange={(event) => this.props.valueChange(event.target.name, event.target.value)}/>
            </FormGroup>
              <p style={{paddingRight: '15px'}}>Photo preview</p>
              <img src={this.props.contact.photo} alt="photo_people" style={{width: '40%', padding: '5px'}}/>
            <FormGroup className="NewContact_group" style={{display: 'flex', justifyContent: 'center', paddingTop: '35px'}}>
            {buttonForm}
            <Button type="submit" onClick={this.props.closeModal} style={{border: 'none', padding: '0 10px', backgroundColor: 'transparent'}}>
              <NavLink to="/" style={{backgroundColor: 'rgb(86, 22, 146)', color: 'white', padding: '15px 20px', textDecoration: 'none'}} >
                Back to contacts
              </NavLink>
            </Button>
            </FormGroup>
          </Form>
          
        </div>
    )
  }
};

const mapStateToProps= state => {
  return {
    contact: state.contacts.contact
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitContact: (contact, event) => dispatch(addContactToFRB(contact, event)),
    valueChange: (name, value) => dispatch(valueChange(name, value)),
    changeContact: (contactID, changeContact) => dispatch(changeContactFromFRB(contactID, changeContact)),
    preViewContact: (contactID) => dispatch(preViewContact(contactID)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewContact);