import { combineReducers } from "redux";
import creatReducer from '../reducer/creat-reducer';
import cartReducer from "./add-cart";



const rootReducer = combineReducers(
    {
        creatReducer,
        cartReducer
    }
)

export default rootReducer;