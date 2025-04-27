import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Modal, Navbar, Row } from "react-bootstrap";

import { useForm } from "react-hook-form";
import {
  Button,
  Col,
  CustomLink,
  DropDown,
  DropDownContent,
  DropDownLink,
  ErrorText,
  Line,
  LinkText,
  NavContainer,
  PrimaryText,
  SecondaryText,
  Typography,
} from "../styles/StyledComponent";
import { Logo } from "../assets/Logo";
import { DropDownArrow, IndiaFlag, NepalFlag } from "../assets/icons";
import { AcademicErpSoftware } from "../assets/headSection/AcademicErpSoftware";

export const NavLink = ({
  navTo,
  path,
  setExpanded,
  stickyNav,
  isExpanded,
}) => {
  const isActive = () =>
    path === `${navTo === "/" ? "/" : "/" + navTo.toLowerCase()}`;

  return (
    <>
      <CustomLink
        to={navTo === "/" ? "/" : "/" + navTo.toLowerCase()}
        onClick={() => {
          setExpanded(false);
          if (path !== "/" + navTo) {
            window.scrollTo(0, 0);
          }
        }}
        transform={isActive() ? "scaleX(1)" : "scaleX(0)"}
        color={stickyNav || isExpanded ? "#097A57" : "#fff"}
        bottom={stickyNav ? "-5px" : "-2px"}
      >
        <LinkText color={stickyNav || isExpanded ? "#097A57" : "#fff"}>
          {navTo === "/" ? "home" : navTo.replace(/[^a-zA-Z]/g, " ")}
        </LinkText>
      </CustomLink>
    </>
  );
};

