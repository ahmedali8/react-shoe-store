export default (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': 
            return {
                products: state.products,
                cart: [...state.cart, ...action.payload]
            }
        
        case 'DECREASE':
            return {
                ...state,
                // will check and wont let the same product object duplicate in the array
                cart: [...state.cart.filter( product => product._productId !== action.payload._productId )]
            }

        case 'INCREASE':

            return {
                ...state,
                // will check and wont let the same product object duplicate in the array
                cart: [...state.cart.filter( product => product._productId !== action.payload._productId )]
            }

        case 'REMOVE_PRODUCT':

            return {
                ...state,
                // will check and wont let the same product object duplicate in the array
                cart: [...state.cart.filter( product => product._productId !== action.payload._productId )]
            }

        case 'TOTAL':

            return {
                ...state,
                total: action.payload
            }

        default: 
            return state;
    }
}