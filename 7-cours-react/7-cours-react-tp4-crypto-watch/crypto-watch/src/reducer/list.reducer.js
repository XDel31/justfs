import { SET_LIST_DISPLAY } from "../action/list.action";

const initialeState = { showFavList: false };

export default function listReducer(state = initialeState, action) {
  switch (action.type) {
    case SET_LIST_DISPLAY:
      return { showFavList: action.payload };

    default:
      return state;
  }
}