export function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [stickyNav, setSticky] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [country, setCountry] = useState({ id: 1, country: "Nepal", flag: <NepalFlag /> });

  const countryList = [
    { id: 1, country: "Nepal", flag: <NepalFlag /> },
    { id: 2, country: "India", flag: <IndiaFlag /> },
    { id: 3, country: "International", flag: "" },
  ];

  useEffect(() => {
    window.onscroll = function () {
      let navbar = document.getElementById("stickyNavBar");
      let sticky = navbar?.offsetTop;
      addClass(sticky, navbar);
    };
  });

  function addClass(sticky, navbar) {
    if (window.scrollY > 120) {
      navbar.classList.add("stickyNav");
      document.body.style.paddingTop = 75 + "px";
      navbar.style.height = "75px";
      navbar.style.background = "#fff";
      setSticky(true);
    } else {
      navbar.classList.remove("stickyNav");
      document.body.style.paddingTop = "0";
      navbar.style.height = "75px";
      navbar.style.background = "transparent";
      setSticky(false);
    }
  }
  const handleChange = (c) => setCountry(c);

  return (
    <>
      <Navbar
        expanded={expanded}
        expand="lg"
        id="stickyNavBar"
        className="w-100 p-0  py-2"
        style={{ height: "75px", zIndex: "999" }}
      >
        <Container className="">
          <Navbar.Brand
            className="p-0 c-pointer"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          >
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          >
            <Line
              transform={
                expanded === "expanded"
                  ? "translateY(13px) rotate(45deg)"
                  : "translateY(0px) rotate(0deg)"
              }
            />
            <Line opacity={expanded === "expanded" ? "0" : "0.25"} />
            <Line
              transform={
                expanded === "expanded"
                  ? "translateY(-13px) rotate(-45deg)"
                  : "translateY(0px) rotate(0deg)"
              }
            />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end position-relative"
          >
            <NavContainer>
              <NavLink
                stickyNav={stickyNav}
                navTo="/"
                path={location.pathname}
                setExpanded={setExpanded}
                isExpanded={expanded === "expanded"}
              />
              <NavLink
                stickyNav={stickyNav}
                navTo="about"
                path={location.pathname}
                setExpanded={setExpanded}
                isExpanded={expanded === "expanded"}
              />
              {/* <NavLink
                stickyNav={stickyNav}
                navTo="products"
                path={location.pathname}
                setExpanded={setExpanded}
              /> */}
              <NavLink
                stickyNav={stickyNav}
                navTo="modules"
                path={location.pathname}
                setExpanded={setExpanded}
                isExpanded={expanded === "expanded"}
              />
              {/* <NavLink
                stickyNav={stickyNav}
                navTo="Resources"
                path={location.pathname}
                setExpanded={setExpanded}
              /> */}
              <NavLink
                stickyNav={stickyNav}
                navTo="our-client"
                path={location.pathname}
                setExpanded={setExpanded}
                isExpanded={expanded === "expanded"}
              />
              <NavLink
                stickyNav={stickyNav}
                navTo="partner"
                path={location.pathname}
                setExpanded={setExpanded}
                isExpanded={expanded === "expanded"}
              />
              <NavLink
                stickyNav={stickyNav}
                navTo="career"
                path={location.pathname}
                setExpanded={setExpanded}
                isExpanded={expanded === "expanded"}
              />

              <NavLink
                stickyNav={stickyNav}
                navTo="contact-us"
                path={location.pathname}
                setExpanded={setExpanded}
                isExpanded={expanded === "expanded"}
              />

              <Button
                onClick={() => setModalShow(true)}
                border={
                  stickyNav || expanded === "expanded"
                    ? "1px solid #097A57"
                    : "1px solid white"
                }
              >
                <LinkText
                  color={
                    stickyNav || expanded === "expanded" ? "#097A57" : "#fff"
                  }
                >
                  Log in
                </LinkText>
              </Button>

              <DropDown padding="0px">
                <DropDownLink
                  color={
                    stickyNav || expanded === "expanded" ? "#097A57" : "#fff"
                  }
                >
                  {country?.flag}
                  <span className="mx-2">{country?.country}</span>
                  <DropDownArrow
                    color={
                      stickyNav || expanded === "expanded" ? "#097A57" : "#fff"
                    }
                  />
                </DropDownLink>
                <DropDownContent
                  minwidth="120px"
                  style={{ top: "35px", left: "-23px" }}
                >
                  {countryList.map((c) => {
                    if (c.id !== country.id) {
                      return (
                        <DropDownLink
                          onClick={() => handleChange(c)}
                          key={c.id}
                        >
                          {c.flag}
                          <span className="mx-3">{c.country}</span>
                        </DropDownLink>
                      );
                    }
                    return null;
                  })}
                </DropDownContent>
              </DropDown>
            </NavContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

function MyVerticallyCenteredModal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container className="w-100 ">
        <Row>
          <Col
            sm
            className="d-none d-md-flex p-4"
            style={{ background: "#F1F1F1", overFlow: "hidden" }}
          >
            <div>
              <AcademicErpSoftware />

              {/* <img src={erpInstitution} alt="" width="100%" height="100%" /> */}
            </div>
          </Col>
          <Col sm className="p-4">
            <div>
              <div
                className="d-flex justify-content-center align-items-center mb-3"
                style={{ height: "100px" }}
              >
                <Logo />
              </div>

              <PrimaryText color="#047350">Login</PrimaryText>
              <SecondaryText>
                Welcome, please login to your account.
              </SecondaryText>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control input-login"
                    placeholder="Email"
                    aria-describedby="basic-addon1"
                    {...register("email", {
                      required: "Please enter email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                </div>
                {errors?.email && errors?.email?.message && (
                  <ErrorText>{errors?.email?.message}</ErrorText>
                )}

                <div className="input-group  mt-4">
                  <input
                    type="password"
                    className="form-control input-login "
                    placeholder="Password"
                    aria-describedby="basic-addon1"
                    {...register("password", {
                      required: "Please enter password",
                    })}
                  />
                </div>
                {errors?.password && errors?.password?.message && (
                  <ErrorText>{errors?.password?.message}</ErrorText>
                )}
                <div className="d-flex  align-items-center justify-content-between p-1 ">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="round d-flex">
                      <input
                        type="checkbox"
                        id="checkbox"
                        aria-label="Checkbox for following text input"
                        {...register("remeber", {})}
                      />
                      <label for="checkbox"></label>
                      <Typography className="p-0 m-0  ms-4" color="#047350">
                        Remember Me
                      </Typography>
                    </div>
                    <LinkText color="#047350" className="my-4 text-center">
                      Forgot Password ?
                    </LinkText>
                  </div>
                </div>
                <Button type="submit" padding="6px 16px" background="#047350">
                  <p className="m-0 text-white">Login</p>
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
}
