import { Header } from "./HeaderSection";
import headerImage from "../assets/headSection/contactUs.svg";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";
import {
  Button,
  ContactFomContainer,
  ErrorText,
  InfoBox,
  Input,
  LinkText,
  Span,
  TextArea,
  Title,
  Typography,
} from "../styles/StyledComponent";
import { Fade } from "react-reveal";
import GoogleMaps from "./Map";
import {
  CallingWithBackground,
  Facebook,
  FacebookWithBackground,
  LinkedIn,
  Location,
  Mail,
  Phone,
  TelegramWithBackground,
  Twitter,
} from "../assets/icons";
import { DemoBox } from "./DemoBox";
import { sendEmail } from "./helper/EmailSender";
import { useEffect, useState } from "react";

export const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (sent) {
      let timer = setTimeout(() => setSent(false), 30 * 100);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [sent]);

  const onSubmit = (data) => {
    sendEmail(data, setLoading, setSent);
  };

  return (
    <>
      <Header
        title="Contact Us"
        subtitle="Contact us for any support or business related queries."
        image={headerImage}
      ></Header>
      <Container className="mt-5">
        {sent && (
          <div
            style={{
              background: "#097A57",
              position: "fixed",
              top: "85px",
              height: "50px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              left: "0px",
              zIndex: "999",
            }}
          >
            <Typography color="#fff" fontWeight="600">
              Contact message sent to mydynamicerp.com team
            </Typography>
          </div>
        )}
        <Row className="g-4 m-0">
          <Col lg={6} className="p-0">
            <ContactFomContainer>
              <Fade up delay={100}>
                <Title className="mb-4">Drop a message</Title>
              </Fade>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col>
                    <Fade up delay={200}>
                      <Input
                        placeholder="Organization Name"
                        {...register("organizationName", {
                          required: "Please enter organization name",
                          pattern: {
                            value: /^[A-Z ]+[A-Z]{2,30}$/i,
                            message: "invalid name",
                          },
                        })}
                      />
                    </Fade>

                    {errors?.organizationName &&
                      errors?.organizationName?.message && (
                        <ErrorText>
                          {errors?.organizationName?.message}
                        </ErrorText>
                      )}
                  </Col>
                  <Col>
                    <Fade up delay={200}>
                      <Input
                        placeholder="Email"
                        {...register("email", {
                          required: "Please enter email",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email",
                          },
                        })}
                      />
                    </Fade>

                    {errors?.email && errors?.email?.message && (
                      <ErrorText>{errors?.email?.message}</ErrorText>
                    )}
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col>
                    <Fade up delay={300}>
                      <Input
                        placeholder="Phone Number"
                        {...register("phoneNumber", {
                          required: false,
                          maxLength: {
                            value: 16,
                            message: "Please enter valid number",
                          },
                          minLength: {
                            value: 7,
                            message: "Please enter valid number",
                          },
                        })}
                      />
                    </Fade>

                    {errors?.phoneNumber && errors?.phoneNumber?.message && (
                      <ErrorText>{errors?.phoneNumber?.message}</ErrorText>
                    )}
                  </Col>
                  <Col>
                    <Fade up delay={300}>
                      <Input
                        placeholder="Subject"
                        {...register("subject", {
                          required: "Please enter Subject",
                          pattern: {
                            value: /^[A-Z ]+[A-Z]{2,30}$/i,
                            message: "invalid Charecter",
                          },
                        })}
                      />
                    </Fade>

                    {errors?.subject && errors?.subject?.message && (
                      <ErrorText>{errors?.subject?.message}</ErrorText>
                    )}
                  </Col>
                </Row>
                <Fade up delay={350}>
                  <TextArea
                    className="mt-4"
                    placeholder="Message"
                    {...register("message", {
                      minLength: 3,
                    })}
                    rows="3"
                  />
                </Fade>

                <Fade right delay={100}>
                  <Button
                    background="#097A57"
                    padding=" 5px 22px"
                    className="mt-3 d-flex justify-content-center align-items-center"
                    style={{ minWidth: "100px" }}
                  >
                    {loading ? (
                      <div className="loading">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    ) : (
                      <LinkText color="#fff">Send</LinkText>
                    )}
                  </Button>
                </Fade>
              </form>
            </ContactFomContainer>
          </Col>
          <Col lg={6}>
            <GoogleMaps />
          </Col>
        </Row>
        <SocialBoxInfo />
        <ContactInfoBox />
      </Container>
      <DemoBox />
    </>
  );
};

