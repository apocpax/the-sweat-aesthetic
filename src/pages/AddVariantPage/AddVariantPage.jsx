import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import AddVariantForm from '../../components/AddVariantForm/AddVariantForm'
import VariantCard from '../../components/VariantCard/VariantCard'
import { Link } from 'react-router-dom';

function AddVariantPage (props) {
    return(
        <div>
            <h1>You just added this product:</h1>
            <ProductCard 
                product={props.product}
                productVariants={props.variants.filter(variant => variant.product === props.product._id)}
            />

            <div>
                {props.variants.map(variant => 
                    variant.product === props.product._id ? <VariantCard variant={variant}/> : null
                )}
            </div>


            <AddVariantForm 
                product={props.product}
                handleAddVariant={props.handleAddVariant}
            />
            
            <Link to='/manageproducts'><button>Done Adding Variants</button></Link>
            
        </div>
    )
}

export default AddVariantPage;