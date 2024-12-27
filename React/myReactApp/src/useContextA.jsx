import React from "react";
import UseContextB from "./useContextB";

const useContextA = () => {
  return (
    <div>
      useContextA
      <UseContextB />
    </div>
  );
};

export default useContextA;
