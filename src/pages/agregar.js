import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


class Agregar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            logo: "",
            email:"",
            desc: "",
            web:"",
            tw:"",
            ig: ""
        }
    }

    handleChange(e) {
        const {name, value} = e.target;

        this.setState({
            [name]: value //actualiza una variable
        })
    }

    handleClick() {
        const {name, logo, email, desc} = this.state;
        
        if(name && logo && email && desc) {  //existencia
            console.log('TODO ESTA BIEN');
        } else {
            console.log('TODO ESTA MAL');
        }
    }

    render() {

        return(

            <>

            <Navbar />

            <div>
                <input type="text" name="name" placeholder="Nombre" onChange={(e) => this.handleChange(e)} />
                <input type="text" name="logo" placeholder="Logo" onChange={(e) => this.handleChange(e)}/>
                <input type="text" name="email" placeholder="email" onChange={(e) => this.handleChange(e)}/>
                <input type="text" name="desc" placeholder="description" onChange={(e) => this.handleChange(e)}/>
                <input type="text" name="tw" placeholder="Twitter (opcional)" onChange={(e) => this.handleChange(e)}/>
                <input type="text" name="ig" placeholder="Instagram (opcional)" onChange={(e) => this.handleChange(e)}/>
                <button className="boton-agregar" onClick={() => this.handleClick()}>enviar</button>
                
   
            </div>
            
            </>
        )
    }
}

export default Agregar;