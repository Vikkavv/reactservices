import axios from 'axios'
import { Component } from 'react'
import { Global } from '../Global'

export default class Coches extends Component {

    state = {
        coche: null
    }

    getCoche = () => {
        axios(Global.urlAPICoches + "/Coches/FindCoche/" + this.props.id).then((response) => {
            this.setState({
                coche: response.data
            })
        });
    }

    componentDidMount() {
        this.getCoche();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.id !== this.props.id){
            this.getCoche();
        }
    }

  render() {
    return (
      <div>
        <h1>coches</h1>
        {
            this.state.coche &&
            <>
                <p>ID: {this.state.coche.idCoche}</p>
                <p>Marca: {this.state.coche.marca}</p>
                <p>Modelo: {this.state.coche.modelo}</p>
                <p>Conductor: {this.state.coche.conductor}</p>
                <img src={this.state.coche.imagen} alt="" style={{width: "200px"}} />
            </>
        }
      </div>
    )
  }
}
