import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'
import { Link } from 'react-router-dom';

function ManageProductsPage(props) {
    return (
        <div>
            <Link to="/addproduct"><button>ADD PRODUCT</button></Link>
            {props.products.map(product => (
                <ProductCard
                    product={product} key={product._id}
                    handleDeleteProduct={props.handleDeleteProduct}
                    productVariants={props.variants.filter(variant => variant.product === product._id)}
                />
            ))}
        </div>
    )
}

export default ManageProductsPage;