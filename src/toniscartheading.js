var TonisHeading = React.createClass({


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
      <div className='tonis-heading'>
        <h1 className='tonis-heading__heading' style={this.state.h1Colour} onClick={this.changeColour.bind(this, 'h1Colour')}>Welcome to {this.props.name} Cart</h1>
        <h2 className='tonis-heading__strapline' style={this.state.h2Colour} onClick={this.changeColour.bind(this, 'h2Colour')}>My first react Component set</h2>
      </div>
    );
  }


});

React.render(
  <TonisHeading name='Tonis'/>,
  document.getElementById('react-heading')
);
