import React, { useState, useEffect } from "react";
import { query, getDocs,collection } from "firebase/firestore";
import "./Service.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Image from '../image/team.jpg';
import {db} from './firebase';

const Service = () => {
  const [data, setData] = useState([]);
  

  useEffect (() => {
    // const getData = async () => {
    //   const respone = await fetch("https://backendclean.herokuapp.com");
    //   const data = await respone.json();
    //   setData(data.result);
    // };
    // getData();
    db.collection("services").onSnapshot((snapshot)=>{
      setData(snapshot.docs.map((doc)=>({
        id:doc.id,
        data:doc.data()
      })))
    })
    
    
  }, []);

  return (
    <>
      {data.map((ele, i) => {
        return (
          <>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-6 mx-auto">
                <div
                  className={`main ${i % 2 === 0} ? "false":"" `}
                  class="flex flex-wrap -mx-4 -mb-10 text-center"
                >
                  <div class="sm:w-1/2 mb-10 px-4">
                  <div className="img_service">
                  <img className="image"  src={ele.data.image} alt="wash" />
                  </div>
                  </div>
                  <div class="sm:w-1/2 mb-10 px-4">
                    <h1 className="text-3xl text-purple-600 font-medium">
                      {ele.data.header}
                    </h1>
                    <p className="p_tag text-2xl mt-2">{ele.data.title}</p>
                    <p className="mt-2">
                      {ele.data.descr}
                    </p>
                    <Link to={`/${ele.id}`}>
                      <Button
                        style={{
                          marginTop: "1rem",
                          color: "black",
                          background: "#5cfdfd",
                          width: "8rem",
                          height: "3rem",
                          marginRight: "1rem",
                        }}
                      >
                        CHECK NOW
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
    </>
  );
};

export default Service;
