import React from 'react';

function VariantCard(props) {
    return (
        <div>
            <p>Size: {props.variant.size}</p>
            <p>In Stock: {props.variant.inventory}</p>
        </div>
    )
}

export default VariantCard