import axios from "axios";
import { useDebugValue, useEffect, useRef, useState } from "react";
import { Global } from "../Global";
import EmpleadosComponent from "./EmpleadosComponent";
import EmpleadosComponentClass from "./EmpleadosComponentClass";

function DepartamentosComponent() {

    let counter = 0;

    const [departamentos, setDepartamentos] = useState([]);
    const [empleadosHTML, setEmpleadosHTML] = useState([]);

    const selectRef = useRef();
    
    const sendFormInfo = (e) => {
        e.preventDefault();
        setEmpleadosHTML([<EmpleadosComponent key={counter++} idDepartamento={selectRef.current.value} />, <EmpleadosComponentClass key={counter++} idDepartamento={selectRef.current.value} />]);
    }

    const getDepatamentos = () => {
        axios.get(Global.urlAPIDepartamentos + "/departamentos").then((response) => {
            setDepartamentos(response.data);
        });
    }

    useEffect(() => {
        getDepatamentos();
    }, []);    
    
    return(
        <>
            <h1>Departamentos:</h1>
            <form onSubmit={sendFormInfo}>
                <select ref={selectRef}>
                    {
                        departamentos.map((departamento, i) => {
                            return(<option key={i} value={departamento.numero} >Departamento #{departamento.numero} {departamento.nombre}</option>)
                        })
                    }
                </select>
                <button type="submit">Enviar</button>
            </form>
            {empleadosHTML}
        </>
    );
}

export default DepartamentosComponent;