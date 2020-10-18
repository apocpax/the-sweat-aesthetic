import React from 'react';
import { Link } from 'react-router-dom'
import './ShopProductCard.css'

function ShopProductCard(props) {
    return (
        <div className="column is-one-third container is-fluid">
            <h3 className="SPC-title">{props.product.name}</h3>
            <Link to={{
                pathname: '/details',
                state: { product: props.product }
            }}
            >
            <img className="SPC-img" src={props.product.photo}/>
            </Link>
        <p className="SPC-price">${props.product.price}.00</p>
        </div>
    )
}

export default ShopProductCard;