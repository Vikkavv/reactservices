import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponentServiceCustomers from './components/ComponentServiceCustomers';
import ComponentServiceSuppliers from './components/ComponentServiceSuppliers';
import EmpleadosDepartamentos from './components/EmpleadosDepartamentos';
import EmpeladosOficios from './components/EmpleadosOficios';
import Menu from './components/Menu';
import EmpleadosComponent from './components/EmpleadosComponent';
import DepartamentosComponent from './components/DepartamentosComponent';
import Concesionario from './components/Concesionario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Menu/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ComponentServiceCustomers/>} />
        <Route path='/Suppliers' element={<ComponentServiceSuppliers/>} />
        <Route path='/Empleados' element={<EmpleadosDepartamentos/>} />
        <Route path='/EmpleadosOficios' element={<EmpeladosOficios/>} />
        <Route path='/EmpleadosDepartamentos' element={<DepartamentosComponent/>} />
        <Route path='/Concesionario' element={<Concesionario/>} />
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
