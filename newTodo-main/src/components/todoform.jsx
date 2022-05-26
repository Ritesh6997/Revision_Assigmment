import { InProgress } from "./Inprogress"
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux";
import { useState } from "react";
import  "./css/inputform.css"
export const   Form=()=>{  
    const navigate=useNavigate();
    const [date,setDate]=useState("");
    const [text,setText]=useState("");
    const todo=useSelector((store)=>store.todos.todos)
    const [form,setForm]=useState({
      title:"",
      date:"",
      category:"",
      where:""

    })


    function handleChange(e){
      const {name,value}=e.target;
      if(e.target.name=="title"){
        setText(e.target.value);
      }
      if(e.target.name=="date"){
        setDate(e.target.value);
      }
      setForm({
          ...form,
          [name]:value
      })
    }

 function handleSubmit(e){
e.preventDefault();

fetch("http://localhost:8080/todos",{
  method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify(form)
})
setText("");
setDate("");
}

return (
  <div>
    <form id="inptform" onSubmit={handleSubmit}>
      <input
        className="inpt"
        type="text"
        value={text}
        placeholder="ADD TODO"
        onChange={handleChange}
        name="title"
      />
      <input
        className="inpt"
        type="date"
        name="date"
        value={date}
        onChange={handleChange}
        placeholder="Date"
      />
      <br />
      <div className="listdiv" onChange={handleChange} name="category">
        Select Category
        <br />
        <input type="radio" name="category" value="Personal" />
        <label>Personal</label>
        <br></br>
        <input type="radio" name="category" value="Official" />
        <label>Official</label>
        <br></br>
        <input type="radio" name="category" value="Others" />
        <label>Others</label>
        <br></br>
      </div>
      <br />
      <div className="listdiv">
        <input type="radio" name="where" onChange={handleChange} value="todo" />
        <label>Todo</label>
        <br></br>
        <input
          type="radio"
          name="where"
          onChange={handleChange}
          value="inprogress"
        />
        <label>In Progress</label>
        <br></br>
        <input type="radio" name="where" onChange={handleChange} value="done" />
        <label>done</label>
        <br></br>
      </div>
      <input
        style={{ background: "#0f0634", color: "white" }}
        className="inpt"
        type="submit"
        value="Submit"
      />
    </form>
    <button
      style={{ background: "#034211", color: "white" }}
      onClick={() => navigate("/form", { replace: true })}
    >
      Create A New Task
    </button>
  </div>
);
}