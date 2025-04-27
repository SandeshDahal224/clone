import { Header } from "./HeaderSection";
import headerImgae from "../assets/headSection/erpOffer.svg";
import { Container, Row } from "react-bootstrap";
import {
  BorderCircle,
  Button,
  Col,
  ColCenter,
  DynamicBackgroundBox,
  MarkerUl,
  SubTitle,
  Title,
  Typography,
} from "../styles/StyledComponent";
import { offer } from "./data/ourOffer";
import { useState } from "react";
import { Fade } from "react-reveal";
import { DemoBox } from "./DemoBox";
import { Circle } from "../assets/icon/AnimatedIcon";

export const OurOffer = () => {
  const [showOffer, setShowOffer] = useState("forAdmin");
  return (
    <>
      <Header
        title={offer.title}
        subtitle={offer.info}
        image={headerImgae}
      ></Header>
      <div style={{ background: "#F6F6F6" }} className="py-4 position-relative">
        <BorderCircle top="2%" left="10%" zIndex="1">
          <Circle></Circle>
        </BorderCircle>
        <Title className="text-center">{offer.mobile.title}</Title>
        <Container className="mt-4 py-2">
          <Row className="g-4 justify-content-center align-items-center mb-4">
            <Col sm={2} minwidth="230px">
              <Button
                background={showOffer === "forAdmin" ? "#097A57" : "#30CE9D"}
                borderRadius="4px"
                padding="6px 16px"
                className="w-100"
                onClick={() => setShowOffer("forAdmin")}
              >
                Mobile App For Admin
              </Button>
            </Col>
            <Col sm={2} minwidth="230px">
              <Button
                background={showOffer === "forStudent" ? "#097A57" : "#30CE9D"}
                borderRadius="4px"
                padding="6px 16px"
                className="w-100"
                onClick={() => setShowOffer("forStudent")}
              >
                Mobile App For Students
              </Button>
            </Col>
            <Col sm={2} minwidth="230px">
              <Button
                background={showOffer === "forTeacher" ? "#097A57" : "#30CE9D"}
                borderRadius="4px"
                padding="6px 16px"
                className="w-100"
                onClick={() => setShowOffer("forTeacher")}
              >
                Mobile App For Teachers
              </Button>
            </Col>
            <Col sm={2} minwidth="230px">
              <Button
                background={showOffer === "forParent" ? "#097A57" : "#30CE9D"}
                borderRadius="4px"
                padding="6px 16px"
                className="w-100"
                onClick={() => setShowOffer("forParent")}
              >
                Mobile App For Parents
              </Button>
            </Col>
          </Row>
          {showOffer === "forAdmin" && (
            <ToggleDiv data={offer.mobile.forAdmin} type="mobile" />
          )}
          {showOffer === "forStudent" && (
            <ToggleDiv data={offer.mobile.forStudent} type="mobile" />
          )}
          {showOffer === "forTeacher" && (
            <ToggleDiv data={offer.mobile.forTeacher} type="mobile" />
          )}
          {showOffer === "forParent" && (
            <ToggleDiv data={offer.mobile.forParents} type="mobile" />
          )}
        </Container>
      </div>

      <Container className="pt-4 pb-5">
        <Title className="text-center mb-4">{offer.web.title}</Title>
        <ToggleDiv data={offer.web} type="web" />
      </Container>

      <div style={{ background: "#F6F6F6" }} className="py-4 position-relative">
        <div className="main d-none d-md-block">
          <div className="circle"></div>
        </div>
        <BorderCircle top="2%" left="10%" zIndex="1">
          <Circle></Circle>
        </BorderCircle>

        <Container>
          <Row className="g-4">
            <Col sm={4}>
              <Fade left delay={100}>
                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                  <img
                    src={require("../assets/headSection/erpMockup.png")}
                    alt=""
                    width="85%"
                    height="240px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </Fade>
            </Col>

            <Col sm={4}>
              <OfferBox offer={offer.payment} color="#097A57" />
            </Col>
            <Col sm={4}>
              <OfferBox offer={offer.attendance} color="#21AC65" />
            </Col>
            <Col sm={4}>
              <OfferBox offer={offer.biometric} color="#34A853" />
            </Col>
            <Col sm={4}>
              <OfferBox offer={offer.location} color="#73BF43" />
            </Col>
            <Col sm={4}>
              <Fade right dalay={200}>
                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                  <img
                    src={require("../assets/offer/offerOne.png")}
                    alt=""
                    height="100%"
                    width="50%"
                    style={{ objectFit: "contain", marginRight: "-20px" }}
                  />
                  <img
                    src={require("../assets/offer/offerTwo.png")}
                    alt=""
                    height="100%"
                    width="50%"
                    style={{
                      objectFit: "contain",
                      marginLeft: " -20px",
                    }}
                  />
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <DemoBox />
    </>
  );
};

export const ToggleDiv = ({ data, type }) => {
  return (
    <Row className="g-4">
      <Col
        className={`${
          type === "web" && "order-md-2 order-1"
        }d-flex justify-content-center align-items-center `}
        sm={6}
        style={{ maxHeight: "390px" }}
      >
        <Fade left daly={200}>
          <>
            {type === "mobile" && (
              <>
                <img
                  src={data.images?.one}
                  alt=""
                  height="100%"
                  width="40%"
                  style={{ objectFit: "contain", marginRight: "-20px" }}
                />
                <img
                  src={data.images?.two}
                  alt=""
                  height="100%"
                  width="40%"
                  style={{ objectFit: "contain", marginLeft: "-20px" }}
                />
              </>
            )}
            {type === "web" && (
              <img
                src={data.images}
                alt=""
                height="100%"
                width="100%"
                style={{ objectFit: "contain" }}
              />
            )}
          </>
        </Fade>
      </Col>
      <ColCenter md={6} className={`${type === "web" && "order-md-1 order-2"}`}>
        <div className="ps-md-5">
          <Fade up dalay={100}>
            <Typography
              className="mb-2"
              fontWeight="700"
              fontSize="20px"
              color="#097A57"
            >
              {data.subTitle}
            </Typography>
          </Fade>
          <Fade up delay={150}>
            <Typography>{data.description}</Typography>
          </Fade>
          <Fade up delay={200}>
            <ul className="listMarker">{data.features}</ul>
          </Fade>
        </div>
      </ColCenter>
    </Row>
  );
};

export const OfferBox = ({ offer, color, margin, height }) => (
  <DynamicBackgroundBox
    className="p-4 d-flex justify-content-center "
    background={color}
    marginTop={margin}
    minHeight={height ?? "360px"}
  >
    <div>
      <div className=" d-flex justify-content-center align-items-center">
        {offer.svg("white")}
        <SubTitle className="ms-3">{offer.title}</SubTitle>
      </div>
      <div className="mt-3">
        <Typography color="#fff">{offer.elaborated}</Typography>
        {offer.features && <MarkerUl>{offer.features}</MarkerUl>}
      </div>
    </div>
  </DynamicBackgroundBox>
);
