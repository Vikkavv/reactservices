import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
            <h1>Home</h1>
            <NavLink to="/Tabla/2">Tabla del 2</NavLink><br />
            <NavLink to="/Tabla/3">Tabla del 3</NavLink><br />
            <NavLink to="/Tabla/4">Tabla del 4</NavLink><br />
            <NavLink to="/Tabla/5">Tabla del 5</NavLink><br />
            <NavLink to="/Tabla/6">Tabla del 6</NavLink><br />
            <NavLink to="/Tabla/7">Tabla del 7</NavLink><br />
      </div>
    )
  }
}
