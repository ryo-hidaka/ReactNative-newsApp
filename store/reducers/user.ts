import { Article } from "../../types/article";
import { Actions } from "../../types/state";
import { ClipActionTypes } from "../actions/types";
import { addClip } from "../actions/user";
import { User } from "../../types/user";

const initialState:User = {
  clips: [],
};

export const reducer = (state = initialState, action: Actions) => {
  console.log(state);
  switch (action.type) {
    case "ADD_CLIP":
      return {
        ...state,
        clips: [...state.clips, action.clip],
      };
    case "DELETE_CLIP":
      return {
        ...state,
        clips: state.clips.filter((clip) => clip.url !== action.clip.url),
      };
    default:
      return state;
  }
};
