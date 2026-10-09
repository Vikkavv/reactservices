import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Global } from "../Global";

function EmpleadosDepartamentos() {
    
    const buscarEmpleados = (e) => {
        e.preventDefault();
        axios(Global.urlAPIEmpleados + "/Empleados/empleadosDepartamento/" + empleadoRef.current.value).then((response) => {
            setEmpleados(response.data);
        });
    }
    
    const getDepatamentos = () => {
        axios(Global.urlAPIDepartamentos + "/departamentos").then((response) => {
            setDepartamentos(response.data);
        });
    }

    const [empleados, setEmpleados] = useState([]);
    const [departamentos, setDepartamentos] = useState([]);

    const empleadoRef = useRef();

    useEffect(() => {
        getDepatamentos();
    }, []);
    
    return(
        <>
            <h1>Api Empleados Departamentos</h1>
            <form onSubmit={buscarEmpleados}>
                {/* <input type="search" name="empleado" id="empleado" ref={empleadoRef} placeholder="Numero de departamento:" />*/}
                <select name="departamento" id="departamento" ref={empleadoRef}>
                    {
                        departamentos.map((departamento, i) => {
                            return(<option value={departamento.numero} >Departamento #{departamento.numero} {departamento.nombre}</option>)
                        })
                    }
                </select>
                <button type="submit" >Enviar</button>
            </form>

            {
                empleados.map((empleado, i) => {
                    return(<p key={i}>Apellido: {empleado.apellido}</p>)
                })
            }
        </>
    );
}

export default EmpleadosDepartamentos;