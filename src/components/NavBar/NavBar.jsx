import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = (props) => {
    let navstart = props.user ?
        <div className="navbar-start">
            <NavLink exact to="/manageproducts" className="navbar-item">MANAGE PRODUCTS</NavLink>
            <NavLink exact to="/inventory" className="navbar-item">MANAGE INVENTORY</NavLink>
            <NavLink to='' onClick={props.handleLogout} className="navbar-item">LOG OUT</NavLink>
        </div>
        :
        <div className="navbar-start">
            <NavLink exact to="/collections">COLLECTIONS</NavLink>
            <NavLink to='/login' className="navbar-item">LOG IN</NavLink>
            <NavLink to='/signup' className="navbar-item">SIGN UP</NavLink>
        </div>;

    let navend = props.user ?
        <div className="navbar-start">
            <NavLink exact to="/manageproducts" className="navbar-item">MANAGE PRODUCTS</NavLink>
            <NavLink exact to="/inventory" className="navbar-item">MANAGE INVENTORY</NavLink>
            <NavLink to='' onClick={props.handleLogout} className="navbar-item">LOG OUT</NavLink>
        </div>
        :
        <div className="navbar-start">
            <NavLink exact to="/collections">COLLECTIONS</NavLink>
            <NavLink to='/login' className="navbar-item">LOG IN</NavLink>
            <NavLink to='/signup' className="navbar-item">SIGN UP</NavLink>
        </div>;

    return (
        <nav className="navbar App-nav" role="navigation" aria-label="main navigation">
            <div className="navbar-brand Nav-brand">
                <NavLink to="/">
                    <img className="pt-1" src="https://i.imgur.com/WnHARxG.jpg" width="112" height="10" />
                </NavLink>

                <NavLink to="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </NavLink>
            </div>

            <div className="navbar-menu">
            
                    {/* <NavLink to="/" className="navbar-item">
                        Home
                    </NavLink> */}
                    {navigation}

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <NavLink to="/" className="button is-primary">
                                <strong>Sign up</strong>
                            </NavLink>
                            <NavLink to="/" className="button is-light">
                                Log in
                                    </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default NavBar