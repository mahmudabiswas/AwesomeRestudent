import React from "react";
import { useNavigate } from "react-router-dom";

const Secret = () => {
  const navigate = useNavigate();

  navigate("/");
  return <div>this is secret page</div>;
};

export default Secret;
