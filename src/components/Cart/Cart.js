import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { carts } = props;
    const totalSalary = carts.reduce((total, cart) => total + cart.salary, 0);
    const names = [];
    carts.forEach(cart => {
        names.push(cart.name);
    });
    return (
        <div className="cart">
            <h5>Player Added: {carts.length}</h5>
            <p>Player Names: {names.join(", ")}</p>
            <p className="salary">Total Salary: {totalSalary}</p>
        </div>
    );
};

export default Cart;