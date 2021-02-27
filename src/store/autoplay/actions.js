import { AUTOPLAY_ADD_REF, AUTOPLAY_RESET_STATE } from "./actionTypes";

export const addRef = (cardRef) => ({ type: AUTOPLAY_ADD_REF, cardRef });
export const resetAutoplayState = () => ({ type: AUTOPLAY_RESET_STATE });

