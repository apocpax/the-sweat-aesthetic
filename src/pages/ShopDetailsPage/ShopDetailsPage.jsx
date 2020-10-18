import React from 'react';
import './ShopDetailsPage.css'
import PurchaseForm from '../../components/PurchaseForm/PurchaseForm'

function ShopDetailsPage(props) {
    return (
        <div className="columns is-multiline container is-fluid SDP">
            <div className="column is-full">
                <h1 className="SDP-title">{props.location.state.product.name}</h1>
            </div>
            <div className="column is-half">
                <img className="SDP-img" src={props.location.state.product.photo}/>
            </div>

            <div className="column is-half">
                <h1 className="has-text-black is-size-4">Price: ${props.location.state.product.price}</h1>
                <h3 className="has-text-black is-family-sans-serif">{props.location.state.product.description}</h3>
                <PurchaseForm
                    variants={props.variants.filter(variant => variant.product === props.location.state.product._id)}
                    product={props.location.state.product}
                    handlePurchase={props.handlePurchase}
                />
            </div>

        </div>
    )
}

export default ShopDetailsPage