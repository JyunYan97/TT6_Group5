import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react'
import Form from 'react-bootstrap/Form';


function Cards() {
 
 
  const currency = ['CAD', 'CNH', 'EUR', 'HKD', 'JPY', 'NZD', 'NOK', 'GBP', 'SEK', 'THB', 'USD']
  
  const [ chosenCur, setChosenCur ] = useState('CAD')
  
  const [ amt, setAmt ] = useState(0)

  const [ isState, setIsState ] = useState(false)

  const [ cardState, setCardState ] = useState(true)

  const [ wallet, setWallet ] = useState(100)

  
  

  const submitHandler = (e) => {
    setIsState(true)
    if (chosenCur === "CAD") {
    setAmt(amt * 0.9225)
    } else if (chosenCur === "CNH") {
    setAmt(amt * 4.7868)
    } else if (chosenCur === "EUR") {
    setAmt(amt * 0.7086)
    } else if (chosenCur === "HKD") {
    setAmt(amt * 5,583)
    } else if (chosenCur === "JPY") {
    setAmt(amt * 97.5303)
    } else if (chosenCur === "NZD") {
    setAmt(amt * 1.1612)
    } else if (chosenCur === "NOK") {
    setAmt(amt * 7.2912 )
    } else if (chosenCur === "GBP") {
    setAmt(amt * 0.5974)
    } else if (chosenCur === "SEK") {
    setAmt(amt * 7.5168)
    } else if (chosenCur === "THB") {
    setAmt(amt * 25.7275)
    } else if (chosenCur === "USD") {
    setAmt(amt * 0.7113)
    } else {
    console.log('something is wrong')
    }

    setWallet(100-amt)
    e.preventDefault()
    }
  
    return (
      <>
      { cardState ? (
      <Card style={{ width: '18rem'}}>
      <Card.Body>
      <Card.Title>Wallet={wallet}</Card.Title>
      <Card.Text>
      <Form onSubmit={submitHandler}>
      <select onChange={e=>setChosenCur(e.target.value)}>
      {currency.map(money=><option>{money}</option>)} 
      </select>
      <Form.Group>
      <label htmlFor="Amount">Amount</label>
      <input name="Amount" value={amt} type="number" onChange={e=>setAmt(e.target.value)}/>
      </Form.Group>
      <Button type="submit" variant="danger" >convert</Button>
      </Form>
      
      </Card.Text>
      <Button type="delete" variant="dark" onClick={()=>setCardState(false)}>Delete</Button>
      { isState ? (
      <Table striped bordered hover>
      <thead>
      <tr>
      <th>Currency</th>
      <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>{chosenCur}</td>
      <td>{amt}</td>
      </tr> 
      </tbody>
      </Table>
      ) : (
      <p></p>
      )}
      </Card.Body>
      </Card> 
      ) : (
      <></>
      )}
      
      
      </>
      
      );
}

export default Cards;
