import React, { Component } from 'react';

class AddVariantForm extends Component {
    state = {
        formData: {
            size: '',
            inventory: 0,
            product: '',
        }
    }

    render() {
        return (
            <p>this is add variant form</p>
        )
    }
}

export default AddVariantForm;