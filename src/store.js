import { createStore} from "redux";
import {initialPlaceState} from "./reducers/reducers";
import {initialSt} from "./reducers/colorReducer";
import rootReducer from "./rootReducer";



function appStore(state = {placeState:initialPlaceState,colorState:initialSt}) {
  return createStore(rootReducer,state);
}

export default appStore;