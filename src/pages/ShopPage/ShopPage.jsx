import React from 'react';
import ShopProductCard from '../../components/ShopProductCard/ShopProductCard'
import './ShopPage.css'

function ShopPage(props){
    return (
        <div className="columns is-multiline">
        <h1 className="SP-title column is-full">{props.category}</h1>
        {props.products.map(product => (
            <ShopProductCard 
                product={product} 
                key={product._id}
            />
        ))}
        </div>
    )
}

export default ShopPage;