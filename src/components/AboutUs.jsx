import { Header } from "./HeaderSection";
import headerImage from "../assets/headSection/mockup.png";
import missionImg from "../assets/other/mission.svg";
import vissionImg from "../assets/other/vission.svg";

import { Col, Container, Row } from "react-bootstrap";
import { Counter } from "./ActivitiesCounter";
import {
  AnimatedCircle,
  ClearText,
  Title,
  Typography,
} from "../styles/StyledComponent";
import mockup from "../assets/headSection/erpMockup.png";
import { ContactInfoBox, SocialBoxInfo } from "./ContactUs";
import { Circle } from "../assets/icon/AnimatedIcon";

export const AboutUs = () => {
  return (
    <>
      <Header
        image={headerImage}
        title={
          <>
            {"Dynamic Academic"}
            <br />
            {
              "ERP is the flagship product of Dynamic Technsoft India Pvt. Ltd. "
            }
          </>
        }
        subtitle="Dynamic Technosoft is a recognized leader in the field of IT service providers, providing comprehensive software development and web products for more than a decade. "
      ></Header>

      <div style={{ background: "#F7F7F7" }} className="mt-5 py-5">
        <Container>
          <Row>
            <Col md={5}>
              <Title>
                {
                  "Dynamic Academic ERP Product of Dynamic Technosoft Pvt.Ltd."
                }
              </Title>
              <img
                src={mockup}
                alt="Dynamic Academic ERP Product of Dynamic Technosoft Pvt.Ltd."
                style={{ objectFit: "contain", marginTop: "1rem" }}
                width="95%"
              ></img>
            </Col>
            <Col
              md={7}
              className="align-items-center d-flex flex-column justify-content-center"
            >
              <Typography className="mt-2">
                {
                  "Dynamic Academic ERP is the outcome of our years of research and experience in developing a one stop innovative solution for Academic Institutions of every size and numbers."
                }
              </Typography>
              <Typography className="mt-2">
                {
                  'We firmly believe that "Sales Goes Up and Down but Service Remains Forever" and working on the same motto, we are very dedicated in providing the best after sales service to our clients. We have the clients working with us for more than 10 years, from the time of our inauguration.'
                }
              </Typography>
              <Typography className="mt-2">
                {
                  " We also believe that learning never stops, hence, our software enhancement and upgradation is a part of our core work and we are comping ourselves with regular updates and refined modules using the best and latest technologies."
                }
              </Typography>
              <Typography className="mt-2">
                {
                  "As of today in 2022, we are already working with 1500+ schools and colleges and helping them in effectively managing their work processes. We have effectively been a part of 1+ Million Students and 100+ thousand parents."
                }
              </Typography>
              <Typography className="mt-2">
                {
                  "We would like to thank every principal and management who believed in us and gave us the opportunity in working with them. A mission lead by 2 people, from a small city with 1 school back in 2010 is now a part of 1500+ institutions."
                }
              </Typography>
              <Typography className="mt-2">
                {
                  "We are onboarding more and more academic institutions globally and would like to welcome you to one of the fastest growing IT company and be the part of most advance Academic ERP Solution. "
                }
              </Typography>
            </Col>
          </Row>
        </Container>
      </div>
      <Counter />

      <Container>
        <SocialBoxInfo />
        <ContactInfoBox />
        <div className="position-relative">
          <Row className=" m-0 mt-5 ">
            <Col sm={6} md={7} className="bg-grey p-0 order-md-1 order-2">
              <Title className="mb-md-4 mb-2">Our Mission</Title>
              <Typography color="#000">
                {
                  "Dynamic Technosoft has a clear and confident vision for the challenges of tomorrow. We aspire to support a culture of performance, matched with integrity. Our CLEAR Values help us constantly evolve and better ourselves."
                }
                <br />
                {
                  "We as a company are nothing without our clients. We work together with our clients to solve challenging issues to minimize businessrisk and maximize opportunity."
                }
              </Typography>
            </Col>
            <Col
              sm={6}
              md={5}
              className="p-0 d-flex justify-content-md-end justify-content-center align-items-end order-md-2 order-1"
            >
              <img
                src={missionImg}
                alt=""
                height="90%"
                width="70%"
                style={{ objectFit: "contain" }}
              />
            </Col>
          </Row>

          <Row className="m-0 mt-5">
            <Col
              sm={6}
              md={5}
              className="p-0 d-flex justify-content-md-start justify-content-center align-items-center align-items-md-end position-relative"
            >
              <img
                src={vissionImg}
                alt=""
                height="90%"
                width="70%"
                style={{ objectFit: "contain" }}
              />
              <AnimatedCircle right="10%" top="50%" />
            </Col>
            <Col sm={6} md={7} className="bg-grey p-0">
              <Title className="mb-md-4 mb-2 text-md-end">Our Vision</Title>
              <Typography color="#000" style={{ display: "inline-block" }}>
                <ClearText color="#73BF43">{"Client focus"}</ClearText>:{" "}
                <span className="ms-1">
                  Our success relies on the satisfaction of our customers. We
                  are dedicated to delivering exceptional service and value.
                </span>
                <br />
                <ClearText color="#73BF43">Leadership</ClearText>:{" "}
                <span className="ms-1">
                  {
                    " Our services allow us to lead a digital evolution, solving major challenges in our communities and companies."
                  }
                </span>
                <br />
                <ClearText color="#73BF43">Effective</ClearText>:{" "}
                <span className="ms-1">
                  {
                    "We are one hundred percent committed to providing effective solutions to the challenges of our clients."
                  }
                </span>
                <br />
                <ClearText color="#73BF43">Aspiration</ClearText>:{" "}
                <span className="ms-1">
                  {
                    "We aspire to keep on improving our quality of service and grow strong as a company collectively."
                  }
                </span>
                <br />
                <ClearText color="#73BF43">Results</ClearText>:{" "}
                <span className="ms-1">
                  {
                    "We are responsible for our commitments and accountable as well for the expected results."
                  }
                </span>
              </Typography>
            </Col>
          </Row>

          <div className="borderCircle d-none d-md-block">
            <Circle></Circle>
          </div>
        </div>
      </Container>
    </>
  );
};
