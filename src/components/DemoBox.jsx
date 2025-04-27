import { Container, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import { useLocation, useNavigate } from "react-router-dom";
import mockup from "../assets/headSection/erpMockup.png";
import {
  Button,
  Col,
  LinkText,
  Title,
  Typography,
} from "../styles/StyledComponent";

export const DemoBox = () => {
  const navigateTo = useNavigate();
  const location = useLocation();

  const isContactUs = location.pathname === "/contact-us";
  return (
    <div
      style={{
        background: "linear-gradient(94.62deg, #097A57 0%, #73BF43 102.72%)",
        marginTop: "3rem",
        position: "relative",
      }}
    >
      <Container>
        <Row className="py-4 g-4 g-md-0 d-flex justify-content-between align-items-center">
          <Col sm={12} md={6} className="order-md-1 order-2">
            <Fade up delay={100}>
              <Title color="#fff">
                {
                  "Web and Custom Branded Mobile App Exclusive for your Institution"
                }
              </Title>
            </Fade>
            <Fade up delay={200}>
              <Typography color="#fff">
                {
                  "We offer a dynamic academic ERP web and mobile app that is easy to learn, fast, and secure for conducting all academic processes, managing information, and teaching-learning online."
                }
              </Typography>
            </Fade>

            <div className="d-flex flex-wrap">
              <Fade up delay={300}>
                <Button
                  border="1.5px solid #fff"
                  background="#fff"
                  padding="4px 8px"
                  className="mt-4 me-4"
                  onClick={() => {
                    navigateTo("/request-a-demo");
                    window.scrollTo(0, 0);
                  }}
                >
                  <LinkText color="#097A57">Request a demo</LinkText>
                </Button>
              </Fade>
              <Fade up delay={300}>
                <>
                  {!isContactUs && (
                    <Button
                      border="1.5px solid #fff"
                      padding="4px 8px"
                      className="mt-4"
                      onClick={() => {
                        navigateTo("/contact-us");
                        window.scrollTo(0, 0);
                      }}
                    >
                      <LinkText color="#fff">Contact Us</LinkText>
                    </Button>
                  )}
                </>
              </Fade>
            </div>
          </Col>

          <Col
            sm={5}
            className="order-md-2 order-1 d-flex justify-content-end align-items-center"
            style={{ overFlow: "hidden" }}
          >
            <Fade right delay={100}>
              <img
                src={mockup}
                alt="The Best Academic Institution Management Software"
                width="100%"
                height="100%"
                style={{ minWidth: "320px" }}
              ></img>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
