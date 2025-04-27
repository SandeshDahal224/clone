import { send, init } from "emailjs-com";

const serviceId = "service_2eiw1gq";
const templateId = "template_ug3koic";
const meetingTemplete = "template_jre02xs";
const userID = "vy4zdjZNS-DSRvFEI";

export const sendEmail = (content, setLoading, setSent) => {
  init(userID);
  setLoading(true);
  setSent(true);

  const toSend = {
    sender: content.email,
    senderName: content.organizationName,
    receiver: "Dynamic Academic ERP",
    subject: content.subject,
    email: "abhishek@mydynamicerp.com",
    message: content.message,
    phoneNumber: content.phoneNumber,
  };
  send(serviceId, templateId, toSend)
    .then((res) => {
      setSent(true);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
    });
};

export const mettingForm = (content, setLoading, setSent) => {
  init(userID);
  setLoading(true);
  setSent(true);

  const toSend = {
    sender: content.email,
    senderName: content.organizationName,
    companyName: content.companyName ?? "",
    designation: content.designation ?? "",
    partner: content.partner ?? "",
    country: content.country ?? "",
    receiver: "Dynamic Academic ERP",
    email: "abhishek@mydynamicerp.com",
    phoneNumber: content.phoneNumber,
  };
  send(serviceId, meetingTemplete, toSend)
    .then((res) => {
      setSent(true);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
    });
};
