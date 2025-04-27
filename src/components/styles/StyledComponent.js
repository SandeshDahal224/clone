import { Nav, Col as Cols } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

export const HeaderBackground = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  top: 0;
  z-index: -1;
  position: absolute;
  justify-content: end;
  @media (max-width: 768px) {
    background: linear-gradient(313.08deg, #097a57 -22.39%, #73bf43 112.07%);
  }
  @media (max-width: 1024px) {
    min-height: ${(props) => props.minHeight ?? "50%"};
    height: 75vh;
  }
`;

export const TitleText = styled.h3`
  font-weight: 600;
  font-size: 40px;
  color: ${(props) => props.color ?? "#097A57"};
  line-height: 45px;
  cursor: default;
`;

export const SecondaryText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 0px;
  color: ${(props) => props.color ?? "#097A57"};
  cursor: default;
`;

export const PrimaryText = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  color: ${(props) => props.color ?? "#097A57"};
  line-height: 28px;
  cursor: default;
`;

export const LinkText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-transform: ${(props) => props.textTransform ?? "capitalize"};
  margin: 0px;
  cursor: pointer;
  color: ${(props) => props.color ?? "#fff"};
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const CustomLink = styled(NavLink)`
  text-decoration: none;
  height: 35px;
  display: flex;
  // justify-content: center;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    width: 100%;
    background-color: ${(props) => props.color ?? "#fff"};
    border-radius: 4px;
    height: 3px;
    position: absolute;
    bottom: ${(props) => props.bottom ?? "10px"};
    left: 0;
    transform: ${(props) => props.transform ?? "scaleX(0)"};
    transform-origin: left;
    transition: transform 0.25s ease;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  &:hover {
    ${LinkText} {
      color: ${(props) => props.color ?? "#fff"};
    }
  }
`;

export const Button = styled.button`
  border: ${(props) => props.border ?? "none"};
  box-sizing: border-box;
  border-radius: 8px;
  background: ${(props) => props.background ?? "transparent"};
  padding: ${(props) => props.padding ?? "0px 12px"};
  color: ${(props) => props.color ?? "white"};
`;

export const Line = styled.span`
  display: block;
  width: 30px;
  height: 3px;
  background: black;
  margin-block: 10px;
  border-radius: 4px;
  transition: transform 0.25s;
  opacity: ${(props) => props.opacity ?? "0.25"};
  transform: ${(props) => props.transform ?? "translateY(0px) rotate(0deg)"};
`;

export const NavContainer = styled(Nav).attrs(() => ({
  className: "justify-content-between",
}))`
  width: 79%;
  @media (max-width: 1172px) {
    width: 89%;
  }
  @media (max-width: 992px) {
    position: absolute;
    top: 7px;
    background: #f1f1f1;
    z-index: 2;
    width: 100%;
    padding: 16px;
    border-radius: 0px 0px 8px 8px;
  }
`;

export const ErrorText = styled.p`
  font-size: 11px;
  margin: 0px;
  color: red;
  cursor: default;
`;

export const GradientBackground = styled.div`
  min-width: 100vw;
  // @media (max-width: 768px) {

  //   background: linear-gradient(313.08deg, #097a57 -22.39%, #73bf43 112.07%);
  // }
`;

export const ImageWithGradient = styled.div.attrs(() => ({
  className: "d-flex justify-content-between align-items-center",
}))`
  background-image: ${(props) =>
    props.image
      ? `linear-gradient(94.62deg,rgba(9, 122, 87, 0.89) 0%,rgba(115, 191, 67, 0.89) 102.72%),url(${props.image})`
      : "linear-gradient(94.62deg,rgba(9, 122, 87, 0.89) 0%,rgba(115, 191, 67, 0.89) 102.72%)"};
  width: 100%;
  background-repeat: no-repeat;
  min-height: 300px;
`;

export const BoldText = styled.h1`
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? "800"};
  font-size: ${(props) => props.fontSize ?? "40px"};
  color: ${(props) => props.color ?? "#ffffff"};
  cursor: default;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 2.5rem;
  letter-spacing: ${(props) => props.letterSpacing ?? "0px"};
  color: ${(props) => props.color ?? "#097a57"};
  cursor: default;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    letter-spacing: 0px;
  }
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media (max-width: 576px) {
    font-size: 1.6rem;
    letter-spacing: 0px;
  }
