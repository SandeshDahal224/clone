import { Container } from "react-bootstrap";
import { BoldText, Title } from "../styles/StyledComponent";
import { client } from "./data/client";
import { DemoBox } from "./DemoBox";
import { Header } from "./HeaderSection";

export const OurClient = () => {
  return (
    <>
      <Header
        title={client.title}
        subtitle={client.info}
        image={client.headerImage}
      ></Header>
      <Container className="mt-3">
        <Title>Our Client</Title>
        <div
          className="d-flex flex-wrap py-4 justify-content-center justify-content-sm-start justify-content-xl-betwwen"
          style={{ gap: "2.5rem" }}
        >
          {client.clients.map((client, i) => (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "#ECEEED",
              }}
            >
              <img
                src={require("../assets/clients/client" + i + ".png")}
                alt=""
                width="60%"
                height="60%"
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: "#ECEEED",
            }}
          >
            <BoldText fontweight="700" fontSize="30px" color="#097A57">
              1500+
            </BoldText>
          </div>
        </div>
      </Container>
      <DemoBox />
    </>
  );
};
