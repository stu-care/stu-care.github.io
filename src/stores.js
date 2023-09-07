import { writable } from "svelte/store";
import { localStore } from "./localStore.js";
import data from '$lib/data.json';

export const alert = writable("Using the initial data");
export const baseData = localStore("rwc-data", data);
