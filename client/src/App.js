import React , {Component} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './Components/AppNavbar';
import ShoppingList from './Components/ShoppingList';
import {Provider} from 'react-redux';
import store from './Store';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
        <AppNavbar/>
        <ShoppingList/>
      </div>
      </Provider>
    );
  }
}

export default App;
