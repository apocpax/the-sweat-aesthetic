import React, { Component } from 'react';

class AddVariantForm extends Component {

    state = {
        invalidForm: true,
        formData: {
            size: 'Small',
            inventory: 0,
            product: this.props.product._id
        }
    }

    formRef = React.createRef();

    handleChange = (e) => {
        const formData = {
            ...this.state.formData, 
            [e.target.name]: e.target.value,
            product: this.props.product._id
        }
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddVariant(this.state.formData);

    }

    render() {
        return (
            <div>
                <h1>Add Variant</h1>
                <form onSubmit={this.handleSubmit} autoComplete="off" ref={this.formRef}>
                    <label>Size</label>
                    <select
                        name="size"
                        value={this.state.formData.size}
                        onChange={this.handleChange}
                        required
                    >
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Extra Large">Extra Large</option>
                    </select>
                    <label>Inventory</label>
                    <input
                            type="number"
                            min="0"
                            name="inventory"
                            value={this.state.formData.inventory}
                            onChange={this.handleChange}
                            required
                        />
                    <button type="submit" disabled={this.state.invalidForm}>Add Variant</button>

                </form>
            </div>
        )
    }
}

export default AddVariantForm;