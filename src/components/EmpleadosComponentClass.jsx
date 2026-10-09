import axios from 'axios'
import React, { Component } from 'react'
import { Global } from '../Global'

export default class EmpleadosComponentClass extends Component {

    counter = 0;

    state = {
        empleados: []
    }

    loadEmpleados = () => {
        axios(Global.urlAPIEmpleados + "/Empleados/EmpleadosDepartamento/" + this.props.idDepartamento).then((response) => {
            this.setState({
                empleados: response.data
            });
        });
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idDepartamento != this.props.idDepartamento){
            this.loadEmpleados();
        }
    }

    componentDidMount() {
        this.loadEmpleados();
    }

  render() {
    return (
      <div>
        <h1>EmpleadosComponentClass</h1>
            { this.state.empleados.length > 1 &&
                <table>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.empleados.map((empleado) => {
                            return(
                                <tr key={this.counter++}>
                                    <td>{empleado.apellido}</td>
                                    <td>{empleado.oficio}</td>
                                    <td>{empleado.salario}€/año</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            }
      </div>
    )
  }
}
