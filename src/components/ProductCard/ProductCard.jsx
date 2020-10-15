import React from 'react';
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div className={styles.div}>
            <img src={props.product.photo} className={styles.img} />
            <div>
                <h2>{props.product.name}</h2>
                <p>{props.product.description}</p>
                <p>Collection: {props.product.category}</p>
                <p>Price: ${props.product.price}</p>


                    <button
                        onClick={() => props.handleDeleteProduct(props.product._id)}
                    >
                        Delete Product
                    </button>

                <Link
                    to={{
                        pathname: '/editproduct',
                        state: {product: props.product}
                    
                    }}   
                >
                    <button>
                        Edit Product
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default ProductCard;