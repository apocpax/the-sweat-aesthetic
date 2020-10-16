import React from 'react';

function InventoryTable(props) {
    return (
        <div>
            <h1>this is InventoryPage</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Variant</th>
                        <th>Inventory</th>
                    </tr>
                </thead>
                <tbody>
                    {props.variants.map(variant => (
                        <tr>
                            <td>{props.products.find(product => product._id === variant.product).name}</td>
                            <td>{variant.size}</td>
                            <td>{variant.inventory}</td>
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