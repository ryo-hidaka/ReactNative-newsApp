import { Action } from "redux";
import { Article } from "../../types/article";
import { Cliptypes } from "../../store/Cliptypes";

export interface clips extends Action  {
    clip: Article[];
};

interface incrementAction extends Action {
  type: typeof Cliptypes.addclip;
  clip: clips;
}
interface decrementAction extends Action {
  type: typeof Cliptypes.deleteclipe;
  clip: clips;
}

export type ClipActionTypes = incrementAction | decrementAction;
