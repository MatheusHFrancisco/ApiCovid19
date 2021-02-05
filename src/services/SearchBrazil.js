const { default: axios } = require("axios");
class SearchBrazil {
  async execute() {
    const { data } = await axios.get(
      "https://corona.lmao.ninja/v2/countries/brazil"
    );
    const dadosBrazil = data;
    const { todayCases, deaths, todayDeaths, recovered } = dadosBrazil;
    const result = { todayCases, todayDeaths, deaths, recovered };
    return result;
  }
}

module.exports = SearchBrazil;
