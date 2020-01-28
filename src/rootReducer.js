import { combineReducers} from "redux";
import {placeReducer} from "./reducers/reducers";
import {colorReducer} from "./reducers/colorReducer";

export default combineReducers({
    colorState: colorReducer,
    placeState: placeReducer
  });