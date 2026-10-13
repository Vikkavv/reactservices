import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {

    state= {
        tabla: []
    }

    generarTablaMultiplicar = () => {
        let tablaLocal = [];
        let numero = this.props.param;
        for (let i = 1; i < 10; i++) {
            let resultado = numero * i;
            tablaLocal.push(resultado);            
        }
        this.setState({
            tabla: tablaLocal
        })
    }

    componentDidMount() {
        this.generarTablaMultiplicar();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.param !== this.props.param){
            this.generarTablaMultiplicar();
        }
    }

  render() {
    return (
      <div>
            <h1>TablaMultiplicar</h1>
            {
                this.state.tabla.map((resultado, i) => {
                    return(<p key={i} >{resultado}</p>)
                })
            }
      </div>
    )
  }
}
