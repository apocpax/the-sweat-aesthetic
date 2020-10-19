import React from 'react'
import EditProductForm from '../../components/EditProductForm/EditProductForm';
import './EditProductPage.css';

function EditProductPage(props) {
    return (
        <div>
            <EditProductForm
                location={props.location}
                handleUpdateProduct={props.handleUpdateProduct}
            />
        </div>
    )
}

export default EditProductPage;