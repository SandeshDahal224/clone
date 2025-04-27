import { Header } from "./HeaderSection";
import erpImage from "../assets/headSection/erpModules.png";
import { Container, Row } from "react-bootstrap";
import {
  AnimatedBox,
  AnimatedCircle,
  BorderCircle,
  Col,
  ModuleContainer,
  SubTitle,
  Title,
  Typography,
} from "../styles/StyledComponent";
import { modules } from "./data/modules";
import { WaveLeft, WaveRight } from "../assets/icons";
import { DemoBox } from "./DemoBox";
import { Box3D, Circle, DotIcon } from "../assets/icon/AnimatedIcon";

export const Modules = () => {
  return (
    <>
      <Header
        title={
          <>
            Dynamic
            <br /> Academic ERP Modules
          </>
        }
        subtitle={modules.info}
        image={erpImage}
      ></Header>

      <div className="mt-5 position-relative">
        <Title className="container">
          Our ERP platform is a complete education management solution
        </Title>
        <div className="py-4">
          {modules.solutions
            .sort((a, b) => a.id - b.id)
            .map((sol, i) => (
              <div className="position-relative mt-4">
                {i % 2 === 0 ? (
                  <div
                    className="d-lg-block d-none position-absolute"
                    style={{
                      top: "0px",
                      zIndex: "-1",
                      right: "0px",
                    }}
                  >
                    <WaveRight />
                  </div>
                ) : (
                  <div
                    className="d-lg-block d-none position-absolute"
                    style={{
                      top: "0px",
                      zIndex: "-1",
                      left: "0px",
                    }}
                  >
                    <WaveLeft />
                  </div>
                )}
                <Container>
                  <ManagementSolution sol={sol} i={i} />
                </Container>
              </div>
            ))}
        </div>
        <div className="main d-none d-md-block">
          <div className="circle"></div>
        </div>
        <BorderCircle top="2%" left="40%">
          <Circle></Circle>
        </BorderCircle>
        <AnimatedBox left="50%" transform="rotate(45deg)" display="none">
          <Box3D />
        </AnimatedBox>
        <AnimatedBox left="80%" transform="rotate(180deg)" display="none">
          <Box3D size="30px" />
        </AnimatedBox>
        <AnimatedBox left="90%" top="15%" display="none">
          <Box3D size="20px" />
        </AnimatedBox>
        <AnimatedBox left="40%" bottom="10%" className="dBox">
          <Box3D size="50px" />
        </AnimatedBox>
        <AnimatedBox top="10%" right="40%" id="target" display="none">
          <DotIcon />
        </AnimatedBox>
        <AnimatedBox top="70%" right="40%" id="target" display="none">
          <DotIcon />
        </AnimatedBox>
        <AnimatedCircle />
        <BorderCircle top="30%" left="40%">
          <Circle></Circle>
        </BorderCircle>
        <BorderCircle top="50%" left="40%">
          <Circle></Circle>
        </BorderCircle>
      </div>
      <DemoBox />
    </>
  );
};

export const ManagementSolution = ({ sol, i }) => {
  return (
    <Row
      className="g-4 justify-content-center align-items-center"
      style={{ position: "relative", minHeight: "450px" }}
    >
      <Col
        minwidth="320px"
        sm
        className={`${i % 2 === 0 ? "" : "order-md-2 order-1"}`}
      >
        <Row
          className={`${
            i % 2 === 0
              ? "justify-content-lg-start justify-content-center"
              : "justify-content-lg-end justify-content-center"
          }`}
        >
          <Col sm={9} minwidth="212px">
            <img
              src={sol?.images?.web}
              alt=""
              width="100%"
              style={{ objectFit: "contain", height: "100%" }}
            ></img>
          </Col>

          {sol?.images?.mobile && (
            <Col
              sm={2}
              minwidth="108px"
              className=" d-none d-md-block mobileImage"
            >
              <img
                src={sol?.images?.mobile}
                alt=""
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </Col>
          )}
        </Row>
      </Col>
      <Col
        sm
        className={`${
          i % 2 === 0 ? "" : "order-md-1 order-2"
        } d-flex justify-content-center align-items-center`}
      >
        <ModuleContainer className={`${i % 2 === 0 && "ps-xl-5 ps-0"} `}>
          <div>
            <SubTitle color="#097A57" fontWeight="700">
              {sol.type}
            </SubTitle>
            <Typography className="mt-2">{sol.description}</Typography>
            <div className="mt-2">
              <Typography fontWeight="600" fontSize="16px" color="#097A57">
                {sol.keyFeatures?.title}
              </Typography>
              <ul className="listMarker mt-0">{sol.keyFeatures?.features}</ul>
            </div>
          </div>
        </ModuleContainer>
      </Col>
    </Row>
  );
};
