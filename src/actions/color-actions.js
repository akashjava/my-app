export const SET_COLOR = "SET_COLOR";
export const SET_DEFAULT = "SET_DEFAULT";

export function setColor(payload) {
  return { type: SET_COLOR, payload: payload };
}
export function setDefault(payload) {
  return { type: SET_DEFAULT, payload: payload };
}
