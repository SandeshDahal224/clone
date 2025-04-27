import { Header } from "../HeaderSection";
import headerImage from "../../assets/headSection/career.svg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { career } from "../data/career";
import { Container } from "react-bootstrap";
import {
  Button,
  LinkText,
  MarkerUl,
  Title,
  Typography,
} from "../../styles/StyledComponent";
import { ApplyForm } from "./ApplyForm";

export const CareerDetail = () => {
  const { position } = useParams();
  const navigateTo = useNavigate();
  const [vacancy, setVacancy] = useState();
  const location = useLocation();
  useEffect(() => {
    if (position) {
      setVacancy(
        career.filter((v) => v.position === position.replace(/-/g, " "))
      );
    }
  }, [position]);
  console.log(location.pathname.includes("apply"));

  return (
    <>
      <Header
        title="Senior Quality Assurance Engineer"
        image={headerImage}
        career={vacancy}
      ></Header>
      {vacancy &&
        (location.pathname.includes("apply") ? (
          <ApplyForm />
        ) : (
          <VacancyDetail
            vacancy={vacancy}
            navigateTo={navigateTo}
            position={position}
          />
        ))}
    </>
  );
};

const VacancyDetail = ({ vacancy, navigateTo, position }) => (
  <Container className="mt-4">
    <Title>Job Description</Title>
    {vacancy[0]?.jobDescription.map((str) => (
      <MarkerUl color="#097A57" className="m-0">
        <li>
          <Typography>{str}</Typography>
        </li>
      </MarkerUl>
    ))}
    <Title className="mt-4">Job requirements</Title>
    {vacancy[0]?.jobRequirements.map((str) => (
      <MarkerUl color="#097A57" className="m-0">
        <li>
          <Typography>{str}</Typography>
        </li>
      </MarkerUl>
    ))}
    <Button
      background="#097A57"
      padding="5px 12px"
      className="mt-4"
      onClick={() => {
        navigateTo(`/career/${position}/apply`);
      }}
    >
      <LinkText color="#fff">Apply</LinkText>
    </Button>
  </Container>
);
