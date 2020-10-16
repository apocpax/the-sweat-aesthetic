import React from 'react';

function ShopDetailsPage(props){
    return (
        <p>{props.location.state.product.name}</p>
    )
}

export default ShopDetailsPage