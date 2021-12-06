import mainSpace_reducer from './mainSpace_reducer';
import {combineReducers, createStore} from "redux";
import secondarySpace_reducer from "./secondarySpace_reducer";
import thirdSpace_reducer from "./thirdSpace_reducer";

let reducers = combineReducers({
    mainSpace_reducer: mainSpace_reducer,
    secondarySpace_reducer: secondarySpace_reducer,
    thirdSpace_reducer: thirdSpace_reducer,
});

let store = createStore(reducers);

export default store;
