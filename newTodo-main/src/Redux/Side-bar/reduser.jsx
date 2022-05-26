import { SHOW_ME } from "./action"


const init={yes:false}
   export const ShowReduser=(store=init,{type,payload})=>{
switch (type){
    case SHOW_ME:
        return {...store,yes:!store.yes};

default:
    return store ;
}
   }