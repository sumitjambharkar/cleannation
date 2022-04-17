import axios from "axios";
import React from "react";
import { useState } from "react";

const ContactPage = () => {
  const [state,setState] = useState({
    name:"",
    email:"",
    message:""

  })
  const submitContact =(e)=>{
    console.log(state);
    e.preventDefault();
    const feedbackData ={
      name: state.name,
      email: state.email,
      message: state.message,
    };
    axios.post("https://backendclean.herokuapp.com/user-feedback " ,feedbackData)
   if(state){
     setState({
      name:"",
      email:"",
      message:""

     });
     alert("feedback send")
   }

  
  }
  let name , value
  const inputChange =(e)=>{
    name =e.target.name;
    value =e.target.value;
    setState({...state,[name]:value})
  }
  return (
    <div>
            <section class="text-gray-600 body-font relative">
      <h1 className="text-center text-5xl mt-12">GET IN TOUCH</h1>
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width={1000}
              height={1000}
              class="absolute inset-0"
              frameborder={0}
              title="map"
              marginheight={0}
              marginwidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3769.3743246504946!2d72.81242141473072!3d19.13508518705404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shi!2sin!4v1629261544325!5m2!1shi!2sin"
            ></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p class="mt-1">
                 Yari Road ,versova , Andheri West Mumbai-400061 .
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a href = "mailto:cleannation00@gmail.com" class="text-indigo-500 leading-relaxed">cleannation00@gmail.com</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p>
                <a href="tel:+9323969471">7021595850</a>
                </p>
                <a href="tel:+7738727683">7738727683</a>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <form method="post" onSubmit={submitContact}>
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
              
                onChange={inputChange}
                value={state.name}
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                
                value={state.email}
                onChange={inputChange}
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>

              <textarea
                
                value={state.message}
                onChange={inputChange}
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button  type="submit" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Send
            </button>
            <p class="text-xs text-gray-500 mt-3">
            The Customer Is The King And We Are The Servant ... ( Cleannation.In )
            </p>
            </form>
          </div>
        </div>
      </section>
            
        </div>
  );
};

export default ContactPage;
