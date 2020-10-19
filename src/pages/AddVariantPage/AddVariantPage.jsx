import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import AddVariantForm from '../../components/AddVariantForm/AddVariantForm'
import VariantCard from '../../components/VariantCard/VariantCard'
import { Link } from 'react-router-dom';
import './AddVariantPage.css'

function AddVariantPage (props) {
    return(
        <div>
            <h1 className="AVP-subtitles">You just added this product:</h1>
            <ProductCard 
                product={props.product}
                productVariants={props.variants.filter(variant => variant.product === props.product._id)}
            />

            <div className="columns AVP-variant">
                {props.variants.map(variant => 
                    variant.product === props.product._id ? <VariantCard key={variant._id} variant={variant}/> : null
                )}
            </div>


            <AddVariantForm 
                product={props.product}
                handleAddVariant={props.handleAddVariant}
            />
            
            <Link to='/manageproducts' className="button is-black mt-6 mb-6"> Done Adding Variants </Link>
            
        </div>
    )
}

export default AddVariantPage;