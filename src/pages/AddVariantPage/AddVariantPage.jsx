import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import AddVariantForm from '../../components/AddVariantForm/AddVariantForm'

function AddVariantPage (props) {
    return(
        <div>
            <h1>You just added this product:</h1>
            <ProductCard 
                product={props.location.state.product}
            />


            <AddVariantForm />
        </div>
    )
}

export default AddVariantPage;