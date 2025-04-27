import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BoldText, ImageWithGradient } from "../styles/StyledComponent";
import backgroundImg from "../assets/backgroundimage.PNG";
import { activities } from "./data/activities";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";

export const Counter = () => {
  const [students, setStudentsCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [institutionCount, setInstitutionCount] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isVisible, setState] = useState(false);
  const ref = useRef();
  const rootMargin = "0px";

  useEffect(() => {
    let observerRefValue = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setState(entry?.isIntersecting);
          observer?.unobserve(ref?.current);
        }
      },
      {
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [ref, setState, rootMargin]);

  useEffect(() => {
    const student = setInterval(() => {
      if (students !== 1000000 && isVisible) {
        setStudentsCount(students + 25000);
      }
    }, 100);
    const years = setInterval(() => {
      if (yearCount !== 10 && isVisible) {
        setYearCount(yearCount + 1);
      }
    }, 100);
    const teacher = setInterval(() => {
      if (teacherCount !== 100000 && isVisible) {
        setTeacherCount(teacherCount + 5000);
      }
    }, 100);
    const institution = setInterval(() => {
      if (institutionCount !== 1500 && isVisible) {
        setInstitutionCount(institutionCount + 100);
      }
    }, 100);
    return () => {
      clearInterval(student);
      clearInterval(years);
      clearInterval(teacher);
      clearInterval(institution);
    };
  }, [students, yearCount, teacherCount, institutionCount, isVisible]);

  return (
    <ImageWithGradient
      image={backgroundImg}
      id="counterss"
      ref={ref}
      className={`${isHome ? "mt-5" : "mt-0"}`}
    >
      <Container className="py-4">
        <Row className=" g-4 d-flex justify-content-between align-items-center">
          <Col sm className="text-center">
            <Fade up delay={100}>
              <> {activities.year.icon}</>
            </Fade>
            <Fade up delay={150}>
              <BoldText className="mt-3">{yearCount}+</BoldText>
              <BoldText fontweight="700" fontSize="30px">
                {activities.year.type}
              </BoldText>
            </Fade>
          </Col>
          <Col sm className="text-center">
            <Fade up delay={100}>
              <> {activities.institutions.icon}</>
            </Fade>
            <Fade up delay={150}>
              <BoldText className="mt-3">{institutionCount}+</BoldText>
              <BoldText fontweight="700" fontSize="30px">
                {activities.institutions.type}
              </BoldText>
            </Fade>
          </Col>
          <Col sm className="text-center">
            <Fade up delay={100}>
              <>{activities.students.icon}</>
            </Fade>
            <Fade up delay={150}>
              <BoldText className="mt-3">{students}+</BoldText>
              <BoldText fontweight="700" fontSize="30px">
                {activities.students.type}
              </BoldText>
            </Fade>
          </Col>
          <Col sm className="text-center">
            <Fade up delay={100}>
              <>{activities.teacher.icon}</>
            </Fade>
            <Fade up delay={150}>
              <BoldText className="mt-3">{teacherCount}+</BoldText>
              <BoldText fontweight="700" fontSize="30px">
                {activities.teacher.type}
              </BoldText>
            </Fade>
          </Col>
        </Row>
      </Container>
    </ImageWithGradient>
  );
};
