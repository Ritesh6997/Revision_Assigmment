import { ADD_DONE } from "./action"

const init={
    done:[]
}
export const  DoneReduser=(store=init,{type,payload})=>{


    switch (type){
        case ADD_DONE:
            return {...store ,done:payload};
            default:
                return store;
    }
}