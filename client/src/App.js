import React , {Component} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './Components/AppNavbar';
import ShoppingList from './Components/ShoppingList';
import {Provider} from 'react-redux';
import Store from './Store';
import ItemModal from './Components/ItemModal';
import {Container} from 'reactstrap'
import {loadUser} from './Actions/AuthActions'

class App extends Component {
  componentDidMount() {
    Store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store = {Store}>
      <div className="App">
        <AppNavbar/>
        <Container>
           <ItemModal/>
           <ShoppingList/>
        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
