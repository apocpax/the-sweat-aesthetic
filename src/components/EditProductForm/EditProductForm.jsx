import React, { Component } from 'react'

class EditProductForm extends Component {

    state = {
        formData: this.props.location.state.product
    }

    handleChange = (e) => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData: formData
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleUpdateProduct(this.state.formData);

    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Product Name</label>
                        <input 
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <input 
                            name="description"
                            value={this.state.formData.description}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Size</label>
                        <input 
                            name="size"
                            value={this.state.formData.size}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Category</label>
                        <input 
                            name="category"
                            value={this.state.formData.category}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Price</label>
                        <input 
                            name="price"
                            value={this.state.formData.price}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Inventory</label>
                        <input 
                            name="inventory"
                            value={this.state.formData.inventory}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Photo Link</label>
                        <input 
                            name="photo"
                            value={this.state.formData.photo}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit">Confirm Changes</button>
                    </div>
                </form>
            </>
        )
    }
    
}


export default EditProductForm