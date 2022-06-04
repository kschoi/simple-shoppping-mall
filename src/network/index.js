import Apps from "./app";

class NetworkService {
  #appService = new Apps();

  apps() {
    return this.#appService;
  }
}

export default new NetworkService();
