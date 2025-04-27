import { useEffect, useRef, useState } from "react";
import { Container, Modal, Row } from "react-bootstrap";
import { Arrow, Cancel, Pointer } from "../assets/icons";
import {
  BlinkAnimation,
  Box360,
  Col,
  LinkText,
  MarkerUl,
  ModuleBox,
  OfferContainer,
  SubTitle,
  Title,
  Typography,
  Button,
} from "../styles/StyledComponent";
import { PartNer } from "./data/Partner";
import { Header } from "./HeaderSection";
import crm from "../assets/other/crm.png";
import digital from "../assets/other/digital.png";
import demo from "../assets/other/demo.png";
import product from "../assets/other/product.png";
import lead from "../assets/other/lead.png";
import gold from "../assets/other/gold.png";
import silver from "../assets/other/silver.png";
import platinum from "../assets/other/platinum.png";
import { DemoBox } from "./DemoBox";
import { Fade, Rotate } from "react-reveal";

export const Partner = () => {
  const [sent, setSent] = useState(false);
  const elRef = useRef(null);
  const executeScroll = (partnerType) => {
    elRef?.current?.scrollIntoView({
      behavior: "smooth",
      scrollIntoViewOptions: { block: "top", inline: "top" },
    });
    setDefaultValue(partnerType);
  };
  useEffect(() => {
    if (sent) {
      let timer = setTimeout(() => setSent(false), 30 * 100);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [sent]);

  const [showBackground, setBackground] = useState("(Referral)");
  const [moduleBackground, setModuleBackground] = useState("1");
  const [modalShow, setModalShow] = useState(null);
  const [defaultValue, setDefaultValue] = useState(null);

  return (
    <>
      <Header
        title="Join our partnership program"
        subtitle="Our Dynamic Academic ERP software provides schools with an all-in-one solution to manage their daily administrative tasks."
        form={true}
        elRef={elRef}
        defaultValue={defaultValue}
        setSent={setSent}
        setDefaultValue={setDefaultValue}
      ></Header>
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
            Schedule message sent to mydynamicerp.com team
          </Typography>
        </div>
      )}
      <div
        style={{
          background: "#F6F6F6",
          padding: "3rem 0px",
          marginTop: "3rem",
        }}
      >
        <Container>
          <Fade up delay={100}>
            <Title className="text-center">
              Why Partner With dynamic academicerp
            </Title>
          </Fade>
          <Fade up delay={150}>
            <Typography className="text-center">
              {
                "Any educational institution can benefit from Dynamic Academic ERP With this software, you can manage Academics Accounts, GPS Tracking HR & Payroll, and much more"
              }
            </Typography>
          </Fade>

          <Row className="g-3 d-flex justify-content-between align-items-center mt-4">
            {PartNer.map((solution, i) => (
              <Col
                sm
                minwidth="280px"
                onMouseEnter={() => setModuleBackground(solution.id)}
                className="position-relative"
              >
                {moduleBackground === solution.id && (
                  <>
                    <BlinkAnimation top="5%" left="20%" />
                    <BlinkAnimation top="5%" left="80%" />
                    <BlinkAnimation top="48%" left="10%" />
                    <BlinkAnimation top="69%" left="80%" />
                    <BlinkAnimation top="90%" left="20%" />
                  </>
                )}
                <Fade left delay={i * 50}>
                  <ModuleBox
                    background={moduleBackground === solution.id}
                    minHeight="350px"
                  >
                    <div
                      className="p-3   d-flex justify-content-center align-items-center"
                      style={{ zIndex: "2", height: "70px" }}
                    >
                      <SubTitle style={{ zIndex: "2" }}>
                        {solution.type}
                      </SubTitle>
                    </div>
                    <div className="p-4">
                      <Typography>{solution.description}</Typography>
                    </div>
                  </ModuleBox>
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Container className="py-5">
        <Fade up delay={100}>
          <Title className="text-center">Partner Programs</Title>
        </Fade>
        <Fade up delay={200}>
          <Typography className="text-center">
            {
              "There are three levels in which a company or an individual can associate with us."
            }
          </Typography>
        </Fade>

        <Row className="gx-lg-5 gy-3 d-flex justify-content-between align-items-center mt-4">
          <ReferalProgram
            partner="Silver Partner"
            imagePath={silver}
            type="(Referral)"
            showBackground={showBackground}
            setModalShow={setModalShow}
            setBackground={setBackground}
            executeScroll={executeScroll}
          />
          <ReferalProgram
            partner="Gold Partner"
            imagePath={gold}
            type="(Sales)"
            showBackground={showBackground}
            setModalShow={setModalShow}
            setBackground={setBackground}
            executeScroll={executeScroll}
          />

          <ReferalProgram
            partner="Platinum Partner"
            imagePath={platinum}
            type="(Sales+Supports)"
            showBackground={showBackground}
            setBackground={setBackground}
            setModalShow={setModalShow}
            executeScroll={executeScroll}
          />
        </Row>
      </Container>
      <Container className="py-5">
        <Row className="g-md-5 d-flex  align-items-center justify-content-center">
          <Col
            sm
            minwidth="495px"
            className=" pe-lg-5 d-flex  align-items-center flex-column justify-content-start minCol"
          >
            <Fade up delay={100}>
              <Title className="text-start">Support for You</Title>
            </Fade>

            <Fade up delay={150}>
              <Typography>
                {
                  "On top of providing online and direct support, Dynamic Academic also offers its customers on-demand training services."
                }
              </Typography>
            </Fade>
          </Col>
          <Col
            minwidth="495px"
            sm
            style={{ minHeight: "550px" }}
            className="d-flex  align-items-center justify-content-center"
          >
            <div
              style={{
                border: "2px solid #097A57",
                height: "374px",
                width: "100%",
                maxWidth: "374px",
                borderRadius: "50%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "200px",
                  border: "30px solid #73BF43",
                  borderRadius: "50%",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Rotate bottom left={false}>
                  <Typography
                    className="text-center"
                    fontSize="24px"
                    fontWeight="600"
                  >
                    360°
                    <br />
                    Training
                  </Typography>
                </Rotate>
              </div>

              <Box360
                width="91%"
                position="absolute"
                top="-100px"
                justifyContent="space-between"
              >
                <SupportBox image={crm} text="CRM Tools" left="-42px" />
                <SupportBox
                  image={demo}
                  text="Product Demo Account"
                  right="-125px"
                />
              </Box360>
              <Box360
                justifyContent="space-between"
                width="131%"
                marginBottom="65px"
              >
                <SupportBox
                  image={product}
                  text="Product Pitching "
                  left="-80px"
                />
                <SupportBox
                  image={digital}
                  text="Digital Marketing"
                  right="-85px"
                />
              </Box360>
              <Box360 position="absolute" bottom="-75px">
                <SupportBox image={lead} text="Lead Generation " left="-75px" />
              </Box360>
            </div>
          </Col>
        </Row>
      </Container>
      <DemoBox />

      <PartnerModal
        show={modalShow}
        onHide={() => setModalShow(null)}
        executeScroll={executeScroll}
      ></PartnerModal>
    </>
  );
};

export const SupportBox = ({ image, text, left, right }) => (
  <div className="position-relative d-flex justify-content-center align-items-center">
    <div
      style={{
        position: "absolute",
        right: right ?? "unset",
        bottom: "0px",
        left: left ?? "unset",
      }}
      className="d-none d-sm-block"
    >
      <Typography fontSize="16px">{text}</Typography>
    </div>
    <Rotate bottom left={false}>
      <Pointer />
      <div
        style={{
          background: "#fff",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          zIndex: "2",
          position: "absolute",
          top: "18px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt=""
          height="60px"
          width="60px"
          style={{ objectFit: "contain" }}
        ></img>
      </div>
    </Rotate>
  </div>
);

export const ReferalProgram = ({
  partner,
  imagePath,
  type,
  showBackground,
  setBackground,
  setModalShow,
}) => {
  return (
    <Col sm onMouseEnter={() => setBackground(type)}>
      <Fade left delay={400}>
        <OfferContainer
          className="p-xl-5 p-3"
          background={showBackground === type}
        >
          <img
            src={imagePath}
            alt=""
            height="120px"
            width="120px"
            style={{ borderRadius: "120px" }}
          />
          <SubTitle className="mt-4">{partner}</SubTitle>
          <Typography
            color={showBackground === type ? "#fff" : "#000"}
            className="mt-4"
          >
            {type}
          </Typography>
          <Typography
            onClick={() => {
              setModalShow(type);
            }}
            color={showBackground === type ? "#fff" : "#097A57"}
            className="mt-4"
            style={{ cursor: "pointer" }}
          >
            Read More{" "}
            <Arrow color={showBackground === type ? "#fff" : "#097A57"} />
          </Typography>
        </OfferContainer>
      </Fade>
    </Col>
  );
};

function PartnerModal(props) {
  const { show, executeScroll, onHide } = props;

  return (
    <>
      {show === "(Referral)" && (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{ minWidth: "70vw" }}
        >
          <div
            onClick={() => onHide()}
            style={{ position: "absolute", top: "20px", right: "25px" }}
          >
            <Cancel />
          </div>

          <ReferalContainer
            image={silver}
            type="Silver Partner Responsibilities"
            point={
              <>
                <li>{"Local City Level Client Development "}</li>
                <li>
                  {"Awarness among Academic Institution about Dynamic ERP"}
                </li>
                <li>{"Pre Sales Pitch with Dynamic Team"}</li>
                <li>{"Sales Follow Up"}</li>
                <li>{"Assit Dynamic Team in Deal Closure "}</li>
                <li>{"Payment Follow Up"}</li>
              </>
            }
            executeScroll={executeScroll}
            onHide={onHide}
            partner="Silver Partner"
          />
        </Modal>
      )}

      {show === "(Sales)" && (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{ minWidth: "70vw" }}
        >
          <div
            onClick={() => onHide()}
            style={{ position: "absolute", top: "20px", right: "25px" }}
          >
            <Cancel />
          </div>

          <ReferalContainer
            image={gold}
            type="Gold Partner Responsibilities"
            point={
              <>
                <li>{"Local District Level Client Developement "}</li>
                <li>{"Leads Generation"}</li>
                <li>{"Brand Dynamic ERP in the Region"}</li>
                <li>{"Pre Sales Pitch with Dynamic Team"}</li>
                <li>{"Sales Follow Up"}</li>
                <li>{"Assist Dynamic Team in Deal CLosure "}</li>
                <li>{"Assist in Price Negotiation "}</li>
                <li>{"Payment Follow Up"}</li>
              </>
            }
            onHide={onHide}
            executeScroll={executeScroll}
            partner="Gold Partner"
          />
        </Modal>
      )}
      {show === "(Sales+Supports)" && (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{ minWidth: "70vw" }}
        >
          <div
            onClick={() => onHide()}
            style={{ position: "absolute", top: "20px", right: "25px" }}
          >
            <Cancel />
          </div>

          <ReferalContainer
            image={platinum}
            type="Platinum Partner Responsibilities"
            point={
              <>
                <li>{"Multiple Districts Level Client Developement"}</li>
                <li>{"Dedicated Sales Team in the region"}</li>
                <li>{"Brand Dynamic ERP in the region"}</li>
                <li>
                  {"Brain Strom the best market practices with Dynamic Team"}
                </li>
                <li>{"Lead Generation"}</li>
                <li>{"Pre Sales Pitch (Independent or with Dynamic Team)"}</li>
                <li>{"Visit clients if Support Needed"}</li>
                <li>{"Sales Follow Up"}</li>
                <li>{"Deal Closure"}</li>
                <li>{"Payment Follow Up"}</li>
              </>
            }
            executeScroll={executeScroll}
            onHide={onHide}
            partner="Platninum Partner"
          />
        </Modal>
      )}
    </>
  );
}

const ReferalContainer = ({
  image,
  type,
  point,
  executeScroll,
  onHide,
  partner,
}) => (
  <Container className="w-100 py-5 " style={{ borderRadius: "4px" }}>
    <Row className="g-0 gy-4 ">
      <Col
        lg={5}
        className=" d-flex justify-content-center align-items-center "
      >
        <img src={image} alt="" width="216px" height="216px" />
      </Col>
      <Col lg={7}>
        <SubTitle color="#000" fontWeight="700">
          {type}
        </SubTitle>
        <MarkerUl color="#000" className="mt-4">
          {point}
        </MarkerUl>
        <Button
          background="#097A57"
          padding="4px 12px"
          className="mt-2"
          onClick={() => {
            executeScroll(partner);
            onHide();
          }}
        >
          <LinkText>Request A Demo</LinkText>
        </Button>
      </Col>
    </Row>
  </Container>
);
