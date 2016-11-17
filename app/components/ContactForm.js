var React = require('react'); // importa a lib react

var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function () {
    return React.createElement('form', {
        src: '#'
      },
      React.createElement('input', {
        type: 'text',
        value: this.props.contact.name,
        placeholder: 'Name'
      }),
      React.createElement('input', {
        type: 'text',
        value: this.props.contact.email,
        placeholder: 'Email'
      }),
      React.createElement('textarea', {
        value: this.props.contact.description,
        placeholder: 'Description'
      }),
      React.createElement('button', {
        type: 'submit',
        className: 'waves-effect waves-light btn'
      }, 'Submit')
    );
  }
});

module.exports = ContactForm;