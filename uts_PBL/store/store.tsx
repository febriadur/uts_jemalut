import {createStore} from "redux";
import rootReducer from "../services/rootReducer"; 
const store = createStore(rootReducer);


export default store;
