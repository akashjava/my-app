import { SET_COLOR, SET_DEFAULT } from "../actions/color-actions";

export const initialSt = {
  color: "black",
  bColor: "white"
};

export function colorReducer(state = initialSt, action) {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        color: "white",
        bColor: "black"
      };
    case SET_DEFAULT:
      return {
        ...state,
        color: "black",
        bColor: "white"
      };

    default:
      return state;
  }
}
