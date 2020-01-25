import React, {Component} from "react";
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact_block">
        <img src={this.props.photo} alt="photo_people" className="Contact_img"/>
        <h4 className="Contact_name">{this.props.name}</h4>
      </div>
    )
  }
};

export default Contact;