import Base from "./base";

export default class Apps extends Base {
  constructor() {
    super("apps");
  }

  // item list
  async fetchItems(config) {
    const response = await this.ajaxGet("/photos", config);
    return response.data;
  }

  // item detail
  async fetchItem(id, config) {
    const response = await this.ajaxGet(`/photos/${id}`, config);
    return response.data;
  }
}
