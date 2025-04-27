import { Fade } from "react-reveal";
import { useForm } from "react-hook-form";
import { Header } from "./HeaderSection";
import { Col, Container, Row } from "react-bootstrap";
import {
  Button,
  ContactFomContainer,
  ErrorText,
  Input,
  LinkText,
  TextArea,
  Typography,
} from "../styles/StyledComponent";
import { AcademicErpSoftware } from "../assets/headSection/AcademicErpSoftware";

export const Demo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header
        title="Request a Demo"
        subtitle="We look forward to showing you how dynamic academicerp helps your organization manage data, automate tasks, and go digital with ease and comfort."
        svg={<AcademicErpSoftware />}
      />
      <Container className="mt-4 mb-5">
        <Row className="g-4 m-0 justify-content-center">
          <Col lg={6} className="p-0">
            <ContactFomContainer>
              <Fade up delay={100}>
                <Typography color="#097A57" fontWeight="700" fontSize="20px">
                  Demo Request Form
                </Typography>
              </Fade>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <Row>
                  <Col>
                    <Fade up delay={200}>
                      <Input
                        placeholder="Name"
                        {...register("name", {
                          required: "Please enter name",
                          pattern: {
                            value: /^[A-Z ]+[A-Z]{2,30}$/i,
                            message: "invalid name",
                          },
                        })}
                      />
                    </Fade>

                    {errors?.name && errors?.name?.message && (
                      <ErrorText>{errors?.name?.message}</ErrorText>
                    )}
                  </Col>
                  <Col>
                    <Fade up delay={200}>
                      <Input
                        placeholder="Email"
                        {...register("email", {
                          required: "Please enter email",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email",
                          },
                        })}
                      />
                    </Fade>

                    {errors?.email && errors?.email?.message && (
                      <ErrorText>{errors?.email?.message}</ErrorText>
                    )}
                  </Col>
                </Row>

                <Row className="mt-4">
                  <Col>
                    <Fade up delay={300}>
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
                      />
                    </Fade>

                    {errors?.phoneNumber && errors?.phoneNumber?.message && (
                      <ErrorText>{errors?.phoneNumber?.message}</ErrorText>
                    )}
                  </Col>
                  <Col>
                    <Fade up delay={300}>
                      <Input
                        placeholder="Designation"
                        {...register("designation", {
                          required: "Please enter Designation",
                          pattern: {
                            value: /^[A-Z ]+[A-Z]{2,30}$/i,
                            message: "invalid Charecter",
                          },
                        })}
                      />
                    </Fade>

                    {errors?.designation && errors?.designation?.message && (
                      <ErrorText>{errors?.designation?.message}</ErrorText>
                    )}
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Fade up delay={300}>
                      <Input
                        placeholder="School Phone"
                        {...register("schoolNumber", {
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
                      />
                    </Fade>

                    {errors?.schoolNumber && errors?.schoolNumber?.message && (
                      <ErrorText>{errors?.schoolNumber?.message}</ErrorText>
                    )}
                  </Col>

                  <Col>
                    <Fade up delay={300}>
                      <Input
                        placeholder="School Address"
                        {...register("address", {
                          required: "Please enter Address",
                          pattern: {
                            value: /^[A-Z ]+[A-Z]{2,30}$/i,
                            message: "invalid Charecter",
                          },
                        })}
                      />
                    </Fade>

                    {errors?.address && errors?.address?.message && (
                      <ErrorText>{errors?.address?.message}</ErrorText>
                    )}
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Fade up delay={300}>
                      <Input
                        placeholder="Number Of Students"
                        {...register("students", {
                          required: true,
                        })}
                      />
                    </Fade>
                    {errors?.students && errors?.students?.message && (
                      <ErrorText>{errors?.students?.message}</ErrorText>
                    )}
                  </Col>
                </Row>

                <Fade up delay={350}>
                  <div className="mt-4">
                    <Typography>
                      Are you using any school ERP ( Enterprise Resource
                      Planning) already ?
                    </Typography>
                    <div className="d-flex  align-items-center  p-1 mt-2">
                      <div className="d-flex  align-items-center me-2">
                        <input
                          style={{
                            height: "12px",
                            width: "12px",
                            marginRight: "8px",
                          }}
                          value={true}
                          type="radio"
                          aria-label="Radio for following text input"
                          {...register("alreadyMember", {})}
                        />
                        <p className="p-0 m-0">Yes</p>
                      </div>
                      <div className="d-flex  align-items-center">
                        <input
                          style={{
                            height: "12px",
                            width: "12px",
                            marginRight: "8px",
                          }}
                          value={false}
                          type="radio"
                          aria-label="Radio for following text input"
                          {...register("alreadyMember", {})}
                        />
                        <p className="p-0 m-0">No</p>
                      </div>
                    </div>
                  </div>
                </Fade>
                <Fade up delay={350}>
                  <TextArea
                    className="mt-4"
                    placeholder="Message"
                    {...register("message", {
                      minLength: 3,
                    })}
                    rows="7"
                  />
                </Fade>

                <Fade right delay={100}>
                  <Button
                    background="#097A57"
                    padding=" 5px 22px"
                    className="mt-3"
                  >
                    <LinkText color="#fff">Send A Request</LinkText>
                  </Button>
                </Fade>
              </form>
            </ContactFomContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};
