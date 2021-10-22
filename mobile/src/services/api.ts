import { API_IP } from "@env";

import axios from "axios";

export const api = axios.create({
  baseURL: `http://${API_IP}:4000`,
});
