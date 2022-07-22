
import React, { useState, useRef, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosAuth/api/axios'; 
import AuthContext from '../../axiosAuth/context/AuthProvider'; 

const LoginForm = () => {
    
  const errRef = useRef();
  const LOGIN_URL = '/api/auth/login'
  const { setAuth } = useContext(AuthContext);
  const [loggedInState, setLoggedInState] = useState(false)
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  let navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    
    // refactor form inputs: user & password
    let user = e.target[0]
    let password = e.target[1]
    console.log(user.value)
    console.log(password.value)

         try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

           /*  console.log(JSON.stringify(response?.data)); */
            console.log(response.data);
            
            /* const accessToken = response?.data?.accessToken; */
            setAuth({ user, password/* , accessToken  */});
            setUser('');
            setPassword('');
            setSuccess(true);
            setLoggedInState(true)
        } catch (err) {
            if (!err?.response) {
                alert('Wrong details!')
                console.log(false)
                setLoggedInState(false)
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                alert('Wrong details!')
                console.log(false)
                setLoggedInState(false)
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                alert('Wrong details!')
                console.log(false)
                setLoggedInState(false)
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
                alert('Wrong details!')
                console.log(false)
                setLoggedInState(false)
            }
            errRef.current.focus();
        }
    

  }

  return (
    <>
        {loggedInState ? (
            navigate('/wallets')

        ) : (
            <Container style={{paddingTop:'1rem'}}>
                <Form onSubmit={submitHandler}>
                    <Row>
                        <Col sm></Col>
                        <Col sm>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label >Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" name="username" required/>
                            <Form.Text className="text-muted">
                                We'll never share your username with anyone else.

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