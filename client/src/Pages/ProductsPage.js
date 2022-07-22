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
 <tr>
<td>CAD</td>
<td>0.9925</td>
</tr>

<tr>
<td>CCNH</td>
<td>4.7868</td>
</tr>

<tr>
<td>CEUR</td>
<td>0.7086</td>
</tr>

<tr>
<td>CHKD</td>
<td>5.583</td>
</tr>

<tr>
<td>JPY</td>
<td>97.5303</td>
</tr>

<tr>
<td>NZD</td>
<td>1.1612</td>
</tr>

<tr>
<td>NOK</td>
<td>7.2912</td>
</tr>

<tr>
<td>GBP</td>
<td>0.5974</td>
</tr>

<tr>
<td>SEK</td>
<td>7.5168</td>
</tr>

<tr>
<td>THB</td>
<td>25.7275</td>
</tr>

<tr>
<td>USD</td>
<td>0.7113</td>
</tr> 
 </tbody>
</Table></Col>
        </Row>
        </Container>
    </div>
  )
}

export default Products
