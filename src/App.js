import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/SignUp";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Contact from "./components/ContactUs";
import Home from "./components/Home";

function App() {
  const Router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "ContactUs",
            element: <Contact />,
          },
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "Form",
            element: <Form />,
          },
          {
            path: "SignUp",
            element: <Signup />,
          },
        ],
      },
    ],
    { basename: "/portfolio" }
  );

  return (
    <>
      <RouterProvider router={Router} />;
    </>
  );
}

export default App;
