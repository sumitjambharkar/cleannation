import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import "./ViewMenu.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";

const ViewMenu = () => {
  const [state, setState] = useState([]);
  console.log(state);

  const Params = useParams();
  console.log(Params);

  useEffect(() => {
    const getData = async () => {
      const respone = await fetch(`https://backendclean.herokuapp.com/${Params.id}`);
      const data = await respone.json();
      setState(data.result);
    };
    getData();
  }, [Params.id]);

  return (
    <>
      <Header />
      <Navbar />

      {[state].map((ele) => {
        return (
          <>
            <div className="box flex justify-around flex-wrap">
              <div className="1/3">
                <img style={{ width:190 }} src={ele.fimage} alt="" />
              </div>
              <div className="bad">
                <h1 style={{ width:300,fontWeight: 600, fontSize: 24, color: "black" }}>
                  {ele.fname}
                </h1>
              </div>
              <div className="price">
                <h1 style={{ fontWeight: 600, fontSize: 24, color: "black" }}>
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
                <h1 style={{width:300, fontWeight: 600, fontSize: 24, color: "black" }}>
                  {ele.sname}
                </h1>
              </div>
              <div className="price">
                <h1 style={{ fontWeight: 600, fontSize: 24, color: "black" }}>
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
                <h1 style={{width: 300, fontWeight: 600, fontSize: 24, color: "black" }}>
                  {ele.tname}
                </h1>
              </div>
              <div className="price">
                <h1 style={{ fontWeight: 600, fontSize: 24, color: "black" }}>
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
                <h1 style={{width: 300, fontWeight: 600, fontSize: 24, color: "black" }}>
                  {ele.foname}
                </h1>
              </div>
              <div className="price">
                <h1 style={{ fontWeight: 600, fontSize: 24, color: "black" }}>
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
                <h1 style={{ fontWeight: 600, fontSize: 24, color: "black" }}>
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
                <h1 style={{width: 300, fontWeight: 600, fontSize: 24, color: "black" }}>
                  {ele.siname}
                </h1>
              </div>
              <div className="price">
                <h1 style={{ fontWeight: 600, fontSize: 24, color: "black"}}>
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
