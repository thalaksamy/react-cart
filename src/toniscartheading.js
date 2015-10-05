var TonisHeading = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome to {this.props.name} Cart</h1>
        <h2>My first react Component set</h2>
      </div>
    );
  }
});

React.render(
  <TonisHeading name='Tonis'/>,
  document.getElementById('heading')
);
