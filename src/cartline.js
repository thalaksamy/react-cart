var CartLine = React.createClass({


  calculateTotal: function() {
    return Math.round(this.props.itemPrice * this.props.quantityBagged * 100) / 100;
  },


  render: function() {
    return (
      <div className='cart-line'>
        <div className='cart-line__name'>{this.props.productName}</div>
        <div className='cart-line__quantity'>{this.props.quantityBagged}</div>
        <div className='cart-line__price'>{this.props.itemPrice}</div>
        <div className='cart-line__total'>{this.calculateTotal()}</div>
      </div>
    );
  }


});

React.render(
  <CartLine productName='Test Product' quantityBagged='5' itemPrice='5.99'/>,
  document.getElementById('cart-item')
);
