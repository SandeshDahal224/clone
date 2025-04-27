import {
    Attendence,
    Biometric,
    LiveLocation,
    MobilePayment,
  } from "../../assets/icons";
  
  export const offer = {
    title: "What we offer more",
    info: "Dynamic has every feature your institution will ever need and that enhance the capability and functionality of the student management platform.",
    mobile: {
      title: "Dynamic academic ERP on Mobile App",
      forAdmin: {
        title: "Mobile App for Admin",
        subTitle: "Academic ERP made easy learning on mobile devices",
        images: {
          one: require("../../assets/offer/adminOne.png"),
          two: require("../../assets/offer/adminTwo.png"),
        },
        description:
          "Our dynamic academic ERP integrated learning management system interface can help administrators improve education quality and utilize actionable analytics.",
        features: (
          <>
            <li>{"Informative dashboard"}</li>
            <li>{"Fee collection summary(Custom datewise)"}</li>
            <li>{"Attendance summary"}</li>
            <li>{"Finance summary"}</li>
            <li>{"Timetable management"}</li>
            <li>{"Human resource management"}</li>
          </>
        ),
      },
      forStudent: {
        title: "Mobile App for Student",
        subTitle: "Academic ERP made easy learning on mobile devices",
        images: {
          one: require("../../assets/offer/studentOne.png"),
          two: require("../../assets/offer/studentTwo.png"),
        },
        description:
          "Our dynamic academic ERP integrated learning management system interface can help administrators improve education quality and utilize actionable analytics.",
        features: (
          <>
            <li>{"Online class and exam"}</li>
            <li>{"Progress report"}</li>
            <li>{"Results"}</li>
            <li>{"Lesson Notes"}</li>
            <li>{"Recorded Lesson Videos"}</li>
            <li>{"Learning materials"}</li>
            <li>{"Exam routine"}</li>
            <li>{"Online Quizzes"}</li>
          </>
        ),
      },
      forTeacher: {
        title: "Mobile App for Teacher",
        subTitle: "Academic ERP made easy learning on mobile devices",
        images: {
          one: require("../../assets/offer/teacherOne.png"),
          two: require("../../assets/offer/teacherTwo.png"),
        },
        description:
          "Teachers can teach more efficiently with our dynamic academic ERP integrated with a learning management system.",
        features: (
          <>
            <li>{"Mobile-based attendance"}</li>
            <li>{"Student homework management"}</li>
            <li>{"Online lesson"}</li>
            <li>{"Students progress reporting"}</li>
            <li>{"Exam scheduling"}</li>
            <li>{"Question paper management"}</li>
          </>
        ),
      },
      forParents: {
        title: "Mobile App for Parents",
        subTitle: "Academic ERP made easy learning on mobile devices",
        images: {
          one: require("../../assets/offer/adminOne.png"),
          two: require("../../assets/offer/adminTwo.png"),
        },
        description:
          "We offer a dynamic academic management system in which parents can play an active role in the learning process of their children.",
        features: (
          <>
            <li>{"Track Progress students"}</li>
            <li>{"Track student's live location"}</li>
            <li>{"Track student reports"}</li>
            <li>{"Online payment"}</li>
            <li>{"Suggestion and complains"}</li>
          </>
        ),
      },
    },
    web: {
      images: require("../../assets/offer/web.png"),
      title: "Dynamic academic ERP on Web App ",
      subTitle: "Academic ERP made easy learning on web app",
      description:
        "Fast, Secure, and easy-to-learn dashboard to carry out all the processes, manage information, and teaching-learning online.",
      features: (
        <>
          <li>
            {
              "We provide a cloud-based Web Dashboard with reliable, fastest, and most secure servers available today."
            }
          </li>
          <li>
            {
              "Users with little technical experience can utilize in-depth features."
            }
          </li>
          <li>
            {"Advance filtering and user wise pivot table view like excel."}
          </li>
          <li>{"Transaction apporval and rejcetion system."}</li>
          <li>{"Multiple login user interface with dashboard."}</li>
        </>
      ),
    },
    payment: {
      svg: (color) => <MobilePayment color={color} />,
      title: "Online Payments",
      elaborated:
        "With Fee Online you can now collect your fees in a highly secure way and make it your first preference for your Schools, Colleges, and Universities. We provide ready-to-use Payment Gateway Integration through which fees can be collected securely. Notification is sent to the Parents and Students Application once the Fee is Confirmed. ",
    },
    attendance: {
      svg: (color) => <Attendence color={color} />,
      title: "Online Attendance",
      elaborated:
        "The online attendance module automates students' and staff's attendance, enabling them to check-in and out.",
      features: (
        <>
          <li>{"Holidays"}</li>
          <li>{"Leaves "}</li>
          <li>{"Office and break time"}</li>
          <li>{"Leave Requests and Approval"}</li>
          <li>{"Attendance and Absent Report"}</li>
        </>
      ),
    },
    biometric: {
      svg: (color) => <Biometric color={color} />,
      title: "Biometric",
      elaborated:
        "Your institution can collect attendance data from teachers and students using biometric devices to reduce the complexity. You can create unique identification numbers for teachers and students with this technology. ",
    },
    location: {
      svg: (color) => <LiveLocation color={color} />,
      title: "Live Location",
      elaborated:
        "You can see where your vehicle is located at any given time. With this live location interface, you can see information about your route from stop to stop on the way to your final destination. Live Location Notification is Provided to the parents.",
    },
  };
  