import React from 'react';
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div className="PC-div box columns">

            <div className="column is-half">
                <img src={props.product.photo} className="PC-img" />
            </div>

            <div className="column is-half PC-productinfo">
                <h2 className="title is-6">{props.product.name}</h2>
                <p><strong>Collection: </strong>{props.product.category}</p>
                <p><strong>Price: </strong>${props.product.price}</p>
                <p><strong>Variants: </strong>{props.productVariants.length}</p>



                <div className="columns PC-buttons">
                    <div className="column is-two-fifths">

                        <button
                            onClick={() => props.handleDeleteProduct(props.product._id)}
                            className="button is-danger is-small is-fullwidth"
                        >
                            Delete Product
                    </button>
                    </div>
                    <div className="column is-two-fifths">
                        <Link
                            className="button is-info is-small is-fullwidth"
                            to={{
                                pathname: '/editproduct',
                                state: { product: props.product }
                            }}
                        >Edit Product
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductCard;