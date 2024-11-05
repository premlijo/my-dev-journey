import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icon2.svg';
import navIcon3 from '../assets/img/icon3.png';
import { Copy } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <p className="footerName">Prem Lijo P</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end footer-icons">
            <div className="social-icon-footer">
              <a href="https://www.linkedin.com/in/premlijo/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/premlijo"><img src={navIcon2} alt="GitHub" className="icon2footer" /></a>
              <a href="https://leetcode.com/u/premlijo/"><img src={navIcon3} alt="Leetcode" className="icon3footer" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}