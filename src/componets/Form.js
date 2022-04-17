import React, { useState } from "react";
import Footer from "./Footer";
import "./Form.css";
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    remark: "",
    landmark: "",
    service: "",
    message:""
  });

  const submitForm = (e) => {
    console.log(state);
    e.preventDefault();
    const allData = {
      name: state.name,
      email: state.email,
      number: state.number,
      address: state.address,
      remark: state.remark,
      landmark: state.landmark,
      service: state.service,
      message:state.message
    };
    axios.post("https://backendclean.herokuapp.com/user-send-message", allData);
    if (state) {
      setState({
        name: "",
        email: "",
        number: "",
        address: "",
        remark: "",
        landmark: "",
        service: "",
        message:""
      });
      toast.success("Book Successfully!",{
        position: "bottom-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme:'colored',
      });
    }
  };
  let name, value;
  const handalChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setState({ ...state, [name]: value });
  };
  return (
    <>
      <Header />
      <Navbar />
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 pt-2 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Book Service
            </h1>
          </div>
          <form method="post" onSubmit={submitForm}>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      FULL NAME
                    </label>
                    <input
                      value={state.name}
                      onChange={handalChange}
                      type="text"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      SELECT SERVICE
                    </label>
                    <select
                      onChange={handalChange}
                      name="service"
                      value={state.service}
                      defaultValue={"DEFAULT"}
                      style={{ height: "42px" }}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="DEFAULT" >
                        Select Service...
                      </option>
                      <option>1 BHK Hall Rs.200</option>
                      <option>1 BHK Bedroom </option>
                      <option>Bedroom & Hall</option>
                      <option>1 BHK Room</option>
                      <option>2 BHK Room</option>
                      <option>Home Shifting</option>
                      <option>Office Shifting</option>
                      <option>House-Keeping Contract</option>
                      <option>Office Boy Contract</option>
                      <option>Security Guard Contract</option>
                      <option>Gym Trainer</option>
                      <option>Driver Contract</option>
                      <option>All Car Cleaning</option>
                      <option>Car Interior Cleaning</option>
                      <option>Diesel Cleaning</option>
                      <option>Other Contract</option>
                      <option>Other Cleaning</option>
                      <option>Chendelier Repairing</option>
                      <option>Chendelier Fitting</option>
                      <option>Chendelier Cleaning</option>
                      <option>Chendelier Other</option>
                    </select>
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      MOBILE NO
                    </label>
                    <input
                      value={state.number}
                      value={state.message}
                      type="number"
                      onChange={handalChange}
                      name="number"
                      name="message"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      ADDRESS
                    </label>
                    <textarea
                      onChange={handalChange}
                      name="address" value={state.address}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      LANE MARK
                    </label>
                    <input
                      value={state.landmark}
                      type="text"
                      onChange={handalChange}
                      name="landmark"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      EMAIL ID
                    </label>
                    <input
                      value={state.email}
                      type="email"
                      onChange={handalChange}
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      REMARK
                    </label>
                    <input
                      value={state.remark}
                      type="text"
                      onChange={handalChange}
                      name="remark"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full mb-8">
                  <button
                    type="submit"
                    class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default Form;
