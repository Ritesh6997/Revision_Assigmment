import { combineReducers,legacy_createStore} from 'redux'
import { productdataReducer } from "./Product/Reducer"
const rootReducer = combineReducers({
    productData: productdataReducer
});
export const store = legacy_createStore(rootReducer);