import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'
import { Link } from 'react-router-dom';
import './ManageProductsPage.css'

function ManageProductsPage(props) {
    return (
        <div className="MPP-div .html">
            <Link to="/addproduct" className="button MPP-button is-outlined is-size-3">ADD PRODUCT</Link>
            {props.products.map(product => (
                <ProductCard
                    product={product} key={product._id}
                    handleDeleteProduct={props.handleDeleteProduct}
                    productVariants={props.variants.filter(variant => variant.product === product._id)}
                />
            ))}
            <Link to="/addproduct" className="button MPP-button is-outlined mt-3 is-size-3">ADD PRODUCT</Link>
        </div>
    )
}

export default ManageProductsPage;