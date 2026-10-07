import axios from 'axios'
import React, { Component } from 'react'
import { Global } from '../Global';

export default class ComponentServiceSuppliers extends Component {

    state = {
        suppliers: []
    }

    oldSuppliers = [];

    searchInput = React.createRef();

    getSuppliers = async () => {
        let promise = axios.get(Global.urlAPI + "/Suppliers")
        promise.then((response) => {
            this.setState({suppliers: response.data.value});
            this.oldSuppliers = response.data.value;
        });
        return promise;
    }

    /*sendFormInfo = (e) => {
        e.preventDefault();
        this.setState({suppliers: this.oldSuppliers});
        let value = this.searchInput.current.value;
        if(value !== ""){
            let result = this.oldSuppliers.find((supplier, i) => supplier.SupplierID == value);
            console.log(result)
            this.setState({suppliers: [result]});
        }
    }*/

    sendFormInfo = async (e) => {
        e.preventDefault();
        this.setState({suplier: []});
        let id = parseInt(this.searchInput.current.value);
        await this.getSuppliers();
        for (const suplier of this.state.suppliers) {
            if(suplier.SupplierID === id){ this.setState({suppliers: [suplier]}); break;}
        }
    }

    componentDidMount() {
        this.getSuppliers();
    }

  render() {
    return (
      <div>
        <h1>ComponentServiceSuppliers</h1>
        <form onSubmit={this.sendFormInfo}>
            <input type="search" name="search" id="search" ref={this.searchInput}/>
            <button type='submit'>Enviar</button>
        </form>
        {
            this.state.suppliers.map((supplier, i) => {
                return(<h1 key={i}>SupplierID: {supplier?.SupplierID ?? -1}</h1>)
            })
        }
      </div>
    )
  }
}
