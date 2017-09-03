import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { bitcore } from 'bitcore-lib';

import './body.html';

Template.body.helpers({
  tasks(){
    return Tasks.find({}).fetch();;
  }
});

Template.body.events({
  'click button'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    const target = event.target;
    const text = target.form.text.value;

    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.form.text.value = '';
  },
});
