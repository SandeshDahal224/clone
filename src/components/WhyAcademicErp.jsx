import { Header } from "./HeaderSection";
import headerImage from "../assets/headSection/erpInstitution.svg";
import { Fade } from "react-reveal";
import { Container, Row } from "react-bootstrap";
import {
  BorderCircle,
  Col,
  SubTitle,
  Typography,
} from "../styles/StyledComponent";
import { whyErp } from "./data/whyERP";
import { DemoBox } from "./DemoBox";
import { Circle } from "../assets/icon/AnimatedIcon";

export const WhyErp = () => {
  return (
    <>
      <Header
        title={whyErp.title}
        subtitle={whyErp.info}
        image={headerImage}
      ></Header>
      <Container className="position-relative">
        {whyErp.reason
          .sort((a, b) => a.id - b.id)
          .map((res, i) => (
            <SideBySide res={res} i={i} />
          ))}
        <div className="main d-none d-md-block">
          <div className="circle"></div>
        </div>
        <BorderCircle top="20%" left="40%" className=" d-none d-md-block">
          <Circle></Circle>
        </BorderCircle>
        <BorderCircle top="50%" left="40%" className=" d-none d-md-block">
          <Circle></Circle>
        </BorderCircle>
        <BorderCircle bottom="20%" left="40%" className=" d-none d-md-block">
          <Circle></Circle>
        </BorderCircle>
      </Container>
      <DemoBox />
    </>
  );
};

export const SideBySide = ({ res, i }) => {
  return (
    <>
      <Row className="d-flex justify-content-center align-items-center g-3 mt-3 ">
        <Col
          sm={6}
          className={`p-0 d-flex ${
            i % 2 === 0 ? `justify-content-sm-end` : `justify-content-start`
          } align-items-center ${i % 2 === 0 ? `order-1 order-sm-2` : ``}`}
        >
          {i % 2 === 0 ? (
            <Fade right delay={200}>
              <img src={res?.image} alt="" height="180px" />
            </Fade>
          ) : (
            <Fade left delay={200}>
              <img src={res?.image} alt="" height="180px" />
            </Fade>
          )}
        </Col>
        <Col
          sm={6}
          className={`p-4 ${i % 2 === 0 ? `order-2 order-sm-1` : ``} `}
        >
          <Fade up delay={100}>
            <SubTitle color="#097A57" fontWeight="700">
              {res.type}
            </SubTitle>
          </Fade>
          <Fade up delay={200}>
            <Typography className="mt-2">{res.description}</Typography>
          </Fade>
        </Col>
      </Row>
    </>
  );
};
