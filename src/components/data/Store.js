import React, { createContext, useEffect, useState } from "react";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function UserProvider({ children }) {
  const [headerDetails, setHeaderDetails] = useState({});
  // useEffect(() => {
  //   header();
  // }, []);

  // const header = async () => {
  //   let data = await fetch(`https://192.168.1.132:8000/api/heads`, {
  //     mode: "no-cors",
  //   });
  //   setHeaderDetails(data.json());
  // };

  return (
    <UserContext.Provider value={headerDetails}>
      <UserDispatchContext.Provider value={setHeaderDetails}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext };
