var CartItem = React.createClass({


  calculateTotal: function() {
    return Math.round(this.props.price * this.props.qty * 100) / 100;
  },


  render: function() {
    return (
      <div className='cart-line'>
        <div className='cart-line__name'>{this.props.name}</div>
        <div className='cart-line__quantity'>{this.props.qty}</div>
        <div className='cart-line__price'>{this.props.price}</div>
        <div className='cart-line__change-qty'>
          <a className='cart-line__qty-up'>+</a>
          <a className='cart-line__qty-down'>-</a>
        </div>
        <div className='cart-line__total'>{this.calculateTotal()}</div>
      </div>
    );
  }


});
