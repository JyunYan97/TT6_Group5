import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react'

function Cards() {
  const [ chosenCur, setChosenCur ] = useState('SGD')
  const currency = ['CAD', 'CNH', 'EUR', 'HKD', 'JPY', 'NZD', 'NOK', 'GBP', 'SEK', 'THB', 'USD']
  const [ amt, setAmt ] = useState(0)

  return (
    <Card style={{ width: '18rem'}}>
      {/* <Card.Img variant="top" src="https://media.istockphoto.com/photos/rear-view-of-family-walking-together-picture-id993354548?k=20&m=993354548&s=612x612&w=0&h=vM9qomjAJQ30PCn8-TleMuvsBa9cTN9ll_-apjwJdSs=" /> */}
      <Card.Body>
        <Card.Title>Wallet: Trip to Japan, Balance:___</Card.Title>
        <Card.Text>
        <form>
        <select onChange={e=>setChosenCur(e.target.value)}>
        {currency.map(money=><option>{money}</option>)} 
        </select>
        <label htmlFor='Amount'>
        Amount:  
        </label>
        <input name="Amount" value={amt} type="number" onChange={e=>setAmt(e.target.value)}/>
        <Button variant="danger" type='submit'>Convert</Button>
        </form>
        </Card.Text>
        
        <Table striped bordered hover>
        <thead>
        <tr>
        <th>Currency</th>
        <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>CAD</td>
        <td>smth</td>
        </tr>
        <tr>
        <td>CNH</td>
        <td>smth</td>
        </tr>
        <tr>
        <td>EUR</td>
        <td>smth</td>
        </tr>
        <tr>
        <td>HKD</td>
        <td>smth</td>
        </tr>
        <tr>
        <td>JPY</td>
        <td>smth</td>
        </tr>
        <tr>
        <td>NZD</td>
        <td>smth</td>
        </tr>
        <tr>
        <td>NOK</td>
        <td>smth</td>
        </tr>
        <tr>
        <td>GBP</td>
        <td>smth</td>
        </tr>
        <tr>
        <td>SEK</td>
        <td>smth</td>
        </tr>
        <tr>
        <td>THB</td>
        <td>smth</td>
        </tr>
        <tr>
        <td>USD</td>
        <td>smth</td>
        </tr>
        </tbody>
        </Table>
        <Button variant="dark">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
