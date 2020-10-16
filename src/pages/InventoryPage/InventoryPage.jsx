import React from 'react';
import InventoryTable from '../../components/InventoryTable/InventoryTable'

function InventoryPage(props) {
    return (
        <div>
            <InventoryTable
                products={props.products}
                variants={props.variants}
                handleUpdateInventory={props.handleUpdateInventory}
            />
        </div>
    )
}

export default InventoryPage;