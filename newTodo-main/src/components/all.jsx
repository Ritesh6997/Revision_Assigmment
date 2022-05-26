import { Done } from "./Done"
import { InProgress } from "./Inprogress"
import { Todo } from "./Todo"

export const ALL=()=>{
    return (<div style={{display:"flex",gap:"10px"}}>

<Todo/>
<InProgress/>
<Done/>
    </div>)
}