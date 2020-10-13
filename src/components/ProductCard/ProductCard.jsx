import React from 'react';
import styles from './ProductCard.module.css'

function ProductCard(props) {
    return (
        <div className={styles.div}>
            <img src={props.product.photo} className={styles.img} />
            <div>
                <h2>{props.product.name}</h2>
                <p>{props.product.description}</p>
                <p>{props.product.size}</p>
                <p>{props.product.category}</p>
                <p>{props.product.price}</p>
                <p>{props.product.inventory}</p>
            </div>
        </div>
    )
}

export default ProductCard;