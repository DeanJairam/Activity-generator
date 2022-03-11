import { writable } from "svelte/store"

export const act = writable()

export const fetchData = async() => {
    const url = 'https://www.boredapi.com/api/activity/';
    const res = await fetch(url)
    const data = await res.json();
    act.set(data.activity)
}