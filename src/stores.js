import { writable } from "svelte/store";

export const skillModalState = writable(false);
export const skillDetail = writable({ title: "null", detail: "null" });
