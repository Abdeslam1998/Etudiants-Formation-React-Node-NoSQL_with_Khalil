import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateStudent from './components/create-student'
import EditStudent from './components/edit-student'
import StudentList from './components/student-list'
import CreateProd from './componentsProd/create-produit'
import ProduitList from './componentsProd/produit-list'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-student'} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-student'} className="nav-link">
                    Create Student
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/student-list'} className="nav-link">
                    Student List
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/create-produit'} className="nav-link">
                    Create Prod
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/produit-list'} className="nav-link">
                    Produit List
                  </Link>
                </Nav>

              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/create-student"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-student/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/student-list"
                    component={(props) => <StudentList {...props} />}
                  />
                  <Route
                    exact
                    path="/create-produit"
                    component={(props) => <CreateProd {...props} />}
                  />
                  <Route
                    exact
                    path="/produit-list"
                    component={(props) => <ProduitList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
