import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

class App extends Component {
    render() {
        return (

            <div className="App">
                <header className="App-header">
                    The Sweat Aesthetic
                    <nav>
                        <NavBar />
                    </nav>
                </header>

                <Switch>
                    <Route exact path='/' render={() =>
                        <h1>Home Page</h1>
                    } />
                    <Route exact path='/products' render={() =>
                        <h1>products Page</h1>
                    } />
                </Switch>
            </div>
        )
    }
}

export default App;
