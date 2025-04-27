import {
    Coaching,
    College,
    Montessori,
    School,
    University,
  } from "../../assets/icons";
  export const bestSuite = [
    {
      id: 1,
      svg: (color) => <Montessori color={color} />,
      title: "Montessori",
      description:
        "We offer Montessori Educators the perfect solution to save time and money through our Dynamic Academic ERP system.",
      elaborated:
        "We offer Montessori Educators the perfect solution to save time and money through our Dynamic Academic ERP system. With our dynamic academic ERP system it is easy to streamline day-to-day operations promote teamwork & reduce the operating costs of your Montessori. ",
      features: (
        <>
          <li>{"Labels for students"}</li>
          <li>{"Calendar online for schools"}</li>
          <li>{"The ability to customize school profiles"}</li>
          <li>{"Creating custom trackers"}</li>
          <li>{"Students' real-time performance metrics"}</li>
          <li>{"Diet Management"}</li>
          <li>{"Health Tracking"}</li>
        </>
      ),
      color: "#097A57",
    },
    {
      id: 2,
      svg: (color) => <School color={color} />,
      title: "School",
      description:
        "Our Dynamic Academic ERP software provides schools with an all-in-one solution to manage their daily administrative tasks.",
      elaborated:
        "Our Dynamic Academic ERP software provides schools with an all-in-one solution to manage their daily administrative tasks. This solution reduces the time and effort wasted on manual tasks by offering smart features such as quick admission, easy payment options, and daily attendance tracking.",
      features: (
        <>
          <li>{"Generate certificates"}</li>
          <li>{"Detailed information about students"}</li>
          <li>{"Student Admission"}</li>
          <li>{"Dashboards in multiple formats"}</li>
          <li>{"Generate ID cards"}</li>
          <li>{"Batches and courses"}</li>
        </>
      ),
      color: "#21AC65",
    },
    {
      id: 3,
      svg: (color) => <College color={color} />,
      title: "Colleges",
      description:
        "We have a dynamic academic ERP that allows colleges to easily manage students & teachers' information, etc",
      elaborated:
        "We have a dynamic academic ERP that allows colleges to easily manage their multiple campuses through one System. With our Powerful Modules, huge Campuses can automate the teaching, Learning and Management leading to hassle free tracking. It enhances the overall efficiency of the workflow by automating multiple processes at the same time.",
  
      features: (
        <>
          <li>{"Managing Institutions"}</li>
          <li>{"Online Admission"}</li>
          <li>{"Finance management"}</li>
          <li>{"Human Resources Management"}</li>
          <li>{"Gate-pass Management"}</li>
        </>
      ),
      color: "#34A853",
    },
    {
      color: "#73BF43",
      id: 4,
      svg: (color) => <Coaching color={color} />,
      title: "Coaching Centers",
      description:
        "By storing institutional data in a centralized database, our Academic ERP system helps in managing large amounts of data.",
      elaborated:
        "Centralized Institutional database, with Academic Progress tracking through our Quiz Based Exam helps the coaching center to track the performance of the students easily.  Using Dynamic Academic ERP, students can easily manage their online coaching admissions, pay for fees, and get the course started quickly. We also provide facilities to share the learning materials for online reading. One to One Live Class Interaction Facility is also provided.",
    },
    {
      color: "#1CA379",
      id: 5,
      svg: (color) => <University color={color} />,
      title: "University",
      description:
        "All academic and administrative tasks at a university can be automated and streamlined with a dynamic academic ERP system",
      elaborated:
        "Our 10+ years of research in Learning, Teaching and Managing the Academic Institutions, our Academic ERP Solution is ready for Universities of all sizes and Numbers. Management of Large Universities having multiple campuses and courses has never been easier. Exclusive Modules like Placement Management, HRM and CRM are provided on the system. ",
    },
  ];
  