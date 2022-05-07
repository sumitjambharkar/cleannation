import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import "./ViewMenu.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { db } from "./firebase";

const ViewMenu = () => {
  const [data, setData] = useState([]);

  const {Id} = useParams();
 

  useEffect(() => {
    // const getData = async () => {
    //   const respone = await fetch(`https://backendclean.herokuapp.com/${Params.id}`);
    //   const data = await respone.json();
    //   setState(data.result);
    // };
    // getData();
    if(Id){
      // db.collection("services")
      //   .doc(id)
      //   .get()
      //   .then((snapshot) => setData(snapshot.data()));
      db.collection("services").doc(Id).collection("submenu")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log((doc.data()))
        });
      });
    }
  }, [Id]);

  return (
    <>
      <Header />
      <Navbar />
      {data.map((doc)=>{
        return console.log(doc.data)
      })}

      {data.map((ele) => {
        return (
          <>
            <div className="box flex justify-around flex-wrap">
              <div className="1/3">
                <img style={{ width:190 }} src={ele.data.image} alt="" />
              </div>
              <div className="bad">
                <h1>
                  {ele.data.name}
                </h1>
              </div>
              <div className="price">
                <h1>
                  Rs.{ele.fprice}
                </h1>
              </div>
              <div className="bookn">
                <Link to="/Form">
                <Button style={{color:"black"}}>Book Now</Button>
                </Link>
              </div>
            </div>
            <div className="box flex justify-around flex-wrap">
              <div className="1/3">
                <img style={{ width: 190 }} src={ele.simage} alt="" />
              </div>
              <div className="bad">
                <h1 >
                  {ele.sname}
                </h1>
              </div>
              <div className="price">
                <h1 >
                  Rs.{ele.sprice}
                </h1>
              </div>
              <div className="bookn">
                <Link to="/Form">
                <Button style={{color:"black"}}>Book Now</Button>
                </Link>
              </div>
            </div>
            <div className="box flex justify-around flex-wrap">
              <div className="1/3">
                <img style={{ width: 190 }} src={ele.timage} alt="" />
              </div>
              <div className="bad">
                <h1 >
                  {ele.tname}
                </h1>
              </div>
              <div className="price">
                <h1 >
                  Rs.{ele.tprice}
                </h1>
              </div>
              <div className="bookn">
                <Link to="/Form">
                <Button style={{color:"black"}}>Book Now</Button>
                </Link>
              </div>
            </div>
            <div className="box flex justify-around flex-wrap">
              <div className="1/3">
                <img style={{ width:190 }} src={ele.foimage} alt="" />
              </div>
              <div className="bad">
                <h1 >
                  {ele.foname}
                </h1>
              </div>
              <div className="price">
                <h1 >
                  Rs.{ele.foprice}
                </h1>
              </div>
              <div className="bookn">
                <Link to="/Form">
                <Button style={{color:"black"}}>Book Now</Button>
                </Link>
              </div>
            </div>
            <div className="box flex justify-around flex-wrap">
              <div className="1/3">
                <img style={{ width: 190}} src={ele.fiimage} alt="" />
              </div>
              <div className="bad">
                <h1 style={{width: 300, fontWeight: 600, fontSize: 24, color: "black" }}>
                  {ele.finame}
                </h1>
              </div>
              <div className="price">
                <h1 >
                  Rs.{ele.fiprice}
                </h1>
              </div>
              <div className="bookn">
                <Link to="/Form">
                <Button style={{color:"black"}}>Book Now</Button>
                </Link>
              </div>
            </div>
            <div className="box flex justify-around flex-wrap">
              <div className="1/3">
                <img style={{ width: 190 }} src={ele.siimage} alt="" />
              </div>
              <div className="bad">
                <h1 >
                  {ele.siname}
                </h1>
              </div>
              <div className="price">
                <h1 >
                  Rs.{ele.siprice}
                </h1>
              </div>
              <div className="bookn">
                <Link to="/Form">
                <Button style={{color:"black"}}>Book Now</Button>
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default ViewMenu;
