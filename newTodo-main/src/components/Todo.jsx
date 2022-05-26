import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../Redux/Todo/action";

export const Todo=()=>{

const todos=useSelector((store)=>store.todos.todos);
const dispatch=useDispatch();


useEffect(()=>{
getData();
},[])

async function getData(){
    const data=await fetch("http://localhost:8080/todos?where=todo").then((d)=>d.json());
    dispatch(addTodo(data));

}

    return (<div style={{border:"2px solid none",width:"300px"}}>
        <div style={{backgroundColor:"lightgreen",border:"2px solid green"}}>Todo</div>
  {todos.map((e)=>(<div style={{border:"2px solid black"}}>
    <h3>{e.title}</h3>
    <h4>{e.date}</h4>
    <div style={{color:"green"}}>{e.category}</div>



  </div>))}
  
  
    </div>)
}