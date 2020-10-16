import React from 'react';
import { Link } from 'react-router-dom'
import styles from './ShopProductCard.module.css'

function ShopProductCard(props) {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <img className={styles.shortimg} src={props.product.photo}/>
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