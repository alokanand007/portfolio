import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const intial = { firstname: "", lastname: "", email: "", password: "" };
  const [formvalues, setFormValues] = useState(intial);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formvalues, [name]: value });
    console.log(formvalues);
  };
  const handlesubmit = (e) => {
    const check = validate(formvalues)
    e.preventDefault();
    setFormErrors(check);
    setIsSubmit(true);
    console.log(Object.keys(check))
    if (Object.keys(check).length === 0){
      toast.success('Sign-up succesfully !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (!values.firstname) {
      errors.firstname = "Firstname is required";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    else if (!regex.test(values.email)) {
      errors.email = "Email not valid formate";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    else if (values.password.length < 4) {
      errors.password = "password must be more then 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "password cannot exceed more then 10 characters";
    }

    return errors;
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formvalues);
    }
  },[formErrors]);

  return (
    <div>
      <form>
        <div className="gap-x-6 flex  ">
          <div className="mt-8 border-2 clo pl-4 pt-1 pb-2 w-1/2 rounded-sm">
            <label> First Name: </label>

            <br />
            <input
              className="outline-"
              type="text"
              name="firstname"
              values={formvalues.firstname}
              onChange={handleChange}
            />
            <br />
            <p className="text-red-600">{formErrors.firstname}</p>
          </div>

          <div className="mt-8 border-2 clo pl-4 pt-1 pb-2 w-1/2 rounded-sm">
            <label> Last Name: </label>

            <br />
            <input
              className="outline-"
              type="text"
              name="lastname"
              values={formvalues.lastname}
              onChange={handleChange}
            />
            <br />
            <p className="text-red-600">{formErrors.lastname}</p>
          </div>
        </div>

        <div>
          <div className="mt-4 border-2 clo pl-4 pt-1 pb-2 rounded-sm">
            <label> Enter your Email: </label>

            <br />
            <input
              className="outline-"
              type="text"
              name="email"
              values={formvalues.email}
              onChange={handleChange}
            />
            <br />
            <p className="text-red-600">{formErrors.email}</p>
          </div>

          <div className="border-t-0 border-2  pl-4 pt-1 pb-2 clo rounded-sm">
            <label> Enter your password: </label>

            <br />
            <input
              className="outline- text-blue-600 "
              type="text"
              name="password"
              values={formvalues.password}
              onChange={handleChange}
            />
            <p className="text-red-600">{formErrors.password}</p>
          </div>
        </div>

        <div className="grr mt-12">
          <button
            className=" text-sm  btncolor font-roboto w-20 h-9 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."
            type="button"
            onClick={handlesubmit}
          >
            Sign up
          </button>
          <Link to="/">
            <button
              className=" border-2  text-sm font-roboto w-20 h-9  active:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 ..."
              type="button"
            >
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
