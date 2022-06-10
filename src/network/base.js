import axios from "axios";

export default class {
  #createdAxios = axios.create();
  #baseHeaders = {
    "Content-Type": "application/json; charset=utf-8",
  };
  #serverType;

  constructor(serverType) {
    this.#serverType = serverType;

    this.#createdAxios.interceptors.request.use(
      (config) => {
        console.log("request interceptors", config);
        // config.withCredentials = true; // https://kosaf04pyh.tistory.com/152
        return config;
      },
      (error) => {
        console.debug(error);
      }
    );

    this.#createdAxios.interceptors.response.use(
      (response) => {
        console.log("response interceptors", response);
        return response;
      },
      async (error) => {
        return console.debug(error);
      }
    );
  }

  async ajaxGet(subUrl, ownConfig) {
    const url = `${this.baseUrl}${subUrl}`;
    const config = ownConfig ? Object.assign({}, ownConfig) : {};
    const baseHeaders = this.#baseHeaders;
    const headers = config.headers
      ? Object.assign({}, config.headers)
      : baseHeaders;
    config.headers = headers;
    return this.#createdAxios.get(url, config);
  }

  get baseUrl() {
    switch (this.#serverType) {
      case "apps":
        return `https://jsonplaceholder.typicode.com`;
      default:
        return "";
    }
  }
}
