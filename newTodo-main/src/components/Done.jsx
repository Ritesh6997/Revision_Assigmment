import { addDone } from "../Redux/Done/action";
import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";

export const Done=()=>{



    const done=useSelector((store)=>store.done.done);
    const dispatch=useDispatch();


useEffect(()=>{
getData();
},[])

async function getData(){
    const data=await fetch("http://localhost:8080/todos?where=done").then((d)=>d.json());
    dispatch(addDone(data));

}
    return (<div style={{border:"2px solid none",width:"300px"}}>
        <div style={{backgroundColor:"rgb(211, 83, 190)",border:"2px solid purple"}}>Done</div>
        {done.map((e)=>(<div style={{border:"2px solid black"}}>
    <h3>{e.title}</h3>
    <h4>{e.date}</h4>
    <div style={{color:"green"}}>{e.category}</div>



  </div>))}
   
    </div>)
}