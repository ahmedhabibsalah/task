import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Img from "../images/undraw_businessman_97x4.svg"



const Hero = () => {
    return (
             <Container style={{backdropFilter: "blur(10px)",boxShadow:"0 0 1rem 0 rgba(0, 0, 0, .2)" ,backgroundColor:"rgba(255, 255, 255, .15)", borderRadius:"10px", padding:"2rem", marginTop:"6rem" }}>
               <Row xs="auto">
                  <Col > 
                   <Card style={{ marginTop: "6rem", background:"rgba(255, 255, 255, .15)" }}>
                    <Card.Header as="h2">SPA for financial solutions</Card.Header>
                     <Card.Body >
                      <Card.Text as="h5" style={{marginTop:"1.5rem"}}>
                        Answer a questionnaire and a business plan will be generated for Your startup
                      </Card.Text>
                      <Link to="/survey">
                       <Button variant="primary" style={{marginTop:"3rem", height:"4rem", borderRadius:"5px", fontSize:"20px"}}>generate business plan</Button>
                       </Link>
                    </Card.Body>
                   </Card>
                  </Col>
                 <Col >
                  <Image src={Img} rounded style={{width:"100%", height:"100%"}}>
                  </Image>
                  </Col>
               </Row>
             </Container>
    )
}

export default Hero
