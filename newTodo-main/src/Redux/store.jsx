import { combineReducers, legacy_createStore as createstore } from "redux";
import { DoneReduser } from "./Done/reduser";
import { ProgressReduser } from "./InProgress/reduser";
import { ShowReduser } from "./Side-bar/reduser";
import { TodoReduser } from "./Todo/reduser";

const RootReduser=combineReducers({
    yes:ShowReduser,
    todos:TodoReduser,
    done:DoneReduser,
    progress:ProgressReduser
});


export const store=createstore(
    RootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    );