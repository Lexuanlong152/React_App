import React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './index.css'

const defaultState = {
    products: [
        {
            name: 'Iphone 14 Pro Max',
            color: 'Black',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYduiL7gdNtxX51UaGwMKdKeCuZtEM0hbnIg&usqp=CAU',
            price: 599,
            inCart: 1,
            id: 1
        },
        {
            name: 'Iphone 14 ',
            color: 'Red',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7zTV62N2uIM1wuuUaKhpvCDTV2Zg6hP6AQ&usqp=CAU',
            price: 699,
            inCart: 1,
            id: 2
        },
        {
            name: 'Iphone 13',
            color: 'pink',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5Lcf0Y4MVqpK7g35BDHHPvqXbhZZV_6Liw&usqp=CAU',
            price: 499,
            inCart: 1,
            id: 3
        },
        {
            name: 'Macbook Air ',
            color: 'Gray',
            image: 'data:image/jpeg;base64,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',
            price: 999,
            inCart: 1,
            id: 4
        },
        {
            name: 'Apple Watch',
            color: 'Black',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcLwUNJjVmDaHspZb9jaVCVxH5jhkkTibag&usqp=CAU',
            price: 399,
            inCart: 1,
            id: 5
        }

    ],
    cartProducts: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log('added')
            console.log(action.payload)
            return { ...state, cartProducts: [...state.cartProducts, action.payload] }

        case "REMOVE_FROM_CART":
            return {
                ...state, cartProducts: state.cartProducts.filter(el => el.id !== action.payload)
            }

        case "INCREMENT_PRODUCT":
            return {
                ...state,
                cartProducts: state.cartProducts.map((item) => {
                    if (item.id === action.payload.id) {
                        item.inCart += action.payload.increment;
                    }
                    return item;
                })
            }

        case "DECREMENT_PRODUCT":
            return {
                ...state,
                cartProducts: state.cartProducts.map((item) => {
                    if (item.id === action.payload.id) {
                        item.inCart -= action.payload.increment;
                    }
                    return item;
                })
            }

        default:
            return state;
    }

}


const store = createStore(reducer);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


