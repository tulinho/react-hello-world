var React = require('react'); // importa a lib react

var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired
  },
  onNameChangedHandler: function(event){
    var newContact = Object.assign({}, this.props.contact, {name: event.target.value});
    (this.props.onChange || function(){})(newContact);
  },
  onEmailChangedHandler: function(event){
    var newContact = Object.assign({}, this.props.contact, {email: event.target.value});
    (this.props.onChange || function(){})(newContact);
  },
  onDescriptionChangedHandler: function(event){
    var newContact = Object.assign({}, this.props.contact, {description: event.target.value});
    (this.props.onChange || function(){})(newContact);
  },
  render: function () {
    return React.createElement('form', {
        src: '#'
      },
      React.createElement('input', {
        type: 'text',
        value: this.props.contact.name,
        placeholder: 'Name', 
        onChange: this.onNameChangedHandler
      }),
      React.createElement('input', {
        type: 'text',
        value: this.props.contact.email,
        placeholder: 'Email', 
        onChange: this.onEmailChangedHandler
      }),
      React.createElement('textarea', {
        value: this.props.contact.description,
        placeholder: 'Description', 
        onChange: this.onDescriptionChangedHandler
      }),
      React.createElement('button', {
        type: 'submit',
        className: 'waves-effect waves-light btn'
      }, 'Submit')
    );
  }
});

module.exports = ContactForm;