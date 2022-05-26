import { ADD_PROGRESS } from "./action"

const init={
    progress:[]
}
export const  ProgressReduser=(store=init,{type,payload})=>{


    switch (type){
        case ADD_PROGRESS:
            return {...store ,progress:payload};
            default:
                return store;
    }
}