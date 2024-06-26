import React from "react";
import { FaGoogle } from "react-icons/fa";
import UseAuth from "../Hooks/useAuth";
import UseAxious from "../Hooks/useAxious";
import { useNavigate } from "react-router-dom";
const SocialLogIn = () => {
  const { googleSignIn } = UseAuth();
  const axios = UseAxious();
  const navigate = useNavigate();
  const handleGoogle = () => {
    googleSignIn().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user.email,
        name: res.user.displayName,
      };
      axios.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <button onClick={handleGoogle} className="btn btn-error">
      <FaGoogle />
      Button
    </button>
  );
};

export default SocialLogIn;
