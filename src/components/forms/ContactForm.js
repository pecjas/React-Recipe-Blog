import React, { Component } from 'react';
import Name from './Name';
import Email from './Email';
import Subject from './Subject';
import Message from './Message';
import Button from '../Button';

export default class ContactForm extends Component {
  render() {
    return (
      <React.Fragment>
      <form method="post">
        <Name id="contactName" placeholder="Your Name" ref="" />
        <Email id="contactEmail" />
        <Subject id="contactSubject" />
        <Message id="contactMessage" rows="5"/>
        <Button type="submit" placement="bottom" title="Send email" content="Send" />
      </form>
      </React.Fragment>
    );
  }
}