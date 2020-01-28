export const FETCH_PLACES = 'FETCH_PLACES';
export const FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS';
export const FETCH_PLACES_FAILED = 'FETCH_PLACES_FAILED';
export const SET_PLACE = 'SET_PLACE';


export function fetchPlace(payload) {
  return { type: FETCH_PLACES,payload: payload };
}
export function fetchPlaceSuccess(payload) {
  return { type: FETCH_PLACES_SUCCESS,payload: payload };
}
export function fetchPlaceFailed(payload) {
  return { type: FETCH_PLACES_FAILED,payload: payload };
}
export function setPlace(payload) {
    return { type: SET_PLACE,payload: payload };
  }