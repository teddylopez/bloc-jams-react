import React, { Component } from 'react';
import './../styles/contact.css';

class Contact extends Component {

  render() {
    return (
        <div>
          <div className="page-title">Complain to me</div>
          <form className="new_contact" id="new_contact">
            <label htmlFor="contact_name">Fake Name</label><br />
            <input required="required" type="text" name="contact[name]" id="contact_name" />

            <br />

            <label htmlFor="contact_email">Fake Email</label><br />
            <input required="required" type="email" name="contact[email]" id="contact_email" />

            <br />

            <label htmlFor="contact_message">Fake News</label><br />
            <textarea as="text" name="contact[message]" id="contact_message">
            </textarea>

            <input type="submit" name="commit" value="Send To Outer Space" className="button" data-disable-with="Send Message" />

            </form>
        </div>
    );
  }
}

export default Contact;
