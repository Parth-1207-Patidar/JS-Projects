import React from "react";
import UseContextA from "./useContextA";

export const User = React.createContext("Arthur Morgan");
export const Guest = React.createContext("John Marston");

const UseContext = () => {
  return (
    <div>
      <h3>
        It simplifies the process of passing down a variable in a heirarchy of
        components{" "}
      </h3>
      <User.Provider value={"Arthur Morgan"}>
        <Guest.Provider value={"John Marston"}>
        <UseContextA />
        </Guest.Provider>
      </User.Provider>
    </div>
  );
};

export default UseContext;
