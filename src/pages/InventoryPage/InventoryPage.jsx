import React from 'react';
import InventoryTable from '../../components/InventoryTable/InventoryTable'
import './InventoryPage.css'

function InventoryPage(props) {
    return (
        <div className="IP-div">
            <InventoryTable
                products={props.products}
                variants={props.variants}
                handleUpdateInventory={props.handleUpdateInventory}
            />
        </div>
    )
}

export default InventoryPage;