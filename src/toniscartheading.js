var TonisHeading = React.createClass({


  getInitialState: function() {
    return {
      h1Colour: {
        backgroundColor: '#fcd'
      },
      h2Colour: {
        backgroundColor: '#dcf'
      }
    }
  },


  handleH1Click: function(e) {
    this.setState({
      h1Colour: {
        backgroundColor: RandomColour.randomColour()
      }
    });
  },


  handleH2Click: function(e) {
    this.setState({
      h2Colour: {
        backgroundColor: RandomColour.randomColour()
      }
    });
  },


  render: function() {
    return (
      <div>
        <h1 style={this.state.h1Colour} onClick={this.handleH1Click}>Welcome to {this.props.name} Cart</h1>
        <h2 style={this.state.h2Colour} onClick={this.handleH2Click}>My first react Component set</h2>
      </div>
    );
  }


});

React.render(
  <TonisHeading name='Tonis'/>,
  document.getElementById('heading')
);
