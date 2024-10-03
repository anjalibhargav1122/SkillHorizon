import React from 'react'
import Container from 'react-bootstrap/Container';
import logo from "../../assets/img.png"
import "./Header.css"
import { FaStar } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <Container className='pt-3 pb-3'>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <a class="navbar-brand wid" href="#"><img className='w-100 h-100' alt='godaddy' src={logo} /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">

              </ul>
              <form class="d-flex ">
                <a href='#' className='text-decoration-none text-dark fw-bold me-3'>Excellent</a>
                <a href='#' className='text-decoration-none text-dark me-3'>4.6 out of 5</a>
                <a href='#' className='text-decoration-none text-dark d-flex align-items-center fs-6 fw-bold'><FaStar className='text-success me-1 fs-4' /> Trustpilot</a>
              </form>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Header