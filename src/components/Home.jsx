import { Header, useWindowDimensions } from "./HeaderSection";
import mockup from "../assets/headSection/erpMockup.png";
import instutionSVG from "../assets/homePage/institutionManagement.svg";
import { Counter } from "./ActivitiesCounter";
import {
  AnimatedBox,
  AnimatedCircle,
  BlinkAnimation,
  BorderCircle,
  Button,
  Col,
  ColCenter,
  EllipseTypo,
  LinkText,
  ModuleBox,
  OfferContainer,
  SubTitle,
  Title,
  Typography,
} from "../styles/StyledComponent";
import { Container, Row } from "react-bootstrap";
import { modules } from "./data/modules";
import {
  AppStore,
  Arrow,
  Attendence,
  Biometric,
  BulbWithSetting,
  Chart,
  CheckedTodo,
  Clock,
  LiveLocation,
  MobilePayment,
  PlayStore,
  ReportCard,
  Secure,
} from "../assets/icons";
import { useState } from "react";
import { whyErp } from "./data/whyERP";
import { BestSuites } from "./slider/BestSuited";
import { Testomonials } from "./slider/Testomonial";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";
import { Circle, DotIcon } from "../assets/icon/AnimatedIcon";
import { AcademicErpSoftware } from "../assets/headSection/AcademicErpSoftware";
import YoutubeEmbed from "./helper/YoutubePlay";

