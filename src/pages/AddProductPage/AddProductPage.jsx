import React from 'react';
import './AddProductPage.css'

import AddProductForm from '../../components/AddProductForm/AddProductForm'


function AddProductPage(props) {
    return (
        <div>
            <AddProductForm handleAddProduct={props.handleAddProduct}/>
        </div>
    )
}

export default AddProductPage;