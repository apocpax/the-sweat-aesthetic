import React from 'react';
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div className="PC-div box columns">

            <div className="column is-two-fifths">
                <img src={props.product.photo} className="PC-img" />
            </div>

            <div className="column is-three-fifths PC-productinfo">
                <div>
                    <h2 className="title is-size-4">{props.product.name}</h2>
                    <p className="subtitle PC-desc">{props.product.description}</p>
                    <p className="is-size-5"><strong>Collection: </strong>{props.product.category}</p>
                    <p className="is-size-5"><strong>Price: </strong>${props.product.price}</p>
                    <p className="is-size-5"><strong>Variants: </strong>{props.productVariants.length}</p>
                </div>



                <div className="columns PC-buttons">
                    <div className="column is-two-fifths">
                        <Link
                            className="button is-black is-medium is-fullwidth"
                            to={{
                                pathname: '/editproduct',
                                state: { product: props.product }
                            }}
                        >Edit Product
                        </Link>
                    </div>
                    <div className="column is-two-fifths">

                        <button
                            onClick={() => props.handleDeleteProduct(props.product._id)}
                            className="button is-outlined is-medium is-fullwidth"
                        >
                            Delete Product
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductCard;