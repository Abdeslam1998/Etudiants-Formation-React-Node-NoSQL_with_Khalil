import axios from 'axios'
import React, { Component } from 'react'
import ProduitTableRow from './ProduitTableRow'
import Table from 'react-bootstrap/Table'
export default class ProduitList extends Component {

    constructor(props) {
            super(props)
            this.state = {
                products:[],
            }

    }

    componentDidMount(){
        axios.get("https://63f75dace40e087c958d15d3.mockapi.io/produit")
        .then(res=> {this.setState({products:res.data})})
        .catch(err=>console.log(err))
    }

    DataTable(){
        return this.state.products.map((res,i)=>{
            return <ProduitTableRow obj={res} key={i}></ProduitTableRow>
        })
    }

  render() {
    return (
      <Table>
        <thead>
            <tr>
                <th>Titre</th>
                <th>prix</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {this.DataTable()}
        </tbody>
      </Table>
    )
  }
}
