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
            ig: "",
            esta0k:"",
            showMessage: false
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
        const isValid = name && email && logo && desc ? true : false; //replico el if pero en un ternario donde me guardo en la variable isValid dependiendo el rdo.
        
        this.setState({
            estaOk: isValid,
            showMessage: true //porque esto siempre es true, reemplace en 5 lines, 11
        })
      
        //  if(name && logo && email && desc) {  //existencia
      //      this.setState({
      //         estaOk: true,
    //         showMessage: true
      //      });

      //  } else {
      //      this.setState({
       //         estaOk: false,
        //        showMessage: true
        //    });

     //   }
    }

    render() {
        const {estaOk, showMessage} = this.state
        return(
            <>
            <Navbar />
            <div>

                {showMessage && (
                <p>{estaOk ? ("Todo salio bien") : "todo salio mal"}</p>
                )}

                <input type="text" name="name" placeholder="Nombre" onChange={(e) => this.handleChange(e)} />
                <input type="text" name="logo" placeholder="Logo" onChange={(e) => this.handleChange(e)}/>
                <input type="text" name="email" placeholder="email" onChange={(e) => this.handleChange(e)}/>
                <input type="text" name="desc" placeholder="description" onChange={(e) => this.handleChange(e)}/>
                <input type="text" name="web" placeholder="Web (opcional)" onChange={(e) => this.handleChange(e)}/>
                <input type="text" name="tw" placeholder="Twitter (opcional)" onChange={(e) => this.handleChange(e)}/>
                <input type="text" name="ig" placeholder="Instagram (opcional)" onChange={(e) => this.handleChange(e)}/>
                <button className="boton-agregar" onClick={() => this.handleClick()}>enviar</button>
            </div> 
            </>
        )
    }
}

export default Agregar;