`;
export const SubTitle = styled.h3`
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? "500"};
  font-size: 30px;
  color: ${(props) => props.color ?? "#fff"};
  margin: 0;
  line-height: 30px;
  cursor: default;
`;

export const Typography = styled.p`
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? "400"};
  font-size: ${(props) => props.fontSize ?? "16px"};
  text-align: ${(props) => props.textAlign ?? "start"};
  color: ${(props) => props.color ?? "#000000"};
  margin: 0px;
  cursor: default;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const EllipseTypo = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.lineClamp ?? "3"};
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? "400"};
  font-size: ${(props) => props.fontSize ?? "16px"};
  text-align: ${(props) => props.textAlign ?? "left"};
  color: ${(props) => props.color ?? "#000000"};
  margin: 0px;
  cursor: default;
`;
const scale = keyframes`
   0% {
       transform: scale(1.0);
           
        }
   100% {
           transform: scale(2.0);
            
        }
`;

export const BlinkAnimation = styled.div`
  width: 2px;
  height: 2px;
  background: linear-gradient(180deg, #38cc9e 0%, #cdffad 100%);
  border-radius: 50%;
  position: absolute;
  display: none;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  z-index: 5;
  animation: ${scale} 1s ease-out infinite;
`;

export const Col = styled(Cols)`
  min-width: ${(props) => props.minwidth ?? "320px"};
  @media (max-width: 1024px) {
    min-width: ${(props) => props.minwidth ?? "320px"};
  }
  @media (max-width: 568px) {
    min-width: ${(props) =>
      props.minwidth === "495px" ? "320px" : props.minwidth ?? "320px"};
  }
  &:hover {
    ${BlinkAnimation} {
      display: block;
    }
  }
`;

export const ModuleBox = styled.div`
  overflow: hidden;
  border-radius: 0px 50px;
  background: ${(props) =>
    props.background
      ? "linear-gradient(138.53deg,rgb(9, 122, 87) 0%,rgb(115, 191, 67) 101.5%)"
      : " #eceeed"};
  position: relative;
  color: #000;
  min-height: ${(props) => props.minHeight};
  &:before {
    content: "";
    position: absolute;
    background: ${(props) => (props.background ? "#097a57" : "#eceeed")};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    top: 0px;
    width: 100%;
    height: 70px;
  }

  ${SubTitle} {
    color: ${(props) => (props.background ? "#fff" : "#097A57")};
  }
  ${EllipseTypo} {
    color: ${(props) => (props.background ? "#fff" : "#000")};
  }
  ${Typography} {
    color: ${(props) => (props.background ? "#fff" : "#097A57")};
  }
`;

export const OfferContainer = styled.div.attrs(() => ({
  className: "d-flex justify-content-center align-items-center flex-column",
}))`
  background: ${(props) =>
    props.background
      ? "linear-gradient(131.58deg, #097a57 -1.47%, #73bf43 97.29%)"
      : "#ECEEED"};
  box-shadow: ${(props) =>
    props.boxShadow ?? "0px 4px 4px rgba(0, 0, 0, 0.25)"};
  min-height: 212px;
  ${SubTitle} {
    color: ${(props) => (props.background ? "#fff" : "#097A57")};
  }
`;

export const ColCenter = styled(Col).attrs(() => ({
  className: "d-flex align-items-center flex-column",
}))`
  justify-content: center;
  minwidth: ${(props) => props.minWidth ?? ""};
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  top: 40px;
  left: -40px;
  background-color: #f1f1f1;
  min-width: ${(props) => props.minWidth ?? "160px"};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  z-index: 1;
  overflow: hidden;
`;

export const DropDown = styled.div`
  display: inline-block;
  position: relative;
  padding: ${(props) => props.padding ?? "16px 0px;"};
  &:after {
    content: "";
    width: 100%;
    background-color: #004c74;
    border-radius: 4px;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const DropDownLink = styled.p`
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-size: 18px;
  color: ${(props) => props.color ?? "black"};
  display: flex;
  padding: 12px 0px;
  margin: 0px;
  height: 35px;
  cursor: pointer;
  font-weight: 450;
`;

export const MarkerUl = styled.ul`
  padding-left: ${(props) => props.paddingLeft ?? "1rem"};
  margin-top: 12px;
  color: ${(props) => props.color ?? "#fff"};
`;

export const DynamicBackgroundBox = styled.div`
  background: ${(props) => props.background ?? "rgb(33, 172, 101)"};
  border-radius: 0px 40px;
  min-height: ${(props) => props.minHeight ?? "380px"};
  margin-top: ${(props) => props.marginTop ?? "0px"};
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const ModuleContainer = styled.div.attrs(() => ({
  className: "d-flex justify-content-center align-items-center ",
}))`
  height: 100%;
`;

export const ContactFomContainer = styled.div`
  width:${(props) => props.width ?? "100%"};
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
  border-radius: 23px;
  background: rgb(249, 249, 249);
  justify-content: ${(props) => props.justifyContent ?? "initial"};
  align-items:${(props) => props.alignItems ?? "initial"}
  box-sizing: border-box;
  padding: 2rem;
  z-index: 10;
  height:${(props) => props.height ?? "auto"}
`;

export const Input = styled.input`
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 8px 16px;
  width: ${(props) => props.width ?? "100%"};
`;

export const TextArea = styled.textarea`
  border-radius: 12px;
  border: 1px solid #000000;
  padding: 8px 16px;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  resize: none;
`;

export const InfoBox = styled.div`
  background: #f6f6f6;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.borderRadius ?? "20px"};
  display: flex;
  justify-content: ${(props) => props.justifyContent ?? "center"};
  align-items: ${(props) => props.justifyContent ?? "center"};
  flex-direction: column;
  padding: ${(props) => props.padding ?? "16px"};
  min-height: 230px;
`;

export const Span = styled.span`
  font-weight: ${(props) => props.fontWeight ?? "400"};
  font-size: ${(props) => props.fontSize ?? "16px"};
  text-align: ${(props) => props.textAlign ?? ""};
  color: ${(props) => props.color ?? "#000000"};
`;

export const AnimatedBox = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  transform: ${(props) => props.transform};
  @media (max-width: 645px) {
    display: ${(props) => props.display ?? "block"};
  }
`;

const rotate = keyframes`
   0% {
    transform: translate(0,0);
  }
  33% {
    transform: translate(-75px, -150px)  ;
  }
  66% {
    transform: translate(75px, -150px);
  }
  100% {
    transform: translate(0,0);
  }
`;
const circle = keyframes`
  0% {
    transform: rotate(0deg) translate(-105px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translate(-105px) rotate(-360deg);
  }
`;

export const AnimatedCircle = styled.div`
  width: 15px;
  height: 15px;
  background: linear-gradient(180deg, #38cc9e 0%, #cdffad 100%);
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.top ?? "20%"};
  left: ${(props) => props.left ?? "20%"};
  bottom: ${(props) => props.left ?? "unset"};
  right: ${(props) => props.right ?? "unset"};
  animation: ${rotate} 20s infinite linear;
  z-index: -1;
`;

export const BorderCircle = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  z-index: ${(props) => props.zIndex ?? "-1"};
  animation: ${circle} 22s linear infinite;
`;

export const Box360 = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent ?? "center"};
  align-items: center;
  width: ${(props) => props.width ?? "100%"};
  position: ${(props) => props.position ?? "static"};
  margin-bottom: ${(props) => props.marginBottom ?? "0px"};
  bottom: ${(props) => props.bottom ?? "unset"};
  top: ${(props) => props.top ?? "unset"};
  @media (max-width: 480px) {
    width: ${(props) =>
      props.width === "91%" || !props.width ? "100%" : "70%"};
    top: ${(props) => (props.top === "-100px" ? "-25px" : "unset")};
    bottom: ${(props) => (props.bottom ? "55px" : "unset")};
  }
`;

export const ClearText = styled.span`
  color: ${(props) => props.color ?? "#0082C6"};
  font-weight: ${(props) => props.fontWeight ?? "500"};
  display: inherit;
  &::first-letter {
    font-size: 18px;
    font-weight: 600;
  }
`;

//
export const CamerIconWrapper = styled.div`
  display: flex;
  width: 105px;
  height: 105px;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  overflow: hidden;
`;

export const InputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const Label = styled.label`
  display: flex;
  cursor: pointer;
  background: transparent;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 44px;
  position: relative;
`;
export const UploadIcon = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  background: rgb(0, 153, 255);
  align-items: center;
  border-radius: 5px;
  height: 41px;
  position: absolute;
  right: -3px;
  top: -0.5px;
`;
export const UploadContainer = styled.div`
  width: 85%;
  height: 39px;
  color: rgb(214, 217, 219);
  line-height: 39px;
  text-align: left;
  padding-left: 10px;
`;