export const SocialBoxInfo = () => (
  <Row className="mt-5 g-4 justify-content-center">
    <Col sm={4} style={{ minWidth: "300px" }}>
      <Fade left delay={200}>
        <InfoBox padding="3rem 16px">
          <CallingWithBackground />
          <Typography
            fontWeight="600"
            color="#000"
            fontSize="16px"
            className="mt-3"
          >
            Phone
          </Typography>
          <Typography className="mt-3">
            <Span
              fontWeight="600"
              color="#000"
              fontSize="16px"
              className="me-3"
            >
              Sale
            </Span>
            051-526647/48 ,9855021231
          </Typography>
          <Typography className="mt-3 d-lg-block d-md-content ">
            <Span
              fontWeight="600"
              color="#000"
              fontSize="16px"
              className="me-3"
            >
              Support
            </Span>
            051-526647/48 ,9855021231
          </Typography>
        </InfoBox>
      </Fade>
    </Col>

    <Col sm={4} style={{ minWidth: "300px" }}>
      <Fade left delay={300}>
        <InfoBox padding="3rem 2rem">
          <FacebookWithBackground />
          <Typography
            fontWeight="600"
            color="#000"
            fontSize="16px"
            className="mt-3"
          >
            Social Media
          </Typography>
          <Typography
            fontWeight="600"
            color="#000"
            fontSize="16px"
            className="mt-3"
          >
            Follow us on:
          </Typography>
          <div className="d-flex mt-3 w-75 justify-content-around">
            <Facebook color={"#000"} />
            <LinkedIn color={"#000"} />
            <Twitter color={"#000"} />
          </div>
        </InfoBox>
      </Fade>
    </Col>

    <Col sm={4} style={{ minWidth: "300px" }}>
      <Fade left delay={400}>
        <InfoBox padding="3rem 0px">
          <TelegramWithBackground />
          <Typography
            fontWeight="600"
            color="#000"
            fontSize="16px"
            className="mt-3"
          >
            Email
          </Typography>
          <Typography className="mt-3">
            <Span
              fontWeight="600"
              color="#000"
              fontSize="16px"
              className="me-3"
            >
              Sale
            </Span>
            sales@mydynamicerp.com
          </Typography>
          <Typography className="mt-3">
            <Span
              fontWeight="600"
              color="#000"
              fontSize="16px"
              className="me-3"
            >
              Support
            </Span>

support@mydynamicerp.com
            
          </Typography>
        </InfoBox>
      </Fade>
    </Col>
  </Row>
);

export const ContactInfoBox = () => (
  <>
    <Fade up delay={100}>
      <Title className="mt-5">Office Location</Title>
    </Fade>
    <Row className="g-4 mt-2 justify-content-center">
      <Col sm={4} style={{ minWidth: "300px" }}>
        <Fade left delay={100}>
          <InfoBox justifyContent="start" borderRadius="4px">
            <Typography fontWeight="600" color="#097A57" fontSize="16px">
            Head Office
            </Typography>
            <Typography className="mt-3">
              <Phone color="#000" />
              051-526647/48 ,9855021231
            </Typography>
            <Typography className="mt-3">
              <Mail color="#000" />
               info@dynamic.net.np
            </Typography>
            <Typography className="mt-3">
              <Location color="#000" /> Beside Trimurti Cinema Birgunj, Nepal
            </Typography>
          </InfoBox>
        </Fade>
      </Col>
      <Col sm={4} style={{ minWidth: "300px" }}>
        <Fade left delay={100}>
          <InfoBox justifyContent="start" borderRadius="4px">
            <Typography fontWeight="600" color="#097A57" fontSize="16px">
            Corporate Office
            </Typography>
            <Typography className="mt-3">
              <Phone color="#000" />
               +977-9880400400 ,9851163652
            </Typography>
            <Typography className="mt-3">
              <Mail color="#000" />
               info@dynamic.net.np
            </Typography>
            <Typography className="mt-3">
              <Location color="#000" />
              B&S Complex, New Baneshwor Chowk, Kathmandu
            </Typography>
          </InfoBox>
        </Fade>
      </Col>
      <Col sm={4} style={{ minWidth: "300px" }}>
        <Fade left delay={100}>
          <InfoBox justifyContent="start" borderRadius="4px">
            <Typography fontWeight="600" color="#097A57" fontSize="16px">
            Butwal Branch
            </Typography>
            <Typography className="mt-3">
              <Phone color="#000" />
              +977-9857030577
            </Typography>
            <Typography className="mt-3">
              <Mail color="#000" />
               info@dynamic.net.np
            </Typography>
            <Typography className="mt-3">
              <Location color="#000" />
              Butwal city center,Butwal,Nepal
            </Typography>
          </InfoBox>
        </Fade>
      </Col>

      <Col sm={4} style={{ minWidth: "300px" }}>
        <Fade left delay={100}>
          <InfoBox justifyContent="start" borderRadius="4px">
            <Typography fontWeight="600" color="#097A57" fontSize="16px">
            Itahari Branch
            </Typography>
            <Typography className="mt-3">
              <Phone color="#000" />
              +977-9801050626
            </Typography>
            <Typography className="mt-3">
              <Mail color="#000" />
               info@dynamic.net.np
            </Typography>
            <Typography className="mt-3">
              <Location color="#000" />
              Dharan Line,Opposite of Nepal Army Camp Itahari-4,Sunsari,Nepal
            </Typography>
          </InfoBox>
        </Fade>
      </Col>

      <Col sm={4} style={{ minWidth: "300px" }}>
        <Fade left delay={100}>
          <InfoBox justifyContent="start" borderRadius="4px">
            <Typography fontWeight="600" color="#097A57" fontSize="16px">
            India branch
            </Typography>
            <Typography className="mt-3">
              <Phone color="#000" />
              +91 85810 04142
            </Typography>
            <Typography className="mt-3">
              <Mail color="#000" />
               info@dynamic.net.np
            </Typography>
            <Typography className="mt-3">
              <Location color="#000" />
              Maharaja Enclave, Kaliket Nagar, Patna, Bihar
            </Typography>
          </InfoBox>
        </Fade>
      </Col>
    </Row>
  </>
);
