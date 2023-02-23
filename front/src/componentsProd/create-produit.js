import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export default class CreateProd extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            titre:'',
            prix:'',
            description:''
        }
    }

    onChange= e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit= e=>{
        e.preventDefault();
        const productObj ={
            titre:this.state.titre,
            prix:this.state.prix,
            description:this.state.description,
        }
        axios.post("https://63f75dace40e087c958d15d3.mockapi.io/produit",productObj).then(response =>console.log(response)).catch(err =>console.log(err))
        this.reset();
    }
    
    reset(){
        this.setState({
            titre:'',
            prix:'',
            description:''
        })
    }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
        <Form.Group>
            <Form.Label>Titre:</Form.Label>
            <Form.Control type="text" value={this.state.titre} name="titre" onChange={this.onChange}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>prix:</Form.Label>
            <Form.Control type="Number" value={this.state.prix} name="prix" onChange={this.onChange}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>description:</Form.Label>
            <Form.Control type="text" value={this.state.description} name="description" onChange={this.onChange}></Form.Control>
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Produit
        </Button>
        </Form>
      </div>
    )
  }
}
