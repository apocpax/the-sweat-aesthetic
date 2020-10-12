import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/products">Products</NavLink>
        </div>
    )
}

export default NavBar