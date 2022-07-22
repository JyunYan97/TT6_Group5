import React from 'react'
import CardContainer from '../Components/Content/CardContainer'
import NavBar1 from '../Components/NavBars/NavBar1'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const Products = () => {
  return (
    <div>
        <NavBar1 />
        <h1 style={{padding:'1rem'}}>Products</h1>
        <Container>
        <Row>
        <Col><CardContainer /></Col>
        <Col><Table striped bordered hover>
 <thead>
 <tr>
 <th>Currency</th>
 <th>Rate</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td>CAD</td>
 <td>0.9225</td>
 </tr> 
 <tr>
 <td>CNH</td>
 <td>4.7868</td>
 </tr> 
 </tbody>
</Table></Col>
        </Row>
        </Container>
    </div>
  )
}

export default Products
