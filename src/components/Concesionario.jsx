import axios from 'axios'
import React, { Component } from 'react'
import { Global } from '../Global'
import Coches from './Coches';

export default class Concesionario extends Component {

    selectRef = React.createRef();
    counter = 0;

    state = {
        coches: [],
        cocheElegido: <></>
    }

    getCoches = () => {
        axios.get(Global.urlAPICoches + "/Coches").then((response) => {
            this.setState({
                coches: response.data
            })
        });
    }

    sendFormInfo = (e) => {
        e.preventDefault();
        this.setState({
            cocheElegido: <Coches key={this.counter++} id={this.selectRef.current.value} />
        });
    }

    componentDidMount = () => {
        this.getCoches();
    }

    render() {
        return (
        <div>
            <h1>Concesionario</h1>
            <form onSubmit={this.sendFormInfo}>
                <select ref={this.selectRef} name="coches" id="coches">
                    {
                        this.state.coches.map((coche, i) => {
                            return(<option key={i} value={coche.idCoche} >Coche #{coche.idCoche} {coche.marca}, {coche.modelo}</option>);
                        })
                    }
                </select>
                <button type='submit'>Enviar</button>
            </form>
            {this.state.cocheElegido}
        </div>
        )
    }
}
