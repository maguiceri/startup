import React from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import './App.css';
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  handleData(inputValue) {
      this.setState({
      inputValue: inputValue
    });
  }

  render() {
    const {inputValue} = this.state;

    return(
      <div>
        <Navbar getData={(inputValue) => this.handleData(inputValue)} />
        <Cards  filter={inputValue}/>
        <Footer />
        <Link to="/agregar">ir a agregar</Link>
      </div>
    )
  }
}

export default App;