export const Home = ({ elRef }) => {
  const navigateTo = useNavigate();
  const [showBackground, setBackground] = useState(1);
  const [offerBoxBackground, setOfferBoxBackground] = useState("payment");
  const { width } = useWindowDimensions();

  const animation = width >= 768;

  return (
    <>
      <Header
        title={
          <>
            {
              "We provide comprehensive academic ERP software & mobile applications for academic institution"
            }
          </>
        }
        subtitle="Dynamic Academic ERP, the most powerful & comprehensive ERP Solution for managing your Academic Institutions smartly. We provide 25+ modules with mobile applications for Admin, Students, Teachers and Parents. We help to automate and manage the entire Institution’s operations, administration & learning needs in a very effective manner. "
        image={mockup}
      />
      <Counter />
      <div
        style={{ background: "rgb(9, 122, 87, 0.04)", position: "relative" }}
      >
        <div className="borderCircle d-none d-md-block">
          <Circle></Circle>
        </div>
        <AnimatedBox bottom="10%" right="60%" id="target" display="none">
          <DotIcon />
        </AnimatedBox>
        <Container>
          <Row className="py-5 gy-4 d-flex justify-content-between align-items-center">
            <Col sm={6}>
              <Fade left={animation} delay={200}>
                <div style={{ maxWidth: "450px", minWidth: "290px" }}>
                  <AcademicErpSoftware />
                </div>

                {/* <img
                  src={academicErpSVG}
                  alt="Automate school management through academic ERP software"
                  width="100%"
                  style={{ maxWidth: "450px", minWidth: "290px" }}
                ></img> */}
              </Fade>
            </Col>

            <Col sm={12} md={5}>
              <Fade up delay={100}>
                <Title>
                  {"Automate school management through academic ERP software"}
                </Title>
              </Fade>
              <Fade up delay={200}>
                <Typography>
                  {
                    "Developed to simplify the administrative and technological demands of educational institutions, our Academic ERP software is one of the most reliable Schools/College Management Systems.Your conventional academic experience can become digital in just a few clicks."
                  }
                </Typography>
              </Fade>
              <Fade up delay={250}>
                <Button
                  background="#097A57"
                  padding="4px 16px"
                  className="mt-4"
                  onClick={() => {
                    navigateTo(
                      "/automate-school-management-through-academic-erp-software"
                    );
                    window.scrollTo(0, 0);
                  }}
                >
                  <LinkText color="#fff">Read More</LinkText>
                </Button>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{
          background: "linear-gradient(94.62deg, #097A57 0%, #73BF43 102.72%)",
          position: "relative",
        }}
      >
        <AnimatedCircle className="d-none d-md-block" />

        <Container>
          <Row className="py-4 gy-4 g-md-0 d-flex justify-content-between align-items-center">
            <Col sm={12} md={6} className="order-md-1 order-2">
              <Fade up delay={100}>
                <Title color="#fff">
                  {"The Best Academic Institution Management Software"}
                </Title>
              </Fade>
              <Fade up delay={200}>
                <Typography color="#fff">
                  {
                    "With the most advanced school management system, you can keep track of your entire school's activities"
                  }
                </Typography>
              </Fade>
              <Fade up delay={250}>
                <Button
                  background="#fff"
                  padding="4px 16px"
                  className="mt-4"
                  onClick={() => {
                    navigateTo("/request-a-demo");
                    window.scrollTo(0, 0);
                  }}
                >
                  <LinkText color="#097A57">Request A Demo</LinkText>
                </Button>
              </Fade>
            </Col>

            <Col
              sm={5}
              className="order-md-2 order-1 d-flex justify-content-end align-items-center"
            >
              <Fade right={animation} delay={200}>
                <img
                  src={instutionSVG}
                  alt="The Best Academic Institution Management Software"
                  width="100%"
                  style={{ minWidth: "290px", height: "300px" }}
                ></img>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      {/* modules */}
      <div
        style={{ background: "rgb(9, 122, 87, 0.04)", position: "relative" }}
      >
        <BorderCircle top="10%" className="d-none d-md-block">
          <Circle></Circle>
        </BorderCircle>
        <Container className="py-5">
          <Row className="gy-md-4 gy-4 d-flex justify-content-between align-items-center">
            <Col xl={5} md={6}>
              <Fade up delay={100}>
                <Title>{modules.title}</Title>
              </Fade>
              <Fade up delay={200}>
                <Typography>{modules.info}</Typography>
              </Fade>
            </Col>
            {modules.solutions.slice(0, 5).map((solution, i) => (
              <ModulesContainer
                key={i}
                solution={solution}
                showBackground={showBackground}
                setBackground={setBackground}
                i={i}
              />
            ))}
          </Row>
          <Button
            background="#097A57"
            padding="4px 12px"
            className="mt-4 ms-auto d-flex"
            onClick={() => {
              navigateTo("/dynamic-academic-erp-modules");
              window.scrollTo(0, 0);
            }}
          >
            <LinkText color="#fff">View All</LinkText>
          </Button>
        </Container>
      </div>
      {/* why ERP */}
      <div
        style={{
          background:
            "linear-gradient(131.58deg, #097A57 -1.47%, #73BF43 97.29%)",
          position: "relative",
        }}
        className="mt-5 pb-5"
      >
        <BorderCircle top="50%" left="45%" zIndex="0">
          <Circle></Circle>
        </BorderCircle>
        <Container>
          <Row className="gy-5 d-flex justify-content-between align-items-center">
            <Col sm={6}>
              <Fade up delay={100}>
                <Title color="#fff">{whyErp.title}</Title>
              </Fade>
              <Fade up delay={200}>
                <Typography color="#fff">{whyErp.info}</Typography>
              </Fade>
            </Col>
            <WhyErp
              icon={<Chart />}
              type="Highly Scalable"
              description="Can be used for institutions of all sizes and numbers"
            />
            <WhyErp
              icon={<Clock />}
              type="Amazing Support"
              description="Exclusive 24*7 Support Team"
            />
            <WhyErp
              icon={<Secure />}
              type="Secure"
              description=" Data Server Backed by Microsoft "
            />
            <WhyErp
              icon={<ReportCard />}
              type="Diverse Reporting"
              description="Multiple Reports in tabular and Graphical Forms"
            />
            <WhyErp
              icon={<BulbWithSetting />}
              type="One stop solution for academic needs"
              description="You can manage all aspects of your institution’s daily activities"
            />
            <WhyErp
              icon={<CheckedTodo />}
              type="Tried and Tested Solution"
              description="Trusted by 1500+ Institutions"
            />
          </Row>
          <Button
            background="#fff"
            padding="4px 12px"
            className="mt-4 ms-auto d-flex"
            onClick={() => {
              navigateTo("/why-dynamic-academic-erp-for-your-nstitution");
              window.scrollTo(0, 0);
            }}
          >
            <LinkText color="#097A57">Explore More</LinkText>
          </Button>
        </Container>
      </div>
      <div
        style={{
          background: "rgb(9, 122, 87, 0.04)",
        }}
        className="pt-5 pb-4"
      >
        <Fade up delay={100}>
          <Title className="text-center">{"What we offer more"}</Title>
        </Fade>
        <Container className="mt-4">
          <Row className="gy-4 d-flex justify-content-md-between justify-content-center align-items-center">
            <Col sm minwidth="320px" style={{ maxWidth: "354px" }}>
              <Fade left delay={200}>
                <OfferContainer
                  onMouseEnter={() => setOfferBoxBackground("payment")}
                  background={offerBoxBackground === "payment"}
                >
                  <MobilePayment color={offerBoxBackground === "payment"} />
                  <SubTitle className="mt-3" fontWeight="700" color="#097A57">
                    {"Online Payment"}
                  </SubTitle>
                </OfferContainer>
              </Fade>
            </Col>
            <Col sm minwidth="320px" style={{ maxWidth: "354px" }}>
              <Fade left delay={250}>
                <OfferContainer
                  onMouseEnter={() => setOfferBoxBackground("attendance")}
                  background={offerBoxBackground === "attendance"}
                >
                  <Attendence color={offerBoxBackground === "attendance"} />
                  <SubTitle className="mt-3" fontWeight="700" color="#097A57">
                    {"Online Attendance"}
                  </SubTitle>
                </OfferContainer>
              </Fade>
            </Col>
            <Col sm minwidth="320px" style={{ maxWidth: "354px" }}>
              <Fade left delay={300}>
                <OfferContainer
                  onMouseEnter={() => setOfferBoxBackground("location")}
                  background={offerBoxBackground === "location"}
                >
                  <LiveLocation color={offerBoxBackground === "location"} />
                  <SubTitle className="mt-3" fontWeight="700" color="#097A57">
                    {"Live Location"}
                  </SubTitle>
                </OfferContainer>
              </Fade>
            </Col>
            <Col sm minwidth="320px" style={{ maxWidth: "354px" }}>
              <Fade left delay={350}>
                <OfferContainer
                  onMouseEnter={() => setOfferBoxBackground("biometric")}
                  background={offerBoxBackground === "biometric"}
                >
                  <Biometric color={offerBoxBackground === "biometric"} />
                  <SubTitle className="mt-3" fontWeight="700" color="#097A57">
                    {"Biometric"}
                  </SubTitle>
                </OfferContainer>
              </Fade>
            </Col>
          </Row>
          <Button
            background="#097A57"
            padding="4px 12px"
            className="mt-5 m-auto d-flex"
            onClick={() => {
              navigateTo("/our-offer");
              window.scrollTo(0, 0);
            }}
          >
            <LinkText color="#fff">See All Integration</LinkText>
          </Button>
        </Container>
      </div>
      <Container className="pt-5 pb-4">
        <Fade up delay={100}>
          <Title className="text-center mb-4">
            {"Dynamic academic ERP best suited for"}
          </Title>
        </Fade>
        <BestSuites />
      </Container>
      <Avaibility />
      <div>
        <Container>
          <Title className="text-center mb-4">{"Testomonial"}</Title>
          <Testomonials />
        </Container>
      </div>
      {/* <div style={{ backgroun: "#F6F6F6" }} className="py-5">
        <Container>
          <Title className="text-center mb-4">{"Blog"}</Title>
          <Blogs />
        </Container>
      </div> */}
      <div className="my-5">
        <Container>
          <Fade up delay={100}>
            <Title className="text-center mb-4">{"Dynamic in Video"}</Title>
          </Fade>

          <Row className="gx-md-5 d-flex justify-content-md-start justify-content-center align-items-center">
            <Col sm={4} className="position-relative">
              <div style={{ borderRadius: "12px", overflow: "hidden" }}>
                <YoutubeEmbed embedId="WVbK8KF353I" />
              </div>
              <Typography className="mt-2">
                Our academic ERP platform can hel you develop effective online
              </Typography>
            </Col>
            <Col sm={4} className="position-relative">
              <div style={{ borderRadius: "12px", overflow: "hidden" }}>
                <YoutubeEmbed embedId="mmZtJmJltZI" />
              </div>
              <Typography className="mt-2">
                Our academic ERP platform can hel you develop effective online
              </Typography>
            </Col>
            <Col sm={4} className="position-relative">
              <div style={{ borderRadius: "12px", overflow: "hidden" }}>
                <YoutubeEmbed embedId="9qxKq99M480" />
              </div>
              <Typography className="mt-2">
                Our academic ERP platform can hel you develop effective online
              </Typography>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{
          background:
            "linear-gradient(93.07deg, #097A57 0.33%, #73BF43 103.98%)",
        }}
      >
        <Container className="py-4">
          <Row className="gy-4 justify-content-center align-items-center">
            <Col
              sm={6}
              className="d-flex justify-content-center align-items-center "
              style={{ maxHeight: "390px" }}
            >
              <img
                src={require("../assets/other/mobileErpSmall.png")}
                alt=""
                height="100%"
                width="170px"
                style={{ objectFit: "contain", marginRight: "-10px" }}
              />
              <img
                src={require("../assets/other/mobileErpBig.png")}
                alt=""
                height="100%"
                width="150px"
                style={{ objectFit: "contain", margin: "0px 0px 20px -10px" }}
              />
            </Col>
            <Col sm={6}>
              <Title color="#fff">
                {"Download Our App for Android and iOS"}
              </Title>
              <Typography color="#fff">
                {
                  "The most effective academic ERP solution for  Montessori,schools,Colleges,Coaching Centers and university."
                }
              </Typography>
              <div className="mt-4">
                <Button
                  background="#fff"
                  padding="4px 16px"
                  border="2px solid transparent"
                  className="me-4 mb-3"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/developer?id=Dynamic+Technosoft+Pvt+Ltd",
                      "_blank"
                    )
                  }
                >
                  <LinkText color="#097A57">
                    Playstore <PlayStore />
                  </LinkText>
                </Button>
                <Button
                  background="transparent"
                  padding="4px 16px"
                  border="2px solid #fff"
                  className="mb-3"
                >
                  <LinkText color="#fff">
                    Appstore <AppStore />
                  </LinkText>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export const ModulesContainer = ({
  showBackground,
  setBackground,
  solution,
  i,
}) => {
  const navigateTo = useNavigate();

  return (
    <Col
      style={{
        minHeight: "354px",
        position: "relative",
      }}
      onMouseEnter={() => setBackground(solution.id)}
    >
      {showBackground === solution.id && (
        <>
          <BlinkAnimation top="5%" left="20%" />
          <BlinkAnimation top="5%" left="80%" />
          <BlinkAnimation top="48%" left="10%" />
          <BlinkAnimation top="69%" left="80%" />
          <BlinkAnimation top="90%" left="20%" />
        </>
      )}

      <ModuleBox background={showBackground === solution.id}>
        <Fade left delay={i * 100}>
          <div
            className="py-3  d-flex justify-content-center align-items-center"
            style={{ zIndex: "2", height: "70px" }}
          >
            <SubTitle style={{ zIndex: "2" }}>{solution.type}</SubTitle>
          </div>
          <div className="px-3 pb-3">
            <div className="d-flex justify-content-center py-4">
              {solution?.images?.web && (
                <img
                  src={solution?.images?.web}
                  alt={solution?.type}
                  height="112px"
                  width="182px"
                />
              )}
              {solution?.images?.mobile && (
                <img
                  src={solution?.images?.mobile}
                  alt={solution?.type}
                  height="104px"
                  width="52px"
                />
              )}
              {solution?.image && (
                <img
                  src={solution?.image}
                  alt={solution?.type}
                  height="112px"
                  width="200px"
                />
              )}
            </div>
            <EllipseTypo>
              {solution.preview ?? solution.description}
            </EllipseTypo>
            {
              <Typography
                className="text-center mt-3"
                fontWeight="600"
                color="#097A57"
                onClick={() => navigateTo("/modules")}
                style={{ cursor: "pointer" }}
              >
                {"Read More"}
                <Arrow
                  color={showBackground === solution.id ? "#fff" : "#097A57"}
                />
              </Typography>
            }
          </div>
        </Fade>
      </ModuleBox>
    </Col>
  );
};

