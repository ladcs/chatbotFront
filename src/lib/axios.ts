import axios from "axios";

const host = process.env.NEXT_PUBLIC_HOST ?? 'backend';
const baseURL = `http://${host}/`

export const api = axios.create({
  baseURL,
});
