import React from 'react';
import { Link } from 'react-router-dom';
import './OrderConfirmedPage.css';

function OrderConfirmedPage(props) {
    return (
        <div className="OC-parent">
            <h1 className="OC-confirmed">Order Confirmed!</h1>

            <Link to="/" className="button is-white is-large">Keep Shopping</Link>
        </div>
    )
}

export default OrderConfirmedPage;