import React from "react";
import UseContextC from "./useContextC";
import {User, Guest} from "./useContextMain";

const useContextB = () => {
  const username = React.useContext(User);
  return (
    <div>
      useContextB : Another implementation of useContext: {username}
      <UseContextC />
    </div>
  );
};

export default useContextB;
