import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { prathibaReducer } from "./Reducer";

const store = createStore(prathibaReducer, applyMiddleware(thunk));

export default store;