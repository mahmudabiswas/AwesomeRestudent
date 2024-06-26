import React, { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import UseAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogIn from "../Shared/SocialLogIn";

const Login = () => {
  const { logIn } = UseAuth();
  const chaptChaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    console.log(email, password, captcha);
    logIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          icon: "info",

          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Great!
          `,
          confirmButtonAriaLabel: "Thumbs up, great!",
          cancelButtonText: `
            <i class="fa fa-thumbs-down"></i>
          `,
          cancelButtonAriaLabel: "Thumbs down",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCaptcha = (e) => {
    const user_captcha_value = chaptChaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      alert("Captcha Matched");
      setDisable(false);
    } else {
      alert("Captcha Does Not Match");
      setDisable(true);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleFormSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={chaptChaRef}
                name="captcha"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleCaptcha}
                className="btn btn-active btn-accent"
              >
                Accent
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disable={disable}
                type="submit"
                value="LogIn"
                className="btn btn-primary"
              />
            </div>
            <Link to="/SignUp">new hear ? please Register</Link>
            <SocialLogIn />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
