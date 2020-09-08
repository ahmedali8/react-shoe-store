import React, { createContext } from 'react';


const initialtate = {

    data: {
        "featured-product-1": {
            name: "SHOE 1",
            img:
                "/assets/images/shoes/shoe-1.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "featured-product-2": {
            name: "SHOE 2",
            img:
                "/assets/images/shoes/shoe-2.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        "featured-product-3": {
            name: "SHOE 3",
            img:
                "/assets/images/shoes/shoe-3.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-4": {
            name: "SHOE 4",
            img:
                "/assets/images/shoes/shoe-4.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-5": {
            name: "SHOE 5",
            img:
                "/assets/images/shoes/shoe-5.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        "our-product-6": {
            name: "SHOE 6",
            img:
                "/assets/images/shoes/shoe-6.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-7": {
            name: "SHOE 7",
            img:
                "/assets/images/shoes/shoe-7.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        "our-product-8": {
            name: "SHOE 8",
            img:
                "/assets/images/shoes/shoe-8.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-9": {
            name: "SHOE 9",
            img:
                "/assets/images/shoes/shoe-9.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-10": {
            name: "SHOE 10",
            img:
                "/assets/images/shoes/shoe-10.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        "our-product-11": {
            name: "SHOE 11",
            img:
                "/assets/images/shoes/shoe-11.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-12": {
            name: "SHOE 12",
            img:
                "/assets/images/shoes/shoe-12.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-13": {
            name: "SHOE 13",
            img:
                "/assets/images/shoes/shoe-13.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-14": {
            name: "SHOE 14",
            img:
                "/assets/images/shoes/shoe-14.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        "our-product-15": {
            name: "SHOE 15",
            img:
                "/assets/images/shoes/shoe-15.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-16": {
            name: "SHOE 16",
            img:
                "/assets/images/shoes/shoe-16.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-17": {
            name: "SHOE 17",
            img:
                "/assets/images/shoes/shoe-17.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        "our-product-18": {
            name: "SHOE 18",
            img:
                "/assets/images/shoes/shoe-18.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-19": {
            name: "SHOE 19",
            img:
                "/assets/images/shoes/shoe-19.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-20": {
            name: "SHOE 20",
            img:
                "/assets/images/shoes/shoe-20.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-21": {
            name: "SHOE 21",
            img:
                "/assets/images/shoes/shoe-21.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-22": {
            name: "SHOE 22",
            img:
                "/assets/images/shoes/shoe-22.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        "our-product-23": {
            name: "SHOE 23",
            img:
                "/assets/images/shoes/shoe-23.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-24": {
            name: "SHOE 24",
            img:
                "/assets/images/shoes/shoe-24.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-25": {
            name: "SHOE 25",
            img:
                "/assets/images/shoes/shoe-25.jpg",
            colors: ["lightblue", "white", "crimson", "teal"],
        },
        "our-product-26": {
            name: "SHOE 26",
            img:
                "/assets/images/shoes/shoe-26.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-27": {
            name: "SHOE 27",
            img:
                "/assets/images/shoes/shoe-27.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-28": {
            name: "SHOE 28",
            img:
                "/assets/images/shoes/shoe-28.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-29": {
            name: "SHOE 29",
            img:
                "/assets/images/shoes/shoe-29.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-30": {
            name: "SHOE 30",
            img:
                "/assets/images/shoes/shoe-30.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-31": {
            name: "SHOE 31",
            img:
                "/assets/images/shoes/shoe-31.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-32": {
            name: "SHOE 32",
            img:
                "/assets/images/shoes/shoe-32.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-33": {
            name: "SHOE 33",
            img:
                "/assets/images/shoes/shoe-33.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-34": {
            name: "SHOE 34",
            img:
                "/assets/images/shoes/shoe-34.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-35": {
            name: "SHOE 35",
            img:
                "/assets/images/shoes/shoe-35.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        "our-product-36": {
            name: "SHOE 36",
            img:
                "/assets/images/shoes/shoe-36.jpg",
            colors: ["orange", "black", "crimson", "teal"],
        },
        
    }
};

// create context
export const GlobalContext = createContext(initialtate);

// create provider
export const GlobalProvider = ({ children }) => {

    return (
        <GlobalContext.Provider value={{
            data: initialtate.data
        }}>
            {children}
        </GlobalContext.Provider>
    );
};