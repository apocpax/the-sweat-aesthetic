import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import * as productsAPI from '../../services/products-api'
import * as variantsAPI from '../../services/variants-api'

import userService from '../../utils/userService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import AddProductPage from '../AddProductPage/AddProductPage'
import ManageProductsPage from '../ManageProductsPage/ManageProductsPage'
import EditProductPage from '../EditProductPage/EditProductPage'
import AddVariantPage from '../AddVariantPage/AddVariantPage'




class App extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            variants: [],
            newProduct: {},
            user: userService.getUser()
        };
    }

    async componentDidMount() {
        const products = await productsAPI.getAll();
        const variants = await variantsAPI.getAll();
        this.setState({ 
            products: products,
            variants: variants,
            newProduct: products[products.length - 1]
        })
    }

    // ----- CRUD Functions ----- //

    handleAddProduct = async (newProductData) => {
        const newProduct = await productsAPI.create(newProductData);
        this.setState(state => ({
            products: [...state.products, newProduct],
            newProduct: newProduct
        }),
            () => this.props.history.push(`/addvariants/`)
        )
    }

    handleDeleteProduct = async (productId) => {
        await productsAPI.deleteOne(productId);
        await variantsAPI.deleteMany(productId);
        this.setState(state => ({
            products: state.products.filter(product => product._id !== productId)
        }),
            () => this.props.history.push('/manageproducts')
        )
    }

    handleUpdateProduct = async (product) => {
        const updatedProduct = await productsAPI.update(product);
        const newProductArray = this.state.products.map(p =>
            p._id === updatedProduct._id ? updatedProduct : p
        )
        console.log(newProductArray)
        this.setState(
            {products: newProductArray},
            () => this.props.history.push('/manageproducts')
        )
    }

    handleAddVariant = async (newVariantData) => {
        const newVariant = await variantsAPI.create(newVariantData);
        this.setState(state => ({
            variants: [...state.variants, newVariant]
        }),
            () => this.props.history.push('/addvariants')
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
                    <Route exact path='/manageproducts' render={() =>
                        <ManageProductsPage 
                            products={this.state.products}
                            variants={this.state.variants}
                            handleDeleteProduct={this.handleDeleteProduct}
                        /> 
                    } />
                    <Route exact path='/addproduct' render={({ history }) =>
                        <AddProductPage 
                            handleAddProduct={this.handleAddProduct}
                            history={history}
                        />
                    } />
                    <Route exact path='/addvariants' render={({location}) =>
                        <AddVariantPage
                            // need to add variant function still
                            handleAddVariant={this.handleAddVariant}
                            product={this.state.newProduct}
                            variants={this.state.variants}
                            location={ location }
                        />
                    } />
                    <Route exact path='/editproduct' render={({location}) =>
                        <EditProductPage 
                            handleUpdateProduct={this.handleUpdateProduct}
                            location={ location }
                        />
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
