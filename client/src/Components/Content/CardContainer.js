import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from './Cards';

function CardContainer() {
  return (
    <Container>
      {/* <Row xs={1} md={2}>
        <Col><Card /></Col>
        <Col><Card /></Col>
        
      </Row> */}
      <Row xs="auto" >
        <Col style={{margin:'0.5rem'}}><Cards /></Col>
        <Col style={{margin:'0.5rem'}}><Cards /></Col>
        <Col style={{margin:'0.5rem'}}><Cards /></Col>
      </Row>
    </Container>
  );
}

export default CardContainer;