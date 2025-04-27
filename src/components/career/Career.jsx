import { Header } from "../HeaderSection";
import headerImage from "../../assets/headSection/career.svg";
import { Container, Row } from "react-bootstrap";
import {
  BlinkAnimation,
  Button,
  Col,
  LinkText,
  ModuleBox,
  SubTitle,
  Title,
  Typography,
} from "../../styles/StyledComponent";
import { career } from "../data/career";
import { Fade } from "react-reveal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Career = () => {
  const [moduleBackground, setModuleBackground] = useState("1");
  const navigateTo = useNavigate();
  return (
    <>
      <Header
        title="Career"
        subtitle={
          <>
            {'"We are Hiring !!!"'}
            <br />
            {
              "Join the Most Dynamic Team at Dynamic Technosoft and experience the best working and self developing culture. Work with the best minds in the town. "
            }
          </>
        }
        image={headerImage}
      ></Header>
      <Container className="mt-4">
        <Title>{"Our mission is to be a role model in academic ERP."}</Title>

        <Row className="g-3 d-flex justify-content-between align-items-center mt-4">
          {career.map((vacancy, i) => (
            <Col
              sm={4}
              minwidth="300px"
              onMouseEnter={() => setModuleBackground(vacancy.id)}
              className="position-relative"
            >
              {moduleBackground === vacancy.id && (
                <>
                  <BlinkAnimation top="5%" left="20%" />
                  <BlinkAnimation top="5%" left="80%" />
                  <BlinkAnimation top="48%" left="10%" />
                  <BlinkAnimation top="69%" left="80%" />
                  <BlinkAnimation top="90%" left="20%" />
                </>
              )}
              <Fade top delay={i * 50}>
                <ModuleBox
                  background={moduleBackground === vacancy.id}
                  minHeight="340px"
                >
                  <div
                    className="p-3   d-flex justify-content-center align-items-center"
                    style={{ zIndex: "2", height: "70px" }}
                  >
                    <SubTitle style={{ zIndex: "2" }}>
                      {vacancy.position}
                    </SubTitle>
                  </div>
                  <div className="p-4">
                    <Typography fontSize="20px" fontWeight="500">
                      Dynamic Academic ERP
                    </Typography>
                    <Typography className="mt-2">
                      Number of Vacancy : {vacancy.numberOfVacancy}
                    </Typography>
                    <Typography className="mt-2">
                      Location : {vacancy.location}
                    </Typography>
                    <Typography className="mt-2">
                      Application Deadline : {vacancy.applicationDeadline}
                    </Typography>
                    <Button
                      background="#fff"
                      padding="4px 12px"
                      className="mt-4"
                      onClick={() => {
                        navigateTo(
                          `/career/${vacancy.position.replace(/ /g, "-")}`
                        );
                        window.scrollTo(0, 0);
                      }}
                    >
                      <LinkText color="#097A57">View Details</LinkText>
                    </Button>
                  </div>
                </ModuleBox>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
