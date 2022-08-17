import React , {Component} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './Components/AppNavbar';
import ShoppingList from './Components/ShoppingList';


import ItemModal from './Components/ItemModal';
import {Container} from 'reactstrap'

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <AppNavbar/>
        <Container>
           <ItemModal/>
           <ShoppingList/>
        </Container>
      </div>
      
    );
  }
}

export default App;
