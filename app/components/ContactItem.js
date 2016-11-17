var React = require('react'); // importa a lib react

var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,    
    email: React.PropTypes.string.isRequired,    
    description: React.PropTypes.string.isRequired    
  },
  render: function () {
    return React.createElement('li', {},
      React.createElement('h4', {
        style: { margin: '5px 0px' }
      }, this.props.name),
      React.createElement('a', {
        href: 'mailto:' + this.props.email
      }, this.props.email),
      React.createElement('div', {
        style: { margin: '0px 0px 15px' }
      }, this.props.description)
    );
  }
});

module.exports = ContactItem;