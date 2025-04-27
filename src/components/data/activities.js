import {
    InstituteWithFlag,
    SolidUser,
    UserWithBoard,
    UserWithHat,
  } from "../../assets/icons";
  
  export const activities = {
    year: {
      id: "1",
      type: "Years of  experience",
      progress: "10",
      icon: <SolidUser />,
    },
    institutions: {
      id: "2",
      type: "Institutions",
      progress: "1500",
      icon: <InstituteWithFlag />,
    },
    students: {
      id: "3",
      type: "Students",
      progress: "1000000",
      icon: <UserWithHat />,
    },
    teacher: {
      id: "4",
      type: "Teachers",
      progress: "100000",
      icon: <UserWithBoard />,
    },
  };
  