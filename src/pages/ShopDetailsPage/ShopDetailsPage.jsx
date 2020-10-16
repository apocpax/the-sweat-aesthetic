import React from 'react';
import styles from './ShopDetailsPage.module.css'

function ShopDetailsPage(props) {
    return (
        <div>
            <h1>{props.location.state.product.name}</h1>
            <img src={props.location.state.product.photo} className={styles.shortimg} />
            <h3>Price: ${props.location.state.product.price}</h3>


        </div>
    )
}

export default ShopDetailsPage