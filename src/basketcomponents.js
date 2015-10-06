var CartItem = React.createClass({

  calculateTotal: function() {
    return Number(this.props.price * this.props.qty).toFixed(2);
  },

  render: function() {
    return (
      <div key={this.props.key} className='cart-line'>
        <div className='cart-line__name'>{this.props.name}</div>
        <div className='cart-line__change-qty'>
          <a className='cart-line__qty-up' onClick={this.props.onQtyChanged.bind(null, this.props.arrayIndex, '+')}>+</a>
          <a className='cart-line__qty-down' onClick={this.props.onQtyChanged.bind(null, this.props.arrayIndex, '-')}>-</a>
        </div>
        <div className='cart-line__quantity'>{this.props.qty}</div>
        <div className='cart-line__price'>£{Number(this.props.price).toFixed(2)}</div>
        <div className='cart-line__total'>£{this.calculateTotal()}</div>
      </div>
    );
  }

});





var AllCartItems = React.createClass({

  buildRows: function() {
    var rows = [];
    var onQtyChanged = this.props.onQtyChanged;
    var x = 0;
    this.props.cartItems.forEach(function(cartItem) {
      rows.push(<CartItem key={cartItem.id} arrayIndex={x} name={cartItem.name} qty={cartItem.qty} price={cartItem.price} onQtyChanged={onQtyChanged} />);
      x ++;
    });
    return rows;
  },

  render: function() {
    return (
      <section className='all-cart-items'>
        <h1 className='all-cart-items__heading'>Cart Items</h1>
        <div className='all-cart-items__items'>
          {this.buildRows()}
        </div>
      </section>
    );
  }

});





var Discount = React.createClass({

  render: function() {
    return (
      <div className='discount'>
        <input className='discount__field' type='text' name='discount' />
        <button className='discount__apply'>Apply Discount</button>
      </div>
    )
  }

});





var TotalRow = React.createClass({

  calculateTotal: function(total) {
    return Number(total).toFixed(2);
  },

  render: function() {
    return (
      <div className='total-row'>
        <span className='total-row__label'>{this.props.label}</span>
        <span className='total-row__total'>£{this.calculateTotal(this.props.total)}</span>
      </div>
    );
  }

});





var Totals = React.createClass({

  subTotal: function() {
    var items = this.props.cartItems;
    var subTotal = 0;
    for (var x = 0; x < items.length; x ++) {
      subTotal += items[x].price * items[x].qty;
    }
    return subTotal;
  },
  taxTotal: function() {
    return this.subTotal() / 100 * 20;
  },
  total: function() {
    return this.subTotal() + this.taxTotal();
  },

  render: function() {
    return (
      <section className='totals'>
        <h1 className='totals__heading'>Totals</h1>
        <div className='totals__details'>
          <TotalRow label='Sub Total' total={this.subTotal()}/>
          <Discount />
          <TotalRow label='Discount Value' total=''/>
          <TotalRow label='Tax @ 20%' total={this.taxTotal()}/>
          <TotalRow label='Grand Total' total={this.total()}/>
        </div>
      </section>
    );
  }

});





var Basket = React.createClass({

  getInitialState: function() {
    return {cartItems};
  },

  handleQtyChanged: function(cartItemIndex, direction) {
    if (direction === '+') {
      cartItems[(cartItemIndex)].qty++;
    } else {
      cartItems[(cartItemIndex)].qty--;
    }

    this.setState({cartItems});
  },

  render: function() {
    return (
      <main>
        <AllCartItems cartItems={this.state.cartItems} onQtyChanged={this.handleQtyChanged}/>
        <Totals cartItems={this.state.cartItems} />
      </main>
    );
  }

});





React.render(
  <Basket cartItems={cartItems} />,
  document.getElementById('react-basket')
);
