let React = require('react'); // importa a lib react
let reactDOM = require('react-dom'); // importa a lib react-dom

var ContactItem = require('./components/ContactItem.js');
var ContactForm = require('./components/ContactForm.js');
var ContactView = require('./components/ContactView.js');


let contacts = [
  {
    key: 1,
    name: "Marco Túlio ",
    email: " marco.mtfc@gmail.com",
    description: 'Front-end Unicorn'
  },
  {
    key: 2,
    name: "Marco Ferreira ",
    email: " marco.ferreira@dtidigital.com.br",
    description: 'Front-end Unicorn'
  },
  {
    key: 3,
    name: "Sergio Godinho ",
    email: " sergio.godinho@dtidigital.com.br",
    description: 'Front-end Unicorn'
  },
  {
    key: 4,
    name: "Eduardo Oliveira ",
    email: " eduardo.oliveira@dtidigital.com.br",
    description: 'Front-end Unicorn'
  },
  {
    key: 5,
    name: "Magno Célio ",
    description: 'Front-end Unicorn'
  }
];

var listElements = contacts
  .filter(function (contact) {
    return !!contact.email;
  })
  .map(function (contact) {
    return React.createElement(ContactItem, {
      key: contact.key,
      name: contact.name,
      email: contact.email,
      description: contact.description
    });
  });

/*let rootElement = React.createElement('div', {},
  React.createElement('h3', {}, 'Contacts'),
  React.createElement('ul', {}, listElements),
  React.createElement(ContactForm, {
    contact: {},
    onChange: function (contact) {
      console.log(contact);
    }
  })
);*/

var renderContactView = function(contact) {
  let rootElement = React.createElement(ContactView, {
    contacts: listElements,
    newContact: contact,
    onChange: function(contact){
      console.log(contact);
    }
  });
  reactDOM.render(rootElement, document.getElementById('app'));
}
renderContactView({});

