import { Header } from "./HeaderSection";
import { Container, Row } from "react-bootstrap";
import {
  AnimatedCircle,
  BorderCircle,
  Col,
  DynamicBackgroundBox,
  MarkerUl,
  SubTitle,
  Title,
  Typography,
} from "../styles/StyledComponent";
import { DemoBox } from "./DemoBox";
import { Circle } from "../assets/icon/AnimatedIcon";
import { AcademicErpSoftware } from "../assets/headSection/AcademicErpSoftware";

const ErpFeatures = [
  {
    id: "10",
    image: require("../assets/headSection/erpMockup.png"),
    onlyImage: true,
  },
  {
    id: "1",
    icon: require("../assets/icon/feeManagement.png"),
    feature: "Automated fees management",
    description:
      "Automates fee collection facilitates transactions and provides in-depth financial reports. From Fee Setup to Fee Collection and Notification for Paid and Unpaid Fees, all can be managed through Dynamic Academic ERP. We provide Online Fee Payment most safely and conveniently with instant notification for confirmation.",
    point: (
      <>
        <li>{"Safe and secured online payment"}</li>
        <li>{"Realtime confirmation  message"}</li>
        <li>{"Globally accepted payment gateway integrated"}</li>
      </>
    ),
    color: " #097A57",
  },
  {
    id: "2",
    icon: require("../assets/icon/timelines.png"),
    feature: "Automated timelines management",
    description:
      "Exclusive custom Calendar setup as per your requirement and plans. We also provide a system to manage class hours for Students and Teachers. Time Table Generation, Time Table for Online Class, Exam Scheduling calls can be managed through Dynamic Academic ERP.",
    point: (
      <>
        <li>{"Custom Calendar"}</li>
        <li>
          {
            "Timetable management for exams, classes, breaks and holidays, sports, etc"
          }
        </li>
      </>
    ),
    color: "#21AC65",
  },
  {
    id: "0",
    imageOne: require("../assets/other/mobilemock.png"),
    onlyImage: true,
  },
  {
    id: "3",
    icon: require("../assets/icon/courses.png"),
    feature: "Automated Interactive Courses",
    description:
      "With their favorite teaching resources, educators can deliver completely dynamic, unique, informative, and effective learning Materials that include audio, video, images, text, PowerPoint displays, and other media. Educators can make updates to all courses in just a few clicks, which immediately alerts students.",
    point: (
      <>
        <li>{"Interactive video classes"}</li>
        <li>{"Pdf, images, and video sharing"}</li>
        <li>{"Interactive online classes"}</li>
      </>
    ),
    color: "#34A853",
  },
  {
    id: "4",
    icon: require("../assets/icon/admission.png"),
    feature: "Automated admissions",
    description:
      "Auto-admissions in Academic ERP lets schools and colleges easily register a huge number of students based on predefined rules. Students are automatically accepted in courses once they meet the eligibility requirements. As a result, hand-written course assignment is reduced. Also, errors in coursework are reduced.",
    point: (
      <>
        <li>{"Custom design admission forms"}</li>
        <li>{"Automated filtering based on eligibility criteria"}</li>
        <li>{"Online payment for admission procedure"}</li>
      </>
    ),
    color: "#73BF43",
  },
  {
    id: "5",
    icon: require("../assets/icon/examManagement.png"),
    feature: "Automated exams management",
    description:
      "Exam Setup, Time Table Management, Seat Planning, and Instant Notification to the Apps provided. Online Exam with Proctoring and On-Screen Marking can be managed through our ERP Solution.",
    point: (
      <>
        <li>{"Exam time management"}</li>
        <li>{"Seat management"}</li>
        <li>{"Automate results generation for MCQs"}</li>
        <li>{"OSM(On-screen Marking) for essay-based questions"}</li>
      </>
    ),
    color: "#437B1F",
  },
  {
    id: "6",
    icon: require("../assets/icon/videoLessons.png"),
    feature: "Automated recorded video lessons",
    description:
      "The teaching lectures can be recorded by instructors and made available to students. The students have access to the recorded lectures and are alerted each time the lectures are updated.",
    point: (
      <>
        <li>{"Live classes"}</li>
        <li>{"Recorded lesson"}</li>
        <li>{"Online webinar"}</li>
      </>
    ),
    color: "#1CA379",
  },
  {
    id: "7",
    icon: require("../assets/icon/comminication.png"),
    feature: "Automated communication process",
    description:
      "The academic ERP does not only offer one-directional communication. The system allows teachers and learners to discuss relevant information with each other. The Parents, Students, Teachers, and Admin Management, all are connected with Mobile applications.",
    point: (
      <>
        <li>{"Increased parents participation"}</li>
        <li>{"Realtime messaging snd notification"}</li>
      </>
    ),
    color: "#5A9D2F",
  },
];

export const ErpSoftware = () => {
  return (
    <>
      <Header
        title={
          <>
            Automate school
            <br /> management through <br /> academic ERP software
          </>
        }
        subtitle={
          "Developed to simplify the administrative and technological demands of educational institutions, our academic ERP software is one of the most reliable School Management Systems. Your conventional academic experience can become digital in just a few clicks."
        }
        svg={<AcademicErpSoftware />}
      ></Header>
      <Container className="mt-4 position-relative">
        <AnimatedCircle top="40%" />
        <BorderCircle top="60%" left="30%" className=" d-none d-md-block">
          <Circle></Circle>
        </BorderCircle>
        <Title className="mb-4">{"Features of academic ERP "}</Title>
        <Row className="g-4">
          {ErpFeatures.map((fes, i) => (
            <Col minwidth="344px">
              {fes.onlyImage ? (
                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                  {fes.imageOne ? (
                    <img
                      src={fes.imageOne}
                      alt=""
                      height="100%"
                      width="85%"
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    <img
                      src={fes.image}
                      alt=""
                      width="90%"
                      style={{ objectFit: "contain" }}
                    />
                  )}
                </div>
              ) : (
                <DynamicBackgroundBox
                  className="p-3"
                  background={fes.color}
                  minHeight="100%"
                >
                  <div className=" d-flex justify-content-center align-items-center">
                    <img
                      className="me-3"
                      src={fes.icon}
                      alt=""
                      width="60px"
                      height="60px"
                      style={{ objectFit: "contain" }}
                    ></img>
                    <SubTitle>{fes.feature}</SubTitle>
                  </div>
                  <div className="mt-3">
                    <Typography color="#fff">{fes.description}</Typography>
                    <MarkerUl>{fes.point}</MarkerUl>
                  </div>
                </DynamicBackgroundBox>
              )}
            </Col>
          ))}
        </Row>
      </Container>
      <DemoBox />
    </>
  );
};
