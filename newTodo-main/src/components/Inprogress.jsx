import { useSelector ,useDispatch} from "react-redux";
import { useEffect } from "react";
import { addProgress } from "../Redux/InProgress/action";

export const InProgress=()=>{

const progress=useSelector((store)=>store.progress.progress);
const dispatch=useDispatch();


useEffect(()=>{
getData();
},[])

async function getData(){
    const data=await fetch("http://localhost:8080/todos?where=inprogress").then((d)=>d.json());
    dispatch(addProgress(data));

}
    return (<div style={{border:"2px solid none",width:"300px"}}>
        <div style={{backgroundColor:"lightblue",border:"2px solid blue"}}>In Progress</div>
        {progress.map((e)=>(<div style={{border:"2px solid black"}}>
    <h3>{e.title}</h3>
    <h4>{e.date}</h4>
    <div style={{color:"green"}}>{e.category}</div>



  </div>))}
   
    </div>)
}