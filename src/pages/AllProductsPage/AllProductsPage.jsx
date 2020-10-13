import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'

function AllProductsPage(props) {
    return(
        props.products.map(product => (
            <ProductCard 
            product={product} key={product._id}
            handleDeleteProduct={props.handleDeleteProduct}
            />
        ))
    )
}

export default AllProductsPage;