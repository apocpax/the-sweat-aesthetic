import React from 'react';
import InventoryForm from '../InventoryForm/InventoryForm'

function InventoryTable(props) {

    
    return (
        <div>
            <table className="table is-bordered is-fullwidth">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Variant</th>
                        <th>Inventory</th>
                    </tr>
                </thead>
                <tbody>
                    {props.variants.map(variant => (
                        <tr key={variant._id}>
                            <td>{props.products.find(product => product._id === variant.product).name}</td>
                            <td>{variant.size}</td>
                            <td><InventoryForm variant={variant} handleUpdateInventory={props.handleUpdateInventory}/></td>
                        </tr>
                    ))}
                    <tr>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InventoryTable;