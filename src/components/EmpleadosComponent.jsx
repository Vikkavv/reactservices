import axios from "axios";
import { useEffect, useState } from "react";
import { Global } from "../Global";

function EmpleadosComponent(props) {

    let counter = 0;
    let oldDepartamento;

    const [empleados, setEmpleados] = useState([]);

    const getEmpleados = () => {
        axios.get(Global.urlAPIEmpleados + "/Empleados/EmpleadosDepartamento/" + props.idDepartamento).then((response) => {
            setEmpleados(response.data)
        });
    }

    useEffect(() => {
        getEmpleados();
        oldDepartamento = props.idDepartamento;
    }, [])

    useEffect(() => {
        if(oldDepartamento != props.idDepartamento){
            getEmpleados();
            oldDepartamento = props.idDepartamento;
        }
    }, [props.idDepartamento]);

    return(
        <>
            <h1>Empleados Component Function</h1>
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

export default EmpleadosComponent;