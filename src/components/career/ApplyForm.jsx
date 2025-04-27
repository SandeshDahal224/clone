import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Fade } from "react-reveal";
import {
  Button,
  CamerIconWrapper,
  ErrorText,
  Input,
  InputFile,
  Label,
  LinkText,
  TextArea,
  Title,
  Typography,
} from "../../styles/StyledComponent";

export const ApplyForm = () => {
  const [file, setFile] = useState();
  const [imageBlob, setImageBlob] = useState();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    let timer = setTimeout(() => {
      setLoading(false);
      reset();
      setFile(null);
      setImageBlob(null);
    }, 10 * 100);
    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container className="mt-5">
          <Row>
            <Col sm={5}>
              <Title>Your basic information</Title>
              <Typography className="mb-4">Tell us about yourself</Typography>
            </Col>
            <Col sm={7}>
              <div>
                <Fade up delay={200}>
                  <Input
                    placeholder="Name*"
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
              </div>
              <div className="mt-4">
                <Fade up delay={300}>
                  <Input
                    placeholder="Phone Number*"
                    {...register("phoneNumber", {
                      required: "please enter a number",
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
              </div>
              <div className="mt-4">
                <Fade up delay={200}>
                  <Input
                    placeholder="Email*"
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
              </div>

              <div className="mt-4">
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "30px",
                  }}
                >
                  {imageBlob ? (
                    <CamerIconWrapper>
                      <img
                        src={imageBlob}
                        width="100%"
                        height="100%"
                        alt=""
                        style={{ objectFit: "cover" }}
                      />
                    </CamerIconWrapper>
                  ) : (
                    <></>
                  )}
                </div>

                <InputFile
                  type="file"
                  id="image"
                  accept="image/x-png,image/jpg,image/jpeg"
                  {...register("image")}
                  onChange={(e) => {
                    let img = e.target?.files;
                    if (img) {
                      const url = URL.createObjectURL(img[0]);
                      setImageBlob(url);
                    }
                  }}
                />

                <Label htmlFor="image">
                  <div
                    style={{
                      border: "1px solid #000",
                      padding: "5px 16px",
                      borderRadius: "8px",
                      marginRight: "20px",
                    }}
                  >
                    {imageBlob ? "Update Photo" : "Add your photo"}
                  </div>
                  <Typography color="#000">
                    We accept PNG, JPG, and JPEG files
                  </Typography>
                </Label>
              </div>
            </Col>
          </Row>
          <hr className="my-5" />
          <Row className="mt-4">
            <Col sm={5}>
              <Title>Flaunt your experience </Title>
              <Typography className="mb-4">
                Upload your CV or resume file
              </Typography>
            </Col>
            <Col sm={7}>
              <div>
                <InputFile
                  type="file"
                  id="file"
                  accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/x-png,image/jpg,image/jpeg"
                  {...register("resume", {
                    required: "please add CV",
                  })}
                  onChange={(e) => {
                    let img = e.target?.files;
                    if (img) {
                      setFile(img[0]);
                    }
                  }}
                />

                <Label htmlFor="file">
                  <div
                    style={{
                      border: "1px solid #000",
                      padding: "5px 16px",
                      borderRadius: "8px",
                      marginRight: "20px",
                    }}
                  >
                    {file ? "Update CV" : "Add your CV*"}
                  </div>
                  <Typography color="#000">
                    {file && file?.name
                      ? file.name
                      : " We accept PDF, DOC, DOCX, PNG, JPG, and JPEG files"}
                  </Typography>
                </Label>
              </div>
              {errors?.file && errors?.file?.message && (
                <ErrorText>{errors?.file?.message}</ErrorText>
              )}
            </Col>
          </Row>
          <hr className="my-5" />
          <Row>
            <Col sm={5}>
              <Title>Let's hear more about your strength.</Title>
              <Typography className="mb-4">Submit your cover letter</Typography>
            </Col>
            <Col sm={7}>
              <Fade up delay={350}>
                <TextArea
                  placeholder="cover letter"
                  {...register("coverLetter", {
                    minLength: 3,
                  })}
                  rows="7"
                />
              </Fade>
            </Col>
          </Row>
          <div className="mt-4 d-flex justify-content-end">
            <Button
              background="#097A57"
              padding="5px 12px"
              onClick={() => {}}
              type="submit"
              className="d-flex justify-content-center"
              style={{ minWidth: "120px" }}
            >
              {loading ? (
                <div className="loading">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <LinkText color="#fff">Submit application</LinkText>
              )}
            </Button>
          </div>
        </Container>
      </form>
    </>
  );
};
