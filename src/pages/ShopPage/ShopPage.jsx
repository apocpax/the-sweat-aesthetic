import React from 'react';
import ShopProductCard from '../../components/ShopProductCard/ShopProductCard'

function ShopPage(props){
    return (
        props.products.map(product => (
            <ShopProductCard product={product}/>
        ))
    )
}

export default ShopPage;