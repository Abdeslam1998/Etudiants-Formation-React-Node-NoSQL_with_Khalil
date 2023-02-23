import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class CreateStudent extends Component {

  constructor(props)
  {
    super(props);
    // eslint-disable-next-line no-this-before-super
    this.state={
      name:'',
      email:'',
      rollno:'',
    }
  }

  onChange= e=>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  render() {
    return (
      <div className="form-wrapper">
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Nom:</Form.Label>
            <Form.Control type="text" value={this.state.name}  name="name" onChange={this.onChange}></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" value={this.state.email} name="email" onChange={this.onChange}></Form.Control>
          </Form.Group>
          <Form.Group controlId="rollno">
            <Form.Label>Numéro:</Form.Label>
            <Form.Control type="text" value={this.state.rollno} name="rollno" onChange={this.onChange}></Form.Control>
          </Form.Group>
          <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Student
        </Button>
        </Form>
        
      </div>
    )
  }
}
