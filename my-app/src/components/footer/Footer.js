import React from 'react'
import Container from 'react-bootstrap/Container';
import daddy from "../../assets/img.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Footer.css"

const Footer = () => {
    return (
        <div>

            <Container fluid className='border-top mt-3'>
                <Container className='mt-4 mb-4'><div className='wid '>
                    <img alt='daddy' className='w-100 h-100' src={daddy} /></div>
                    <Row className='mt-3'>
                        <Col sm={12} md={6} lg={6} className='txcn'>Copyright © 2024 GoDaddy Operating Company, LLC. All Rights Reserved.</Col>
                        <Col sm={12} md={6} lg={6} className=' txcn fsz'><span className='undr'>Do not share my personal information</span><strong className='fw-bold ms-2 me-2'>•</strong><span className='undrlin text-decoration-underline'>Privacy Settings</span></Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Footer