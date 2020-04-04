import React, { Component } from 'react';
import ContactForm from './forms/ContactForm'

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      <h1>Contact Page</h1>
      <br />
      <p>Blah blah blah, so you want to reach out? We'll add some information here, and then
        you can fill out the details below to shoot me an email.
      </p>
      <ContactForm />
      </React.Fragment>
    );
  }
}