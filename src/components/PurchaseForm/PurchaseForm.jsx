import React, { Component } from 'react';
import './PurchaseForm.css'

class PurchaseForm extends Component {
    state = {
        invalidForm: true,
        formData: {
            sizeId: '',
        }
    }

    formRef = React.createRef();

    handleChange = (e) => {
        const formData = {
            ...this.state.formData,
            [e.target.name]: e.target.value,
        }
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handlePurchase(this.state.formData);

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} autoComplete="off" ref={this.formRef}>
                    <div className="control mt-6">
                        <select
                            className="select PF-select is-large"
                            name="sizeId"
                            value={this.state.formData.sizeId}
                            onChange={this.handleChange}
                            required
                        >
                            <option>Select Size</option>
                            {this.props.variants.map(variant => (
                                <option value={variant._id} key={variant._id}>{variant.size} {variant.inventory} in stock.</option>
                            ))}


                        </select>
                    </div>
                    <div>
                        <button className="button is-large is-black has-text-weight-bold mt-5" type="submit" disabled={this.state.invalidForm}>Purchase</button>
                    </div>
                </form>
            </div>

        )
    }

}


export default PurchaseForm;