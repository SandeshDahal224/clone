import { Header } from "./HeaderSection";
import { Container, Row } from "react-bootstrap";
import { Col, Title } from "../styles/StyledComponent";
import { bestSuite } from "./data/bestSuited";
import { OfferBox } from "./OurOffer";
import { DemoBox } from "./DemoBox";
import { AcademicErpSoftware } from "../assets/headSection/AcademicErpSoftware";
export const BestSuited = () => {
  return (
    <>
      <Header
        title={"Dynamic academic ERP best suited for"}
        subtitle="Our Dynamic Academic ERP software provides schools with an all-in-one solution to manage their daily administrative tasks."
        svg={<AcademicErpSoftware />}
      ></Header>
      <Container className="mt-5">
        <Row className="g-4">
          <Col sm={4}>
            <Title>{"Dynamic academic ERP best suited for"}</Title>
            <div className="d-flex justify-content-center align-items-center w-100 h-75">
              <img
                src={require("../assets/headSection/erpMockup.png")}
                alt=""
                width="85%"
                height="240px"
              />
            </div>
          </Col>
          {bestSuite.map((data) => (
            <Col sm={4}>
              <OfferBox offer={data} color={data.color} height="480px" />
            </Col>
          ))}
        </Row>
      </Container>
      <DemoBox />
    </>
  );
};
