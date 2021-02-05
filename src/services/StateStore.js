const { default: axios } = require("axios");
const token = process.env.KEY;
class StateStore {
  async execute(city, state) {
    const link =
      "https://api.brasil.io/v1/dataset/covid19/caso_full/data?place_type-city&state-" +
      state +
      "&city-" +
      city;

    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    const { data } = await axios.get(link, config);
    if (!data) {
      return;
    }
    return data.data.results.first();
  }
}
module.exports = StateStore;
