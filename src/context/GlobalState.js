import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';


const initialState = {

    products: [
        {
            _productId: "featured-product-1",
            name: "SHOE 1",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-1.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "featured-product-2",
            name: "SHOE 2",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-2.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        {
            _productId: "featured-product-3",
            name: "SHOE 3",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-3.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-4",
            name: "SHOE 4",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-4.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-5",
            name: "SHOE 5",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-5.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        {
            _productId: "our-product-6",
            name: "SHOE 6",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-6.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-7",
            name: "SHOE 7",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-7.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        {
            _productId: "our-product-8",
            name: "SHOE 8",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-8.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-9",
            name: "SHOE 9",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-9.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-10",
            name: "SHOE 10",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-10.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        {
            _productId: "our-product-11",
            name: "SHOE 11",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-11.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-12",
            name: "SHOE 12",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-12.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-13",
            name: "SHOE 13",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-13.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-14",
            name: "SHOE 14",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-14.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        {
            _productId: "our-product-15",
            name: "SHOE 15",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-15.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-16",
            name: "SHOE 16",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-16.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-17",
            name: "SHOE 17",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-17.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        {
            _productId: "our-product-18",
            name: "SHOE 18",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-18.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-19",
            name: "SHOE 19",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-19.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-20",
            name: "SHOE 20",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-20.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-21",
            name: "SHOE 21",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-21.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-22",
            name: "SHOE 22",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-22.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        {
            _productId: "our-product-23",
            name: "SHOE 23",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-23.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-24",
            name: "SHOE 24",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-24.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-25",
            name: "SHOE 25",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-25.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        {
            _productId: "our-product-26",
            name: "SHOE 26",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-26.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-27",
            name: "SHOE 27",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-27.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-28",
            name: "SHOE 28",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-28.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-29",
            name: "SHOE 29",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-29.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-30",
            name: "SHOE 30",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-30.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-31",
            name: "SHOE 31",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-31.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-32",
            name: "SHOE 32",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-32.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-33",
            name: "SHOE 33",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-33.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-34",
            name: "SHOE 34",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-34.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-35",
            name: "SHOE 35",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-35.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        {
            _productId: "our-product-36",
            name: "SHOE 36",
            price: 99,
            count: 1,
            img:
                "/assets/images/shoes/shoe-36.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },

    ],
    cart: [],
    total: 0
};

// create context
export const GlobalContext = createContext(initialState);

// create provider
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState, () => {

        const dataCart = localStorage.getItem('dataCart');
        const dataTotal = localStorage.getItem('dataTotal');

        return ({
            ...initialState,
            cart: (dataCart !== null ? JSON.parse(dataCart) : initialState.cart),
            total: (dataTotal !== null ? JSON.parse(dataTotal) : initialState.total)
        })
    });


    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(state.total))
    }, [state]);



    // Actions

    // function for adding the product to the cart
    function addCart(productId) {
        const { products, cart } = state;

        // check that the item should not be already added to cart
        const check = cart.every(product => {
            return product._productId !== productId;
        });

        if (check) {

            const data = products.filter(({ _productId }) => {
                return _productId === productId;
            });

            dispatch({
                type: 'ADD_TO_CART',
                payload: data
            });

            getTotal()
        }
        else {
            alert('This product is already added to the cart');
        }
    };

    // function for decreasing the product quantity
    function decrease(productId) {
        const { cart } = state;

        // iterating the array to find the product that matches the argument(productId) and decrementing it's count
        cart.forEach((product, index) => {
            if (product._productId === productId) {
                product.count === 1 ? product.count = 1 : product.count -= 1;
            }
        });


        // The filter() method creates an array filled with all array elements that pass a test
        // filtering(building the obj) the obj in which we decreased the count through forEach
        const filterCart = cart.filter((product, index) => (product._productId === productId));

        dispatch({
            type: 'DECREASE',
            payload: filterCart
        });

        getTotal()
    }

    // function for increasing the product quantity
    function increase(productId) {
        const { cart } = state;

        // iterating the array to find the product that matches the argument(productId) and incrementing it's count
        cart.forEach((product, index) => {
            if (product._productId === productId) {
                product.count += 1;
            }
        });

        // The filter() method creates an array filled with all array elements that pass a test
        // filtering(building the obj) the obj in which we increased the count through forEach
        const filterCart = cart.filter((product) => (product._productId === productId));

        dispatch({
            type: 'INCREASE',
            payload: filterCart
        });

        getTotal();
    }

    // function for removing the product from the cart
    function removeProduct(productId) {
        if (window.confirm("Do you want to delete this product")) {

            const { cart } = state;

            // iterating the array to find the product that matches the argument(productId) and incrementing it's count
            cart.forEach((product, index) => {
                if (product._productId === productId) {
                    cart.splice(index, 1);
                }
            });

            // The filter() method creates an array filled with all array elements that pass a test
            // filtering(building the obj) the obj in which we increased the count through forEach
            const filterCart = cart.filter((product) => (product._productId === productId));

            dispatch({
                type: 'REMOVE_PRODUCT',
                payload: filterCart
            });

            getTotal()
        }
    }

    // function for getting the total amount according to product price
    function getTotal() {
        const { cart } = state;

        const res = cart.reduce((prev, product) => {
            return (prev + (product.price * product.count));
        }, 0);

        dispatch({
            type: 'TOTAL',
            payload: res
        });
    }


    return (
        <GlobalContext.Provider value={{
            products: state.products,
            cart: state.cart,
            total: state.total,
            addCart,
            increase,
            decrease,
            removeProduct,
            getTotal
        }}>
            {children}
        </GlobalContext.Provider>
    );
};