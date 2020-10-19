import React from 'react';
import './VariantCard.css'

function VariantCard(props) {
    return (
        <div className="VC-card box">
            <p className="title is-size-5">{props.variant.size}</p>
            <p className="subtitle is-size-6">In Stock: {props.variant.inventory}</p>
        </div>
    )
}

export default VariantCard