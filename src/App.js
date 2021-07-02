import React, {Component} from "react";
import {Container, Row, Col, Card, Alert, Button, Badge, Breadcrumb, ButtonGroup, CardGroup, Media} from "react-bootstrap"
import { FaRegUserCircle } from 'react-icons/fa'
class App extends Component{
  render(){
    return(
      <Container>
        <Row>
          <Col>
            <Alert variant="primary">
              Website React bootstrap
            </Alert>
          </Col>
          <Col  md={3}>

          </Col>
          <Col >
            <ButtonGroup>
            <Button variant="primary">
              Notifications
              <Badge variant="light" text="dark">9</Badge>{' '}
            </Button>
            <Button variant="primary">
              Message
              <Badge variant="light" text="dark">19</Badge>{' '}
            </Button>
            <Media>
              <img 
                src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
                alt="profil"
                width={30}
                height={30}
              />
              <Media.Body>
                <h5>Wila</h5>
              </Media.Body>
            </Media>
            </ButtonGroup>
            
          </Col>

        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col md={4}>
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/a">Berita</Breadcrumb.Item>
                <Breadcrumb.Item active>Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
        </Row>

        <Row>
          <CardGroup>
            <Card style={{width:"250px"}}>
              <Card.Img
                variant="top"
                src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
              />
            
              <Card.Body>
                <Card.Title>Sate</Card.Title>
                <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          
            <Card style={{width:"250px"}}>
              <Card.Img
                variant="top"
                src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100"
              />
            
              <Card.Body>
                <Card.Title>Sate</Card.Title>
                <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          
            <Card style={{width:"200px"}}>
              <Card.Img
                variant="top"
                src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
              />
            
              <Card.Body>
                <Card.Title>Sate</Card.Title>
                <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          
            <Card style={{width:"200px"}}>
              <Card.Img
                variant="top"
                src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
              />
            
              <Card.Body>
                <Card.Title>Sate</Card.Title>
                <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    )
  }
}


export default App;
