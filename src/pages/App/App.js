import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import * as productsAPI from '../../services/products-api'

import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import AddProductPage from '../AddProductPage/AddProductPage'
import AllProductsPage from '../AllProductsPage/AllProductsPage'




class App extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            user: userService.getUser()
        };
    }

    async componentDidMount() {
        const products = await productsAPI.getAll();
        this.setState({ products: products })
    }

    // ----- CRUD Functions ----- //

    handleAddProduct = async newProductData => {
        const newProduct = await productsAPI.create(newProductData);
        this.setState(state => ({
            products: [...state.products, newProduct]
        }),
            () => this.props.history.push('/allproducts')
        )
    }

    handleDeleteProduct = async id => {
        await productsAPI.deleteOne(id);
        this.setState(state => ({
            products: state.products.filter(product => product._id !== id)
        }),
            () => this.props.history.push('/allproducts')
        )
    }


    // ----- Authentication Functions ----- //

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    }

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
    }

    render() {
        return (

            <div className="App">
                <header className="App-header">
                    The Sweat Aesthetic
                    <nav>
                        <NavBar
                            user={this.state.user}
                            handleLogout={this.handleLogout}
                        />
                    </nav>
                </header>

                <Switch>
                    <Route exact path='/allproducts' render={() =>
                        <AllProductsPage 
                            products={this.state.products}
                            handleDeleteProduct={this.handleDeleteProduct}
                        /> 
                    } />
                    <Route exact path='/addproduct' render={() =>
                        <AddProductPage handleAddProduct={this.handleAddProduct}/>
                    } />
                    <Route exact path='/signup' render={({ history }) =>
                        <SignupPage
                            history={history}
                            handleSignupOrLogin={this.handleSignupOrLogin}
                        />
                    } />
                    <Route exact path='/login' render={({ history }) =>
                        <LoginPage
                            handleSignupOrLogin={this.handleSignupOrLogin}
                            history={history}
                        />
                    } />
                </Switch>
            </div>
        )
    }
}

export default App;
