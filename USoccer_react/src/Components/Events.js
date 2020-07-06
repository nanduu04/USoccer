import React from 'react'
import {Card, Button, Row, Col, Image, Container} from 'react-bootstrap'


function Events(){
    return (
      <div>  
      <div>
       <h1> Here are some of the events near your area:</h1>
      </div>
      
      <Container>

  <Row className="events-container">
      <Col>
        <Card style={{ width: '18rem', height: '18rem' }}> 
          <Card.Body className="events">
              <Card.Title>Soccer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">3522 Erindale Station Road</Card.Subtitle>
              <Card.Text>
              Required People: 5
              </Card.Text>
              <Card.Link href="/event">Event</Card.Link>
          </Card.Body>
        </Card>     
      </Col>

      <Col>
        <Card style={{ width: '18rem', height: '18rem' }}> 
          <Card.Body className="events">
              <Card.Title>Soccer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">3522 Erindale Station Road</Card.Subtitle>
              <Card.Text>
              Required People: 5
              </Card.Text>
              <Card.Link href="/event">Event</Card.Link>
          </Card.Body>
        </Card>     
      </Col>

      <Col>
        <Card style={{ width: '18rem', height: '18rem' }}> 
          <Card.Body className="events">
              <Card.Title>Soccer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">3522 Erindale Station Road</Card.Subtitle>
              <Card.Text>
              Required People: 5
              </Card.Text>
              <Card.Link href="/event">Event</Card.Link>
          </Card.Body>
        </Card>     
      </Col>
    </Row>

    <Row className="events-container">
      <Col>
        <Card style={{ width: '18rem', height: '18rem' }}> 
          <Card.Body className="events">
              <Card.Title>Soccer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">3522 Erindale Station Road</Card.Subtitle>
              <Card.Text>
              Required People: 5
              </Card.Text>
              <Card.Link href="/event">Event</Card.Link>
          </Card.Body>
        </Card>     
      </Col>

      <Col>
        <Card style={{ width: '18rem', height: '18rem' }}> 
          <Card.Body className="events">
              <Card.Title>Soccer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">3522 Erindale Station Road</Card.Subtitle>
              <Card.Text>
              Required People: 5
              </Card.Text>
              <Card.Link href="/event">Event</Card.Link>
          </Card.Body>
        </Card>     
      </Col>

      <Col>
        <Card style={{ width: '18rem', height: '18rem' }}> 
          <Card.Body className="events">
              <Card.Title>Soccer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">3522 Erindale Station Road</Card.Subtitle>
              <Card.Text>
              Required People: 5
              </Card.Text>
              <Card.Link href="/event">Event</Card.Link>
          </Card.Body>
        </Card>     
      </Col>

    </Row>
      </Container>

      </div>
    )
}

export default Events;