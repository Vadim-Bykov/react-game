import { BURGER_SET_CARDS_BG, BURGER_SET_OPACITY_BG, BURGER_SET_SOUND_VOLUME, BURGER_TOGGLE_IS_MENU_ACTIVE, BURGER_TOGGLE_MUSIC, BURGER_TOGGLE_SOUND } from "./actionTypes";

export const toggleIsMenuActive = () => ({ type: BURGER_TOGGLE_IS_MENU_ACTIVE });

export const toggleIsSound = () => ({ type: BURGER_TOGGLE_SOUND });

export const toggleIsMusic = () => ({ type: BURGER_TOGGLE_MUSIC });

export const setSoundVolume = (volume) => ({ type: BURGER_SET_SOUND_VOLUME, volume });

export const setCardsBG = (color) => ({ type: BURGER_SET_CARDS_BG, color });

export const setOpacityBG = (opacity) => ({ type: BURGER_SET_OPACITY_BG, opacity });

