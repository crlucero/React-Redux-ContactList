import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

export default class App extends Component {
  render() {
    return (
      <div>
      <ContactList />
      <ContactDetail />
      </div>
    );
  }
}
