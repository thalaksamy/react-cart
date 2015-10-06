var Basket = React.createClass({


  render: function() {
    return (
      <div className='basket'>Products</div>
    );
  }


});

React.render(
  <Basket />,
  document.getElementById('react-basket')
);
