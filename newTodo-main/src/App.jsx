import { useState } from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import './App.css'
import { Done } from './components/Done'
import { InProgress } from './components/Inprogress'
import { SideBar } from "./components/Sidebar"
import { Summary } from './components/summary'
import { Todo } from './components/Todo';
import {useSelector} from "react-redux";
import { ALL } from './components/all'
import { Form } from './components/todoform'


function App() {
 
  const sidebar=useSelector((store)=>store.yes.yes);
    console.log(sidebar);
  return (

  
    <div className="App">
   
      <div className={sidebar?"fix":"notfix"}>
    <SideBar/>
<div  className='sum'>
    <Routes>
      <Route path="/" element={<Summary/>}></Route>
      <Route path='/done' element={<Done/>}></Route>
      <Route path='/inprogress' element={<InProgress/>}></Route>
      <Route path='/todo' element={<Todo/>}></Route>
      <Route path='/all' element={<ALL/>}></Route>
      <Route path='/form' element={<Form/>}></Route>
    </Routes>
    </div>
    </div>
    </div>
  )
}

export default App
