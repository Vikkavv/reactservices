import { NavLink } from "react-router-dom";

function Menu() {
    return(
        <nav>

            <NavLink to="/">Service Api Customers</NavLink>
            <NavLink to='/Suppliers'>Suppliers</NavLink>
            <NavLink to='/Empleados'>Empleados</NavLink>
            <NavLink to='/EmpleadosOficios'>Empleados oficios</NavLink>
            <NavLink to="/EmpleadosDepartamentos">Empleados Departamentos</NavLink>
            <NavLink to="/Concesionario">Concesionario</NavLink>
            <NavLink to="/Home">Home {'(Tablas multiplicar)'}</NavLink>


            
            <NavLink to="/ConjeturaCollatz/2">Conjetura Collatz 2</NavLink>
            <NavLink to="/ConjeturaCollatz/22">Conjetura Collatz 22</NavLink>
            <NavLink to="/ConjeturaCollatz/2123">Conjetura Collatz 2123</NavLink>
            <NavLink to="/ConjeturaCollatz/21234">Conjetura Collatz 2134</NavLink>
            <NavLink to="/ConjeturaCollatz/2452">Conjetura Collatz 2452</NavLink>
            <NavLink to="/ConjeturaCollatz/55">Conjetura Collatz 55</NavLink>
        </nav>
    );
}

export default Menu;