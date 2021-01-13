const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      cart: []
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter(item => item.id !== action.payload)
    }
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    let newItems = state.cart.map(item => {
      if (item.id === action.payload.id) {
        if (action.payload.type === 'INC') {
          return { ...item, amount: item.amount + 1 }
        } else if (action.payload.type === 'DEC') {
          return { ...item, amount: item.amount - 1 }
        }
      }
      return item;
    }).filter(item => item.amount !== 0);
    return {
      ...state,
      cart: newItems
    }
  }

  if (action.type === 'INCREASE') {
    let newItems = state.cart.map(item => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 }
      }
      return item;
    });
    return {
      ...state,
      cart: newItems
    }
  }

  if (action.type === 'DECREASE') {
    let newItems = state.cart.map(item => {
      if (action.payload === item.id) {
        return { ...item, amount: item.amount - 1 }
      }
      return item;
    }).filter(item => item.amount !== 0)
    return {
      ...state,
      cart: newItems
    }
  }

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      const itemTotal = price * amount;

      cartTotal.total += itemTotal;
      cartTotal.amount += amount;
      return cartTotal;
    }, { total: 0, amount: 0 })

    total = parseFloat(total.toFixed(2))

    return { ...state, total, amount }
  }

  if (action.type === 'LAODING') {
    return { ...state, loading: true }
  }

  if (action.type === 'DISPLAY_ITEMS') {
    return { ...state, loading: false, cart: action.payload }
  }


  throw new Error('No Matching Type!!');
}

export default reducer;