export const WhyErp = ({ icon, type, description }) => (
  <Col sm minwidth="315px">
    <Fade left delay={100}>
      <div
        style={{
          background: "#ECEEED",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "0px 50px",
          padding: " 0px 16px",
          height: "294px",
        }}
        className="d-flex justify-content-between align-items-center"
      >
        <div>
          {icon}
          <SubTitle className="m-0 mt-3" color="#097A57">
            {type}
          </SubTitle>
          <EllipseTypo className="m-0 mt-3" lineClamp="2">
            {description}
          </EllipseTypo>
        </div>
      </div>
    </Fade>
  </Col>
);

export const Avaibility = () => {
  const { width } = useWindowDimensions();
  const animation = width >= 768;
  const [show, setShow] = useState("mobile");

  return (
    <div className="pt-4 pb-5 position-relative">
      <BorderCircle top="20%" className="d-none d-md-block">
        <Circle></Circle>
      </BorderCircle>
      <div className="main d-none d-md-block">
        <div className="circle"></div>
      </div>
      <AnimatedBox
        top="60%"
        right="50%"
        id="target"
        className="d-none d-lg-block"
      >
        <DotIcon />
      </AnimatedBox>
      <Fade up delay={100}>
        <Title className="text-center">
          {"Dynamic academic ERP available on"}
        </Title>
      </Fade>

      <Container>
        <div className="mt-3 d-flex justify-content-center align-items-center">
          <Button
            background={show === "mobile" ? "#097A57" : "transparent"}
            padding="5px 16px"
            border="2px solid #097A57"
            className="me-3"
            onClick={() => setShow("mobile")}
          >
            <LinkText color={show === "mobile" ? "#fff" : "#097A57"}>
              Mobile App
            </LinkText>
          </Button>
          <Button
            background={show === "web" ? "#097A57" : "transparent"}
            padding="5px 16px"
            border="2px solid #097A57"
            className="ms-3"
            onClick={() => setShow("web")}
          >
            <LinkText color={show === "web" ? "#fff" : "#097A57"}>
              Web App
            </LinkText>
          </Button>
        </div>

        <Row
          className="mt-2 gy-4 justify-content-between"
          style={{ minHeight: "410px" }}
        >
          <Col
            md={12}
            lg={6}
            className="d-flex justify-content-center align-items-center "
            style={{ maxHeight: "390px" }}
          >
            <Fade left={animation} delay={200}>
              <div className="d-flex justify-content-center align-items-center ">
                {show === "web" ? (
                  <img
                    src={require("../assets/other/webErp.png")}
                    alt=""
                    height="90%"
                    width="90%"
                  />
                ) : (
                  <>
                    <img
                      src={require("../assets/other/mobileErpSmall.png")}
                      alt=""
                      height="100%"
                      width="40%"
                      style={{ objectFit: "contain" }}
                    />
                    <img
                      src={require("../assets/other/mobileErpBig.png")}
                      alt=""
                      height="100%"
                      width="40%"
                      style={{ objectFit: "contain" }}
                    />
                  </>
                )}
              </div>
            </Fade>
          </Col>
          <ColCenter md={12} lg={6}>
            {show === "mobile" ? (
              <div className="ps-xl-5">
                <Fade up dalay={100}>
                  <Typography
                    className="mb-2"
                    fontWeight="700"
                    fontSize="20px"
                    color="#097A57"
                  >
                    {"Academic ERP made easy learning on mobile devices"}
                  </Typography>
                </Fade>
                <Fade up dalay={150}>
                  <Typography>
                    {
                      "Student resources can be downloaded from the app by students"
                    }
                  </Typography>
                </Fade>

                <Fade up delay={200}>
                  <ul className="listMarker">
                    <li>
                      <Typography>
                        {
                          "Easily deliver dynamic learning environments beyond the classroom"
                        }
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        {"Offline access to recorded lectures is feasible."}
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        {
                          "MCQs and descriptive exams are implemented into the course to gauge the student's progress."
                        }
                        \
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        {
                          "Any questions students may have during a course are addressed between instructors and classmates."
                        }
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        {"Track the progress of the course."}
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        {"Separate dashboard as per login access."}
                      </Typography>
                    </li>
                    <li>
                      <Typography>{"Event Calendar management."}</Typography>
                    </li>
                    <li>
                      <Typography>{"Daily attendance record."}</Typography>
                    </li>
                    <li>
                      <Typography>{"Homework & assignment."}</Typography>
                    </li>
                    <li>
                      <Typography>{"GPS live tracker."}</Typography>
                    </li>
                  </ul>
                </Fade>
              </div>
            ) : (
              <div className="ps-md-5">
                <Fade up dalay={100}>
                  <Typography
                    className="mb-2"
                    fontWeight="700"
                    fontSize="20px"
                    color="#097A57"
                  >
                    {"Academic ERP made easy learning on web app"}
                  </Typography>
                </Fade>
                <Fade up dalay={150}>
                  <Typography>
                    {
                      "Fast, Secure, and easy-to-learn dashboard to carry out all the processes, manage information, and teaching-learning online."
                    }
                  </Typography>
                </Fade>
                <Fade up dalay={200}>
                  <ul className="listMarker">
                    <li>
                      <Typography>
                        {
                          "We provide a cloud-based Web Dashboard with reliable, fastest, and most secure servers available today."
                        }
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        {
                          "Users with little technical experience can utilize in-depth features."
                        }
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        {
                          "Advance filtering and user wise pivot table view like excel."
                        }
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        {"Transaction apporval and rejcetion system."}
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        {"Multiple login user interface with dashboard."}
                      </Typography>
                    </li>
                  </ul>
                </Fade>
              </div>
            )}
          </ColCenter>
        </Row>
      </Container>
    </div>
  );
};
