import axios from "axios";
import { useEffect, useState } from "react";
import { Global } from "../Global";

function ComponentServiceCustomers() {
    
    let counter = 0;
    const [customers, setCustomers] = useState([]);

    const loadCustomers = () => {
        axios.get(Global.urlAPI + "/Customers").then((response) => {
            setCustomers(response.data.value);
        });
    }

    useEffect(() => {
        loadCustomers();
    });
    
    return(
        <div>
            <h1>Service Api Customers</h1>
            <button onClick={loadCustomers} >Load Customers</button>
            <div>
                {
                    customers.map((customer, i) => {
                        let html = [];
                        for (const key in customer) {
                            html.push(<h1 key={counter++}>{key}: {customer[key]}</h1>);                            
                        }
                        html.push(<br key={counter++}/>);
                        return(html);
                    })
                }
            </div>
        </div>
    );
}

export default ComponentServiceCustomers;