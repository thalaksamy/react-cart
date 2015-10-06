var Heading = React.createClass({

  changeColour: function(target) {
    var newState = {};
    newState[target] = {
      backgroundColor: RandomColour.randomColour()
    };
    this.setState(newState);
  },

  getInitialState: function() {
    return {
      h1Colour: {
        backgroundColor: RandomColour.randomColour()
      },
      h2Colour: {
        backgroundColor: RandomColour.randomColour()
      }
    }
  },

  render: function() {
    return (
      <header className='heading'>
        <h1 className='heading__heading' style={this.state.h1Colour} onClick={this.changeColour.bind(this, 'h1Colour')}>Welcome to {this.props.name} Cart</h1>
        <h2 className='heading__strapline' style={this.state.h2Colour} onClick={this.changeColour.bind(this, 'h2Colour')}>My first react Component set</h2>
      </header>
    );
  }

});

React.render(
  <Heading name='The' />,
  document.getElementById('react-heading')
);
