import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Navbar extends React.Component {

    handleChange(e) {
        const inputValue = e.target.value;
        const { getData } = this.props;
        if (getData) {
            getData(inputValue);
        }
    }

    render(){
        return(
            <nav >
                <div className="autocompleteContainer">
                    <h1>Startup argentina </h1>
                    <input 
                    onChange={(e) => this.handleChange(e)}
                    type=""
                    placeholder="buscar startup" 
                    />
                </div>
                <Link to="/agregar" className="boton-agregar">Agregar Startup</Link>
            </nav>
        );
    }
}

export default Navbar;