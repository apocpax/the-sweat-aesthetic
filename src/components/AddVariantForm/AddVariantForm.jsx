import React, { Component } from 'react';
import './AddVariantForm.css'

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
            <>
                <h1 className="AVF-subtitle">Add Variant</h1>
                <div className="AVF-div">
                    <form className="columns" onSubmit={this.handleSubmit} autoComplete="off" ref={this.formRef}>

                        <div className="column is-one-third">
                            <label className="label">Size</label>
                            <div className="control">
                                <div className="select is-small is-fullwidth">
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

                                </div>
                            </div>
                        </div>



                        <div className="column is-one-third">
                            <label className="label">Inventory</label>
                            <div className="control">
                                <input
                                    className="input is-small"
                                    type="number"
                                    min="0"
                                    name="inventory"
                                    value={this.state.formData.inventory}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                        </div>


                        <div className="column is-one-third">
                            <label className="label">Add Variant</label>
                            <button className="button is-success is-small is-fullwidth" type="submit" disabled={this.state.invalidForm}>Submit</button>
                        </div>

                    </form>
                </div >
            </>
        )
    }
}

export default AddVariantForm;