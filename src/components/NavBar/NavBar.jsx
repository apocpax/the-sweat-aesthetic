import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    let navstart = props.user ?
        <div className="navbar-start">
            <NavLink exact to="/manageproducts" className="navbar-item is-size-4">MANAGE PRODUCTS</NavLink>
            <NavLink exact to="/inventory" className="navbar-item is-size-4">MANAGE INVENTORY</NavLink>
        </div>
        :
        <div className="navbar-start">
            <NavLink exact to="/collections" className="navbar-item is-size-4">COLLECTIONS</NavLink>
        </div>;

    let navend = props.user ?
        <div className="buttons is-centered">
            <NavLink to='/' onClick={props.handleLogout} className="navbar-item button is-primary is-medium">LOG OUT</NavLink>
        </div>
        :
        <div className="buttons is-centered">
            <NavLink to='/login' className="navbar-item button is-light is-medium">LOG IN</NavLink>
            <NavLink to='/signup' className="navbar-item button is-primary is-medium">SIGN UP</NavLink>
        </div>;

    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink to="/">
                    <img className="pt-1" src="https://i.imgur.com/Y4NvYmA.jpg" width="112" height="28" alt="The Sweat Aesthetic Logo"/>
                </NavLink>

                <NavLink to="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </NavLink>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                    {navstart}
                <div className="navbar-end">
                    <div className="navbar-item">
                        {navend}
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default NavBar