import mainSpace_reducer from './mainSpace_reducer';
import {combineReducers, createStore} from "redux";
import secondarySpace_reducer from "./secondarySpace_reducer";
import thirdSpace_reducer from "./thirdSpace_reducer";
import fourthSpace_reducer from "./fourthSpace_reducer";
import generalSetting_reducer from "./generalSetting_reducer";
import fifthSpace_reducer from "./fifthSpace_reducer";

let reducers = combineReducers({
    mainSpace_reducer: mainSpace_reducer,
    secondarySpace_reducer: secondarySpace_reducer,
    thirdSpace_reducer: thirdSpace_reducer,
    fourthSpace_reducer: fourthSpace_reducer,
    generalSetting_reducer: generalSetting_reducer,
    fifthSpace_reducer: fifthSpace_reducer,
});

let store = createStore(reducers);

export default store;