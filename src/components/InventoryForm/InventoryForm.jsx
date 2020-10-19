import React, { Component } from 'react';


class InventoryForm extends Component {

    state = {
        invalidForm: true,
        formData: {
            _id: this.props.variant._id,
            inventory: this.props.variant.inventory
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
        this.props.handleUpdateInventory(this.state.formData);

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} autoComplete="off" ref={this.formRef}>
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                min="0"
                                name="inventory"
                                value={this.state.formData.inventory}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="control">
                            <button className="button" type="submit" disabled={this.state.invalidForm}>Update</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default InventoryForm;