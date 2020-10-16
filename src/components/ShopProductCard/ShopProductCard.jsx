import React from 'react';
import { Link } from 'react-router-dom'

function ShopProductCard(props) {
    return (
        <div>
            <p>{props.product.name}</p>
            <Link to={{
                pathname: '/details',
                state: { product: props.product }
            }}
            >
                <button>Details</button>
            </Link>
        </div>
    )
}

export default ShopProductCard;