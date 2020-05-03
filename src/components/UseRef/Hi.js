import React, { useRef } from "react";

const Hi = () => {
  const renders = useRef(0);
  console.log("it renders:", renders.current++);
  return <>Hi</>;
};
export default Hi;
