import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import React from 'react'

const LoggedButton = () => {
  let navigate = useNavigate()

  return (
    <>
         <Button variant="danger" onClick={() => navigate('/login')} type="submit" >Login</Button>
    </>
  )
}

export default LoggedButton