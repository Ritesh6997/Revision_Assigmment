export const SHOW_ME="SHOW_ME";


 export const showMe =(data)=>{
    return {
        type:SHOW_ME,
        payload:!data
    }
 }