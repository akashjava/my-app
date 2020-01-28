import {
  FETCH_PLACES,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILED,
  SET_PLACE
} from "../actions/actions";

export const initialPlaceState = {
  places: [],
  isSpinner: false,
  place: {
        center: {
          latitude: 27.95,
          longitude: 78.39
        }
      }
};

export function placeReducer(state = initialPlaceState, action) {
  switch (action.type) {
    case FETCH_PLACES:
      return {
        ...state,
        isSpinner: true
      };
    case FETCH_PLACES_SUCCESS:
      return {
        ...state,
        isSpinner: false,
        places: action.payload
      };
    case FETCH_PLACES_FAILED:
      return {
        ...state,
        isSpinner: false
      };
      case SET_PLACE:
      return {
        ...state,
        place: action.payload
      };

    default:
      return state;
  }
}
