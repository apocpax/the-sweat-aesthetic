import React from 'react';
import styles from './ShopDetailsPage.module.css'
import PurchaseForm from '../../components/PurchaseForm/PurchaseForm'

function ShopDetailsPage(props) {
    return (
        <div>
            <h1>{props.location.state.product.name}</h1>
            <img src={props.location.state.product.photo} className={styles.shortimg} />
            <h3>Price: ${props.location.state.product.price}</h3>

            <PurchaseForm 
                variants={props.variants.filter(variant => variant.product === props.location.state.product._id)}
                product={props.location.state.product}
                handlePurchase={props.handlePurchase}
            />

        </div>
    )
}

export default ShopDetailsPage