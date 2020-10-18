import React from 'react';
import { Link } from 'react-router-dom';
import './OrderConfirmedPage.css';

function OrderConfirmedPage(props) {
    return (
        <div className="OC-parent">
            <h1 className="OC-confirmed">Order Confirmed!</h1>

            <Link to="/"><button className="button is-white">Keep Shopping</button></Link>
        </div>
    )
}

export default OrderConfirmedPage;