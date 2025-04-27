import {
    useContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
  } from "react";
  import { Col, Container, Row } from "react-bootstrap";
  import { useForm } from "react-hook-form";
  import { Fade } from "react-reveal";
  import { useLocation, useNavigate } from "react-router-dom";
  import { AcademicErpSoftware } from "../assets/headSection/AcademicErpSoftware";
  import { Box3D, Circle, DotIcon } from "../assets/icon/AnimatedIcon";
  import triangleImage from "../assets/icon/triangle3d.png";
  import {
    Button,
    LinkText,
    SecondaryText,
    GradientBackground,
    Title,
    Input,
    ErrorText,
    SubTitle,
    AnimatedBox,
    AnimatedCircle,
    Typography,
  } from "../styles/StyledComponent";
  import { UserContext } from "./data/Store";
  import { mettingForm } from "./helper/EmailSender";
  import ProgressiveImg from "./helper/ImageLoader";
  
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  
  export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useLayoutEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }
  
  export const Header = ({
    title,
    image,
    subtitle,
    svg,
    form,
    elRef,
    defaultValue,
    setSent,
    career,
  }) => {
    const [formData, setFormData] = useState({ country: "", partner: "" });
    const partnerRef = useRef(null);
    const contryRef = useRef(null);
    // const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const { width } = useWindowDimensions();
    const location = useLocation();
    const navigateTo = useNavigate();
    const isDemo = location.pathname === "/request-a-demo";
    const isContactUs = location.pathname === "/contact-us";
    const isFull = location.pathname === "/" || location.pathname === "/about";
    const isCareer = location.pathname === "/career";
  
    // const headerDetails = useContext(UserContext);
    // const isModules =
    //   location.pathname === "/modules" ||
    //   location.pathname === "/dynamic-academic-erp-modules";
    // useEffect(() => {
    //   console.log(headerDetails);
    //   if (headerDetails?.length) {
    //     console.log(data);
    //     const homeHeaderDetails = headerDetails?.find(({ path }) => path === "/");
    //     setData(homeHeaderDetails);
    //   }
    // }, [headerDetails]);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      const { partner, country } = formData;
      mettingForm({ ...data, partner, country }, setLoading, setSent);
    };
  
    const program = [
      { id: 1, name: "Silver Partner" },
      { id: 2, name: "Gold Partner" },
      { id: 3, name: "Platinum Partner" },
    ];
  
    const country = [
      { id: 1, country: "Nepal" },
      { id: 2, country: "Bangladesh" },
      { id: 3, country: "Srilanka" },
    ];
  
    const animation = width >= 768;
  
    return (
      // data && (
      <GradientBackground className="position-relative">
        <Animation />
        <Container className="d-flex pb-4 headerSection">
          <Row className="m-0 g-4 g-md-0 d-flex justify-content-between align-items-center  w-100 mt-2">
            <Col md={6} lg={5} className="p-0 order-md-1 order-2 ">
              <Fade up delay={100}>
                <Title
                  letterSpacing="-1px"
                  className="whiteColor"
                  // dangerouslySetInnerHTML={{ __html: data?.title ?? "" }}
                >
                  {title}
                </Title>
              </Fade>
              <Fade up delay={200}>
                {subtitle && (
                  <SecondaryText
                  // dangerouslySetInnerHTML={{ __html: data?.desc ?? "" }}
                  >
                    {subtitle}
                  </SecondaryText>
                )}
              </Fade>
              {career && (
                <>
                  <div className="py-2">
                    <Typography className="mt-2">
                      Job Category : {career[0]?.jobCategory}
                    </Typography>
                    <Typography className="mt-2">
                      Organization : {career[0]?.organization}
                    </Typography>
                    <Typography className="mt-2">
                      Job Type : {career[0]?.jobType}
                    </Typography>
                    <Typography className="mt-2">
                      Location : {career[0]?.location}
                    </Typography>
                    <Typography className="mt-2">
                      Number of Vacancy : {career[0]?.numberOfVacancy}
                    </Typography>
                    <Typography className="mt-2">
                      Application Deadline : {career[0]?.applicationDeadline}
                    </Typography>
                  </div>
                </>
              )}
  
              {!isDemo && !isCareer && !career && (
                <div className="d-flex flex-wrap">
                  <Fade up delay={300}>
                    <Button
                      border="1.5px solid #097A57"
                      background="#097A57"
                      padding="4px 8px"
                      className="mt-4 me-4"
                      onClick={() => {
                        navigateTo("/request-a-demo");
                        window.scrollTo(0, 0);
                      }}
                    >
                      <LinkText color="#fff">Request a demo</LinkText>
                    </Button>
                  </Fade>
                  {!isContactUs && (
                    <Fade up delay={300}>
                      <Button
                        border="1.5px solid #097A57"
                        padding="4px 8px"
                        className="mt-4"
                        onClick={() => {
                          navigateTo("/contact-us");
                          window.scrollTo(0, 0);
                        }}
                      >
                        <LinkText color="#097A57">Contact Us</LinkText>
                      </Button>
                    </Fade>
                  )}
                </div>
              )}
            </Col>
            <Col
              md={6}
              className=" order-md-2 order-1 d-flex justify-content-md-end justify-content-center align-items-center"
              // style={{ minHeight: "420px" }}
            >
              <div className="centerReveal">
                <Fade right={animation} delay={100}>
                  <>
                    {svg && (
                      <div
                        style={{
                          maxWidth: "450px",
                          minWidth: "290px",
                        }}
                      >
                        <AcademicErpSoftware />
                      </div>
                    )}
                    {image && (
                      <div
                        style={{
                          maxWidth: isFull ? "95%" : "90%",
                          minWidth: "290px",
                        }}
                      >
                        <ProgressiveImg
                          src={image ?? ""}
                          placeholderSrc=""
                          width="100%"
                          height="100%"
                        />
                      </div>
                    )}
                    {form && (
                      <div
                        ref={elRef}
                        style={{
                          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                          background: "#fff",
                          borderRadius: "4px",
                          maxWidth: "600px",
                        }}
                        className="p-lg-5 px-4 py-4 "
                      >
                        <SubTitle color="#097A57" className="mb-4">
                          Contact us now to schedule a meeting!
                        </SubTitle>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="mb-4">
                            <Input
                              placeholder="Name"
                              {...register("name", {
                                required: "Please enter name",
                                pattern: {
                                  value: /^[A-Z ]+[A-Z]{2,30}$/i,
                                  message: "invalid name",
                                },
                              })}
                              width="100%"
                            />
                            {errors?.name && errors?.name?.message && (
                              <ErrorText>{errors?.name?.message}</ErrorText>
                            )}
                          </div>
                          <div className="mb-4">
                            <Input
                              placeholder="Email"
                              {...register("email", {
                                required: "Please enter email",
                                pattern: {
                                  value:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Please enter a valid email",
                                },
                              })}
                              width="100%"
                            />
                            {errors?.email && errors?.email?.message && (
                              <ErrorText>{errors?.email?.message}</ErrorText>
                            )}
                          </div>
  
                          <div className="mb-4">
                            <Input
                              placeholder="Phone Number"
                              {...register("phoneNumber", {
                                required: "Please Enter A Number",
                                maxLength: {
                                  value: 16,
                                  message: "Please enter valid number",
                                },
                                minLength: {
                                  value: 7,
                                  message: "Please enter valid number",
                                },
                              })}
                              width="100%"
                            />
                            {errors?.phoneNumber &&
                              errors?.phoneNumber?.message && (
                                <ErrorText>
                                  {errors?.phoneNumber?.message}
                                </ErrorText>
                              )}
                          </div>
                          <div className="mb-4">
                            <Input
                              placeholder="Company Name"
                              {...register("companyName", {
                                required: "Please enter a company name",
                                pattern: {
                                  value: /^[A-Z ]+[A-Z]{2,30}$/i,
                                  message: "invalid name",
                                },
                              })}
                              width="100%"
                            />
                            {errors?.companyName &&
                              errors?.companyName?.message && (
                                <ErrorText>
                                  {errors?.companyName?.message}
                                </ErrorText>
                              )}
                          </div>
                          <div className="mb-4">
                            <Input
                              placeholder="Designation"
                              {...register("designation", {
                                required: "Please enter your  designation",
                                pattern: {
                                  value: /^[A-Z ]+[A-Z]{2,30}$/i,
                                  message: "invalid name",
                                },
                              })}
                              width="100%"
                            />
                            {errors?.designation &&
                              errors?.designation?.message && (
                                <ErrorText>
                                  {errors?.designation?.message}
                                </ErrorText>
                              )}
                          </div>
  
                          <CustomSelect
                            optionsList={program}
                            defaultValue={defaultValue}
                            setFormData={setFormData}
                            formData={formData}
                            partnerRef={partnerRef}
                          />
                          <CustomSelect
                            optionsList={country}
                            type="country"
                            setFormData={setFormData}
                            formData={formData}
                            countryRef={contryRef}
                          />
  
                          <Button
                            background="#097A57"
                            padding="5px 22px"
                            className="mt-3 d-flex justify-content-center align-items-center"
                            style={{ minWidth: "150px" }}
                          >
                            {loading ? (
                              <div className="loading">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                              </div>
                            ) : (
                              <LinkText color="#fff">Schedule a Meeting</LinkText>
                            )}
                          </Button>
                        </form>
                      </div>
                    )}
                  </>
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>
      </GradientBackground>
    );
    // );
  };
  
  const CustomSelect = ({
    optionsList,
    defaultValue,
    type,
    setFormData,
    formData,
  }) => {
    const { ref, isComponentVisible, setIsComponentVisible } =
      useComponentVisible(false);
    const [state, setState] = useState({
      defaultSelectText:
        type === "country" ? "Select A Country" : "Select Partner Program",
      showOptionList: false,
      optionsList: [],
    });
  
    const handleOptionClick = (e) => {
      setState({
        defaultSelectText: e.target.getAttribute("data-name"),
        showOptionList: false,
      });
      setIsComponentVisible(false);
      if (type === "country") {
        setFormData({ ...formData, country: e.target.getAttribute("data-name") });
      } else {
        setFormData({
          ...formData,
          partner: e.target.getAttribute("data-name"),
        });
      }
    };
  
    const { defaultSelectText } = state;
  
    return (
      <div className="custom-select-container mb-4" ref={ref}>
        <div
          className={
            isComponentVisible ? "selected-text active" : "selected-text"
          }
          onClick={() => setIsComponentVisible(true)}
        >
          {defaultValue ?? defaultSelectText}
        </div>
        {isComponentVisible && (
          <ul className="select-options">
            {optionsList.map((option) => {
              return (
                <li
                  className="custom-select-option"
                  data-name={option.name ?? option.country}
                  key={option.id}
                  onClick={(e) => handleOptionClick(e)}
                >
                  {option.name ?? option.country}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };
  
  export const Animation = () => {
    let container = useRef(null);
    let target = useRef(null);
  
    useEffect(() => {
      if (container?.current?.offsetHeight && target?.current?.offsetHeight) {
        floatHead();
      }
    });
  
    function makeNewPosition() {
      let containerVspace =
          container.current?.offsetHeight - target.current?.offsetHeight,
        containerHspace =
          container.current?.offsetWidth - target.current?.offsetWidth,
        newX = Math.floor(Math.random() * containerVspace),
        newY = Math.floor(Math.random() * containerHspace);
      return [newX, newY];
    }
  
    function velocity(prev, next) {
      let x = Math.abs(prev[1] - next[1]),
        y = Math.abs(prev[0] - next[0]),
        larger = x > y ? x : y,
        speedModifier = 0.02,
        speed = Math.ceil(larger / speedModifier);
      return speed;
    }
  
    function floatHead() {
      let newPos = makeNewPosition(),
        oldTop = target.current?.offsetTop,
        oldLeft = target.current?.offsetLeft;
      if (target.current) {
        target.current.animate(
          [
            { top: oldTop + "px", left: oldLeft + "px" },
            { top: newPos[0] + "px", left: newPos[1] + "px" },
          ],
          {
            duration: velocity([oldTop, oldLeft], newPos),
            fill: "forwards",
          }
        ).onfinish = function () {
          floatHead();
        };
      }
    }
  
    return (
      <>
        <div id="containera" ref={container}>
          <img
            ref={target}
            src={triangleImage}
            id="target"
            alt=""
            height="50px"
            width="50px"
          ></img>
        </div>
  
        <div className="main d-none d-md-block">
          <div className="circle"></div>
        </div>
        <div className="borderCircle d-none d-md-block">
          <Circle></Circle>
        </div>
        <AnimatedBox left="50%" transform="rotate(45deg)" display="none">
          <Box3D />
        </AnimatedBox>
        <AnimatedBox left="80%" transform="rotate(180deg)" display="none">
          <Box3D size="30px" />
        </AnimatedBox>
        <AnimatedBox left="90%" bottom="10%" display="none">
          <Box3D size="20px" />
        </AnimatedBox>
        <AnimatedBox left="40%" bottom="10%" className="dBox" display="block">
          <Box3D size="50px" />
        </AnimatedBox>
        <AnimatedBox top="10%" right="5%" id="target">
          <DotIcon />
        </AnimatedBox>
        <AnimatedCircle />
      </>
    );
  };
  
  function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] =
      useState(initialIsVisible);
    const ref = useRef(null);
  
    const handleHideDropdown = (event) => {
      if (event.key === "Escape") {
        setIsComponentVisible(false);
      }
    };
  
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsComponentVisible(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("keydown", handleHideDropdown, true);
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("keydown", handleHideDropdown, true);
        document.removeEventListener("click", handleClickOutside, true);
      };
    });
  
    return { ref, isComponentVisible, setIsComponentVisible };
  }
  