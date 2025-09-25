import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { HR } from "flowbite-react";

function Contact() {
  const intial = { firstname: "", lastname: "", email: "", password: "" };
  const [formvalues, setFormValues] = useState(intial);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formvalues, [name]: value });
  };

  

  const handlesubmit = (e) => {
    const check = validate(formvalues);
    setFormErrors(check);
    setIsSubmit(true);
    if (Object.keys(check).length === 0) {
      toast.success("Message Send !", {
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
    window.location.reload(false);
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
    } else if (!regex.test(values.email)) {
      errors.email = "Email not valid formate";
    }

    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formvalues);
    }
  }, [formErrors]);

  return (
    <div className="scroll-mt-28 "  id="us-section">
      <form>
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="pt-2 font-medium clo	">
            Please fill this form in a decent manner
          </p>
          {/* <HR /> */}
        </div>

        <div>
          <h1 className="font-semibold clo text-xl">Full Name</h1>
          <div className="gap-x-6 flex mt-2 ">
            <div className=" border-2 clo pt-1 pl-2 pb-2 w-1/2 h-10">

              <input
                className="outline- w-full "
                type="text"
                name="firstname"
                values={formvalues.firstname}
                onChange={handleChange}
              />


              <p className="text-red-600 pt-3">{formErrors.firstname}</p>
            </div>

            <div className=" border-2 clo pl-2 pt-1 pb-2 w-1/2 h-10">

              <input
                className="outline- w-full"
                type="text"
                name="lastname"
                values={formvalues.lastname}
                onChange={handleChange}
              />

              

              <p className="text-red-600 pt-3 ">{formErrors.lastname}</p>
            </div>
          </div>
          <div className="flex c"></div>
          <h1 className="font-semibold mt-10 clo text-xl">E-mail</h1>
          <div className="mt-2 border-2 clo pl-2 pt-1 pb-2 w-3/4 h-10">
            <label>
              {" "}
              <input
                className="outline- pl-1"
                type="text"
                name="email"
                values={formvalues.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <p className="text-red-600">{formErrors.email}</p>
          <h1 className="font-semibold mt-10 clo text-xl">Message</h1>

          <div className="mt-2 border-2 clo pl-2 pt-1 pb-2 w-3/4 h-40">
            <label>
              {" "}
              <input className="outline- pl-1" type="text" name="email" />
            </label>
          </div>
        </div>

        <div className="flex justify-center ">
          <button
            className="bg-black justify-center items-center w-40 h-11 rounded-md border-2 mt-20 flex text-sm font-roboto w-20 h-9  active:bg-violet-400 focus:outline-none "
            type="button"
            onClick={handlesubmit}
          >
            <p className="font-semibold text-lg text-white ">Submit</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
