import React from 'react'
import EditProductForm from '../../components/EditProductForm/EditProductForm'
import styles from './EditProductPage.module.css'

function EditProductPage(props) {
    return (
        <div>
            <h1>Edit Product</h1>
            <img src={props.location.state.product.photo} className={styles.img}/>
            <EditProductForm
                location={props.location}
                handleUpdateProduct={props.handleUpdateProduct}
            />
        </div>
    )
}

export default EditProductPage;