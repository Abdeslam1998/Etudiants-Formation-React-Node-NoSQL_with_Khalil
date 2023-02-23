import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
export default class ProduitTableRow extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
        }
    }

  render() {
    return (
        <tr>
            <td>{this.props.obj.titre}</td>
            <td>{this.props.obj.prix}</td>
            <td>{this.props.obj.description}</td>
            <td>
            <Link to={'/'}>Edit</Link>
            <Button>Delete</Button>
            </td>
        </tr>
    )
  }
}

