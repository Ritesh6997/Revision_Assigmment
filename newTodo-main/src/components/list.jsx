import styled from "styled-components"
import { Summary } from "./summary"
import css from "./css/list.css";
import { useNavigate, useNavigationType } from "react-router-dom";
import { useEffect, useState } from "react";
const Border=styled.p`
height:20px;
padding:5px 5px 10px 5px;
margin:5px;
`


export const List=()=>{
    const navigate=useNavigate();
    const [all,setAll]=useState(0);
    const [personal,setPersonal]=useState(0);
    const [Offical,setOff]=useState(0);
    const [other,setOther]=useState(0);

useEffect(()=>{
    getData();
},[]);
async function getData(){
const data1=await fetch("http://localhost:8080/todos").then((d)=>d.json());
setAll(data1.length);
const data2=await fetch("http://localhost:8080/todos?category=Personal").then((d)=>d.json());
setPersonal(data2.length);
const data3=await fetch("http://localhost:8080/todos?category=Official").then((d)=>d.json());
setOff(data3.length)
const data4=await fetch("http://localhost:8080/todos?category=Others").then((d)=>d.json());
setOther(data4.length);
}


    return (<div className="list" >
        <div style={{
     borderRight:"2px solid black"  ,
     height:"400px",
     borderTop:"2px solid black" ,
     marginLeft:"2px",
     border:"2px solid black"
        }
        }>
            <div style={{marginTop:"50px"}}>
        <Border onClick={()=>{
            navigate("/all");
        }} style={{backgroundColor:"lightblue",border:"1px solid blue"}}>All {all}</Border>
        <Border  style={{backgroundColor:"lightgreen",border:"1px solid green"}}>personal  {personal}</Border>
        <Border  style={{backgroundColor:"rgb(211, 83, 190)",border:"1px solid purple"}}>Offical{Offical}</Border>
        <Border  style={{backgroundColor:"rgb(224, 184, 147)",border:"1px solid orange"}}>Others{other} </Border>
        
        </div>

        <div style={{marginTop:"153px",height:"30px",border:"2px solid black"}}>Login</div>
        </div>
        
    </div>)
}