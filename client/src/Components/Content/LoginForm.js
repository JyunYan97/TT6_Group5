import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { users } from './data'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const [loggedInState, setLoggedInState] = useState(false)

  let navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    
    // refactor form inputs: email & password
    let email = e.target[0]
    let password = e.target[1]
    console.log(email.value)
    console.log(password.value)

    // condition to check against data
    if (email.value == users[0].name && password.value == users[0].password || email.value == users[1].name && password.value == users[1].password) {
        console.log(true)
        setLoggedInState(true)
      
    } else {
        alert('Wrong details!')
        console.log(false)
        setLoggedInState(false)
        
    }    
  }

  return (
    <>
        {loggedInState ? (
            navigate('/')
        ) : (
            <Container style={{paddingTop:'1rem'}}>
                <Form onSubmit={submitHandler}>
                    <Row>
                        <Col sm></Col>
                        <Col sm>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label >Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" required/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col sm></Col>
                    </Row>
                    <Row>
                        <Col sm></Col>
                        <Col sm>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" required/>
                            </Form.Group>
                        </Col>
                        <Col sm></Col>
                    </Row>
                    <Row>
                        <Col sm></Col>
                        <Col sm>
                            <Button variant="danger" type="submit">
                            Log In
                            </Button>
                        </Col>
                        <Col sm></Col>
                    </Row>
                </Form>
            </Container>
        )}
    </>
  )
}

export default LoginForm