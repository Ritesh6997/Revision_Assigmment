import { useState } from "react";
import  listbar  from "../image/bars-solid.svg";
import { List } from "./list";
import  styled from "styled-components";
import { Summary } from "./summary";
import css from "./css/sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { showMe } from "../Redux/Side-bar/action";
import { Link } from "react-router-dom";

export const SideBar=()=>{
  
  const sidebar=useSelector((store)=>store.yes.yes);
  
   const dispatch=useDispatch();

    return (
      <div>
        <div className="sidebar" style={{ display: "flex" }}>
          <img
            onClick={() => {
              dispatch(showMe(sidebar));
            }}
            style={{
              height: "30px",
              width: "30px",
              marginLeft: "20px",
              marginRight: "60px",
            }}
            src={listbar}
          />
          
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontSize: "20px",
                fontFamily: "a",
                fontWeight: "bolder",
                color:"#110336",
              }}
            >
              TODOLIST
            </Link>
        </div>
        <div>{sidebar ? <List /> : ""}</div>
      </div>
    );
} 