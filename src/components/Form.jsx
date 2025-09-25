import { Link } from "react-router-dom";
import eye from "../assets/eye.png";
import closeeye from "../assets/closeeye.png";
import { useMemo, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const intial = { email: "", password: "" };
  const [formvalues, setFormValues] = useState(intial);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [visible, notVisible] = useState("password");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formvalues, [name]: value });
  };

  const handlesubmit = (e) => {
    const check = validate(formvalues)
    e.preventDefault();
    setFormErrors(check);
    setIsSubmit(true);
    console.log(Object.keys(check))
    if (Object.keys(check).length === 0){
      toast.success('Login succesfully !', {
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
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email not valid formate";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "password must be more then 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "password cannot exceed more then 10 characters";
    }
    
    return errors;
  };
  

  const eyeF = () => {
    if (visible == "password") {
      notVisible("text");
    } else {
      notVisible("password");
    }
  };

  const passeye = useMemo(() => {
    if (visible == "password") {
      return closeeye;
    } else {
      return eye;
    }
  }, [visible]);

  return (
    <form>



      <div className="mt-14 border-2 clo pl-4 pt-1 pb-2 rounded-sm">
        <label>Email:</label>

        <br />
        <input
          className="outline- w-full"
          type="text"
          name="email"
          values={formvalues.email}
          onChange={handleChange}
        />
        <br />
        <p className="text-red-600">{formErrors.email}</p>
      </div>
      <div className="border-t-0 border-2  pl-4 pt-1 pb-2 clo rounded-sm">
        <label>password: </label>

        <br />
        <div className="password w-full">
          <input
            className="outline- text-blue-600 w-full"
            type={visible}
            id="password"
            values={formvalues.password}
            name="password"
            onChange={handleChange}
          />
          <img
            src={passeye}
            onClick={eyeF}
            className="pass-icon"
            id="pass-icon"
            alt="sd"
          ></img>
        </div>
        <p className="text-red-600">{formErrors.password}</p>
      </div>

      <div className="flex mt-5 justify-between">
        <label className="flex  justify-between  text-sm font-roboto w-28 ">
          <input type="checkbox" name="" className=" mb-1" />
          <p className=" clo ">Remember Me</p>
        </label>
        <p className=" clo text-sm font-roboto">Forgot password?</p>
      </div>
      <div className="grr mt-12">
        <button
          className=" text-sm  btncolor font-roboto w-20 h-9 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."
          type="button"
          onClick={handlesubmit}
        >
          Login
        </button>

        <Link to="/sign-up">
          <button
            className=" border-2  text-sm font-roboto w-20 h-9  active:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 ..."
            type="button"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </form>
  );
}
export default Form;
