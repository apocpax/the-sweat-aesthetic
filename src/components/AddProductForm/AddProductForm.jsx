import React, { Component } from 'react';
import './AddProductForm.css'


class AddProductForm extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            description: '',
            category: "Men's Shorts",
            price: 0,
            photo: ''
        }
    }

    formRef = React.createRef();

    handleChange = (e) => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value }
        console.log(formData)
        this.setState({
            formData: formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddProduct(this.state.formData);

    }

    render() {
        return (
            <>
                <h1 className="APF-title">Add Product</h1>
                <form className="container is-fluid" onSubmit={this.handleSubmit} autoComplete="off" ref={this.formRef}>
                    <div className="field is-horizontal">
                        <div className="field-label is-large">
                            <label className="label">Product Name</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-large"
                                        name="name"
                                        value={this.state.formData.name}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-large">
                            <label className="label">Description</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <textarea
                                        className="textarea"
                                        name="description"
                                        value={this.state.formData.description}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-large">
                            <label className="label">Category</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <select
                                        className="select is-fullwidth is-large"
                                        name="category"
                                        value={this.state.formData.category}
                                        onChange={this.handleChange}
                                        required
                                    >
                                        <option value="Men's Shorts">Men's Shorts</option>
                                        <option value="Men's Tops">Men's Tops</option>
                                        <option value="Women's Shorts">Women's Shorts</option>
                                        <option value="Women's Tops">Women's Tops</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-large">
                            <label className="label">Price</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-large"
                                        type="number"
                                        min="0"
                                        name="price"
                                        value={this.state.formData.price}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="field is-horizontal">
                        <div className="field-label is-large">
                            <label className="label">Photo Link</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input
                                        className="input is-large"
                                        name="photo"
                                        value={this.state.formData.photo}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="button is-success is-large mt-6" type="submit" disabled={this.state.invalidForm}>Next (Add Variants)</button>
                    </div>
                </form>
            </>
        )
    }
}

export default AddProductForm;