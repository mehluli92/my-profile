import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import head  from '../head.jpeg';

export const Home = () => {
    return (
<>
    <Container>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col lg="3" md="3" xs="12">
          <Card style={{ width: '18rem' }}>
          <img src={head} className="head"  alt="" />
      <Card.Body>
        <Card.Title>Mehluli Nokwara.</Card.Title>
      </Card.Body>
        </Card>
        <br/>
          </Col>
        <Col lg="1" xs="0"></Col>
        <Col lg="8" md="6" xs="12">
        <Card>
         <Card.Header> <b>Introduction</b> </Card.Header>
           <Card.Body>
           <Card.Text>
            <p>
                I believe in the idea that we can perfom better than yesterday. 
            </p>
            <p>
                Many friends and colleagues describe me as a good team member. 
                Some, say a team leader. Others say that I am a strong-willed individual.
            </p>
            <p>
                When working on projects that I think to be important I spare no sleep
                or energy until it is done. I work very hard some days. But on other days 
                I like to relax. Even if it is the middle of the week.
            </p>
            <p>
                When relaxing I watch television, go out or do church.
            </p>
           </Card.Text>
         </Card.Body>
           </Card>
        </Col>
        </Row>
    </Container>
</>
    )
}