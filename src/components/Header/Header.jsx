import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../style/header.css'; // Adjust the path if needed

const Header = () => {
  return (
    <header className='header'>
      {/* ==========header top========== */}
      <div className="header_top">
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className="header_top_left">
                <span>Need Help</span>
                <span className="header_top_help">
                  <i className="ri-phone-fill"></i>+91 9589999420
                </span>
              </div>
            </Col>

            <Col lg='6' md='6' sm='6'>
              <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i>Login
                </Link>
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i className="ri-user-line"></i>Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ================header middle============== */}
      <div className="header_middle">
        <Container>
          <Row>
            <Col lg='4' md='3' sm='4'>
              <div className="logo">
                <h1>
                  <Link to="/home" className='d-flex align-item-center gap2'>
                    <i className="ri-steering-fill"></i>
                    <span>
                      Equipments<br /> Rental Services
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg='3' md='3' sm='4'>
              <div className="header_location d-flex align-items-center gap-2">
                <span><i className="ri-earth-line"></i></span>
                <div className="header_location-content">
                  <h4>India</h4>
                  <h6>Bhopal City, Madhya Pradesh</h6>
                </div>
              </div>
            </Col>

            <Col lg='3' md='3' sm='4'>
              <div className="header_location d-flex align-items-center gap-2">
                <span><i className="ri-time-line"></i></span>
                <div className="header_location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col lg='2' md='3' sm='0' className='text-end'>
              <button className="header_btn text-end">
                <Link to="#">
                  <i className="ri-phone-line"></i>Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
