let React = require('react'); // importa a lib react
let ContactForm = require('./ContactForm.js');

var ContactView = React.createClass({
  propTyés: {
    contacts: React.PropTypes.array.isRequered,
    newContact: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func
  },
  onChangeHandler: function (contact) {
    if (this.props.onChange) {
      this.props.onChange(contact);
    }
  },
  render: function () {
    return React.createElement('div', {},
      React.createElement('h3', {}, 'Contacts'),
      React.createElement('ul', {}, this.props.contacts),
      React.createElement(ContactForm, {
        contact: this.props.newContact,
        onChange: this.onChangeHandler
      })
    );
  }
});

module.exports = ContactView;