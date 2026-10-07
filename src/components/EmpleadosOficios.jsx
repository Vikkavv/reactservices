import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Global } from "../Global";

function EmpeladosOficios() {

    let counter = 0;

    const [oficios, setOficios] = useState([]);
    const [empleados, setEmpleados] = useState([]);

    const selectRef = useRef();

    const getOficios = () => {
        axios.get(Global.urlAPIEmpleados + "/Empleados").then((response) => {
            let empleados = response.data;
            let oficios = [];
            for (const empleado of empleados) {
                if(!(oficios.includes(empleado.oficio))) oficios.push(empleado.oficio);
            }
            setOficios(oficios);
        });
    }

    const searchEmployees = (e) => {
        e.preventDefault();
        let oficio = selectRef.current.value;
        axios.get(Global.urlAPIEmpleados + "/Empleados/EmpleadosOficio/" + oficio).then((response) => {
            setEmpleados(response.data);
        });
    }

    useEffect(() => {
        getOficios();
    })

    return(
        <>
            <h1>Empleados Oficio</h1>
            <form onSubmit={searchEmployees}>
                <select name="oficios" id="oficios" ref={selectRef}>
                    {
                        oficios.map((oficio) => {
                            return(<option key={counter++} value={oficio}>{oficio}</option>)
                        })
                    }
                </select>
                <br />
                <button type="submit">Enviar</button>
            </form>
            <br />
            { empleados.length > 1 &&
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
                        empleados.map((empleado) => {
                            return(
                                <tr key={counter++}>
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
        </>
    );
}

export default EmpeladosOficios;