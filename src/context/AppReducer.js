export default (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': 
            return {
                products: state.products,
                cart: [...state.cart, ...action.payload]
            }
        
        default: 
            return state;
    }
}