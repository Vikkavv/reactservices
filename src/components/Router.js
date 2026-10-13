import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import ComponentServiceCustomers from './ComponentServiceCustomers';
import ComponentServiceSuppliers from './ComponentServiceSuppliers';
import EmpleadosDepartamentos from './EmpleadosDepartamentos';
import EmpeladosOficios from './EmpleadosOficios';
import DepartamentosComponent from './DepartamentosComponent';
import Concesionario from './Concesionario';
import TablaMultiplicar from './TablaMultiplicar';
import Home from './Home';
import NotFound from './NotFound';
import ConjeturaCollatz from './ConjeturaCollatz';
import Menu from './Menu';

export default class Router extends Component {

  render() {

    function RutaParametro(props){
        let { param } = useParams();
        let element = props.element;
        element = React.cloneElement(props.element, {
            param: param
        })
        console.log(element);
        return(element);
    }

    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path='/' element={<ComponentServiceCustomers/>} />
                <Route path='/Suppliers' element={<ComponentServiceSuppliers/>} />
                <Route path='/Empleados' element={<EmpleadosDepartamentos/>} />
                <Route path='/EmpleadosOficios' element={<EmpeladosOficios/>} />
                <Route path='/EmpleadosDepartamentos' element={<DepartamentosComponent/>} />
                <Route path='/Concesionario' element={<Concesionario/>} />
                <Route path='/Home' element={<Home/>} />
                <Route path='/tabla/:param' element={<RutaParametro element={<TablaMultiplicar/>}  />} />
                <Route path='/ConjeturaCollatz/:param' element={<RutaParametro element={<ConjeturaCollatz/>} />} />
                

                <Route path='*' element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
  }
}
