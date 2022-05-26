
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import css from "./css/summary.css"

 
 export const Summary=()=>{

    const todos=useSelector((store)=>store.todos.todos);
    const done=useSelector((store)=>store.done.done);
    const progress=useSelector((store)=>store.progress.progress);

     const sum=[{ title:"Todo",to:"/todo",count:todos.length},
                { title:"In Progress",to:"/inprogress",count:progress.length},
                { title:"Done",to:"/done",count:done.length}, 
            {title:"Create Todo", to:"/form"} ];
     return (<div  style={{marginTop:"5%"}}>
  {sum.map((e)=>(<p className="List" key={e.title}><Link style={{textDecoration:"none",color:"black",fontWeight:"bolder"}} to={e.to}>{e.title} {e.count}</Link></p>))}
     </div>)
 }