import React from 'react';
import InventoryTable from '../../components/InventoryTable/InventoryTable'

function InventoryPage(props) {
    return (
        <div>
            <InventoryTable
                products={props.products}
                variants={props.variants}
            />
        </div>
    )
}

export default InventoryPage;