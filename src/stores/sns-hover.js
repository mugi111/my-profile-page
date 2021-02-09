import { writable } from "svelte/store";
import { FACEBOOK, INSTAGRAM, TWITTER } from "../types";

export const snsHover = writable(TWITTER);
export const snsHoverSetTwitter = () => snsHover.set(TWITTER);
export const snsHoverSetFacebook = () => snsHover.set(FACEBOOK);
export const snsHoverSetInstagram = () => snsHover.set(INSTAGRAM);