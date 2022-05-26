import { ADD_TODO } from "./action"

const init={
    todos:[]
}
export const  TodoReduser=(store=init,{type,payload})=>{


    switch (type){
        case ADD_TODO:
            return {...store ,todos:payload};
            default:
                return store;
    }
}