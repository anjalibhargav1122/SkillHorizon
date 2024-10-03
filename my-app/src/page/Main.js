import React from 'react'
import Header from '../components/navbar/Header'
import Container from 'react-bootstrap/Container'
import "./Main.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import safe from "../assets/secure.svg"
import tra from "../assets/transfers.svg"
import pay from "../assets/payments.svg"
import visa from "../assets/visa.webp"
import mastercard from "../assets/mastercard.webp"
import paypal from "../assets/paypal.webp"
import alipay from "../assets/alipay.webp"
import Button from 'react-bootstrap/Button';
import { FaLongArrowAltRight } from "react-icons/fa";
import Footer from '../components/footer/Footer';
import Card from 'react-bootstrap/Card';
import { FaCheck } from "react-icons/fa";

const Main = () => {
    const check = [
        {
            "text": "Free transaction support"
        },
        {
            "text": "Secure payments"
        },
        {
            "text": "Local currency available in cart at checkout"
        }
    ];
    return (
        <div>
            <Header />

            <Card className='box wdcd   '>
                <Card.Body className='p-0 pt-4 pb-3'>
                    <Card.Title className='fw-bold fs-3 ms-3'>Get this domain</Card.Title>
                    <Card.Text className='ms-3 mb-4'>
                        Pay the full $ 2,599 now to make it yours!
                    </Card.Text>
                    <Container fluid className='d-flex justify-content-between bg-light pt-4 pb-4 border-top border-bottom '><div className='d-flex'><div className='clrbor'><div className='dot'></div></div>
                        <h5 className='fw-bold ms-2 '>Buy now</h5></div>
                        <h5 className='tx me-3'>USD$ 2,599</h5>
                    </Container>
                    <Button variant='dark' className='wbtn mt-4 mb-4 p-3 ms-3 me-3' >Next</Button>
                    <div className='border-top mb-4'></div>
                    {
                        check.map((v, i) => {
                            return (
                                <div key={i} className='d-flex ms-3 '><FaCheck className='  me-3' />{v.text}</div>
                            )
                        })
                    }
                    <div className='d-flex align-items-center justify-content-between ms-4 mt-4 me-4'><img alt='img' src={visa} />
                        <img alt='img' src={mastercard} />
                        <img alt='img' src={paypal} />
                        <img alt='img' src={alipay} /></div>
                </Card.Body>
            </Card>
            <Container className='bg ' fluid>
                <Container className=' text-white pt-5 pb-5'>  <h4>The domain name</h4>
                    <p className='display-3 fw-bold'>SkillHorizon.com</p>
                    <h4>is for sale!</h4></Container>
            </Container>

          

            <Container fluid className='pt-5 mpt'>
                <Row>
                    <Col sm={12} md={1} lg={1} ></Col>
                    <Col sm={12} md={2} lg={2} className='text-center bor pb-5'> <img src={safe} alt='safe' /><p className='mt-4'>Safe & secure transactions</p></Col>
                    <Col sm={12} md={2} lg={2} className='text-center bor pb-5'><img src={tra} alt='safe' /><p className='mt-4'>Fast & easy transfers</p></Col>
                    <Col sm={12} md={2} lg={2} className='text-center border-bottom pb-5'><img src={pay} alt='safe' /><p className='mt-4'>Hassle free payments</p></Col>
                    <Col sm={12} md={2} lg={2} className='pb-5'></Col>
                    <Col sm={12} md={2} lg={2} ></Col>
                    <Col sm={12} md={1} lg={1} ></Col>
                </Row>
            </Container>
            <Container className='mar mb-5'>
                <p className='fw-bold fs-5'>The simple, and safe way to buy domain names</p><p>No matter what kind of domain you want to buy or lease, we make the transfer simple and safe.</p>
                <Button className='fw-bold btbg mt-3' variant=''>Here's how it works <FaLongArrowAltRight className='fs-4 ms-2' /></Button>
            </Container>
            <Footer /> 
        </div>
    )
}

export default Main