import { writable } from "svelte/store";
import { TWITTER } from "../types";

export const snsHover = writable(TWITTER);
export const setSnsHover = (sns) => snsHover.set(sns);