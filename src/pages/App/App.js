import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

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
import CollectionsPage from '../CollectionsPage/CollectionsPage'
import ShopPage from '../ShopPage/ShopPage'
import ShopDetailsPage from '../ShopDetailsPage/ShopDetailsPage'
import OrderConfirmedPage from '../OrderConfirmedPage/OrderConfirmedPage'
import InventoryPage from '../InventoryPage/InventoryPage'




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
        const variants = await variantsAPI.getAll();
        const products = await productsAPI.getAll();
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
        this.setState(
            { products: newProductArray },
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

    handlePurchase = async (variantId) => {
        const updatedVariant = await variantsAPI.incrementInventory(variantId)
        const newVariantArray = this.state.variants.map(variant =>
            variant._id === updatedVariant._id ? updatedVariant : variant   
        )
        this.setState(
            { variants: newVariantArray },
            () => this.props.history.push('/order-confirmed')
        )
    }

    handleUpdateInventory = async (variant) => {
        const updatedVariant = await variantsAPI.updateInventory(variant);
        const newVariantArray = this.state.variants.map(variant =>
            variant._id === updatedVariant._id ? updatedVariant : variant   
        )
        this.setState(
            { variants: newVariantArray },
            () => this.props.history.push('/inventory')
        )
    }


    // ----- Authentication Functions ----- //

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
        this.componentDidMount()
    }

    handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() });
        this.componentDidMount()
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
                    <Route exact path='/collections' render={() =>
                        <CollectionsPage
                        />
                    } />
                    <Route exact path='/collections/womens-tri-tops' render={() =>
                        <ShopPage
                            products={this.state.products.filter(product => product.category === "Women's Tops")}
                        />
                    } />
                    <Route exact path='/collections/womens-tri-shorts' render={() =>
                        <ShopPage
                            products={this.state.products.filter(product => product.category === "Women's Shorts")}
                        />
                    } />
                    <Route exact path='/collections/mens-tri-tops' render={() =>
                        <ShopPage
                            products={this.state.products.filter(product => product.category === "Men's Tops")}
                        />
                    } />
                    <Route exact path='/collections/mens-tri-shorts' render={() =>
                        <ShopPage
                            products={this.state.products.filter(product => product.category === "Men's Shorts")}
                        />
                    } />
                    <Route exact path='/details' render={({location}) =>
                        <ShopDetailsPage
                            location={location}
                            variants={this.state.variants}
                            handlePurchase={this.handlePurchase}
                        />
                    } />
                    <Route exact path='/order-confirmed' render={({location}) =>
                        <OrderConfirmedPage
                            location={location}
                        />
                    } />

                    <Route exact path='/inventory' render={() =>
                        userService.getUser() ?
                        <InventoryPage
                            products={this.state.products}
                            variants={this.state.variants}
                            handleUpdateInventory={this.handleUpdateInventory}
                        />
                        :
                        <Redirect to='/login' />
                    } />

                    <Route exact path='/manageproducts' render={() =>
                        userService.getUser() ?
                        <ManageProductsPage
                            products={this.state.products}
                            variants={this.state.variants}
                            handleDeleteProduct={this.handleDeleteProduct}
                        />
                        :
                        <Redirect to='/login' />
                    } />
                    <Route exact path='/addproduct' render={({ history }) =>
                        userService.getUser() ?
                        <AddProductPage
                            history={history}
                            handleAddProduct={this.handleAddProduct}
                        />
                        :
                        <Redirect to='/login' />
                    } />
                    <Route exact path='/addvariants' render={({ location }) =>
                        userService.getUser() ?
                        <AddVariantPage
                            variants={this.state.variants}
                            product={this.state.newProduct}
                            variants={this.state.variants}
                            location={location}
                            handleAddVariant={this.handleAddVariant}
                        />
                        :
                        <Redirect to='/login' />
                    } />
                    <Route exact path='/editproduct' render={({ location }) =>
                        userService.getUser() ?
                        <EditProductPage
                            handleUpdateProduct={this.handleUpdateProduct}
                            location={location}
                        />
                        :
                        <Redirect to='/login' />
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
