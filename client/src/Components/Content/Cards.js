import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://media.istockphoto.com/photos/rear-view-of-family-walking-together-picture-id993354548?k=20&m=993354548&s=612x612&w=0&h=vM9qomjAJQ30PCn8-TleMuvsBa9cTN9ll_-apjwJdSs=" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;