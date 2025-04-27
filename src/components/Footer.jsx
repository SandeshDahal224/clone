import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  Facebook,
  LinkedIn,
  Location,
  Mail,
  Phone,
  Twitter,
} from "../assets/icons";
import { Logo } from "../assets/Logo";
import { ColCenter, LinkText, Typography } from "../styles/StyledComponent";

export const Footer = () => {
  const navigateTo = useNavigate();
  const navigation = (path) => {
    navigateTo(`${path}`);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ background: "#097A57" }} className="mt-5 position-relative">
      <Container className="py-4">
        <img
          className="displayNone"
          src={require("../assets/wave.png")}
          alt=""
          width="100%"
          height="80%"
          style={{
            position: "absolute",
            zIndex: "0",
            left: "0px",
            bottom: "0px",
          }}
        ></img>
        <Row className="g-4" style={{ zIndex: "3", position: "relative" }}>
          <Col sm lg={4}>
            <Logo color="#fff"></Logo>
            <Typography color="#fff" className="mt-4">
              {
                "The most effective academic ERP solution for schools and colleges. Providing a single system to manage admissions online learning, and other academic processes."
              }
            </Typography>
          </Col>
          <Col lg={2} sm minwidth="188px" className="justify-content-start">
            <div className="m-sm-none me-auto">
              <Typography
                color="#fff"
                fontWeight="700"
                fontSize="20px"
                className="mb-2"
              >
                Quick Links
              </Typography>
              <LinkText className="py-1" onClick={() => navigation("/about")}>
                About
              </LinkText>
              <LinkText className="py-1" onClick={() => navigation("/modules")}>
                Modules
              </LinkText>
              <LinkText className="py-1" onClick={() => navigation("/partner")}>
                Partner
              </LinkText>
              <LinkText
                className="py-1"
                onClick={() => navigation("/our-client")}
              >
                Client
              </LinkText>
            </div>
          </Col>
          <ColCenter sm minwidth="187px" className="justify-content-start">
            <div className="m-sm-none me-auto">
              <Typography
                color="#fff"
                fontWeight="700"
                fontSize="20px"
                className="mb-2"
              >
                Help
              </Typography>

              <LinkText
                className="py-1"
                onClick={() => navigation("/contact-us")}
              >
                Contact Us
              </LinkText>
              <LinkText
                className="py-1"
                onClick={() => navigation("/request-a-demo")}
              >
                Request A Demo
              </LinkText>
            </div>
          </ColCenter>

          <ColCenter sm className="justify-content-start" minwidth="265px">
            <div className="m-sm-none me-auto">
              <Typography
                color="#fff"
                fontWeight="700"
                fontSize="20px"
                className="mb-2"
              >
                Information
              </Typography>

              <LinkText className="py-1">
                <Phone /> 051-526647/48,9855021231
              </LinkText>
              <LinkText className="py-1" textTransform="none">
                <Mail />
                info@mydynamicerp.com
              </LinkText>
              <LinkText className="py-1" textTransform="none">
                <Mail />
                support@mydynamicerp.com
              </LinkText>
              <LinkText className="py-1">
                <Location />
                {"B & S Complex, Shankhamul Marga, Kathmandu"}
              </LinkText>
            </div>
          </ColCenter>
        </Row>
      </Container>
      <div
        style={{ background: "#005138", zIndex: "3", position: "relative" }}
        className="d-flex  justify-content-center align-items-center flex-wrap py-2 px-4"
      >
        <Typography color="#fff" fontWeight="400" fontSize="12px">
          {"Copyright © 2022 mydynamicerp.com All rights reserved."}
        </Typography>
        <div className="d-flex ms-4 footerMediaLinks">
          <Facebook />
          <LinkedIn />
          <Twitter />
        </div>
      </div>
    </div>
  );
};
