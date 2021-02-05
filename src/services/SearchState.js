const { default: axios } = require("axios");
const { helper } = require("../utils/utils");
const token = process.env.KEY;

class SearchState {
  async execute(state) {
    const newstate = helper(state);
    const linkIbge = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${newstate}`;
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    const ibge = await axios.get(linkIbge);
    const estado = ibge.data.sigla;
    const link = `https://api.brasil.io/v1/dataset/covid19/caso_full/data/?true&place_type=state&state=${estado}`;
    try {
      const dataCovid = await axios.get(link, config);
      const dataState = dataCovid.data.results.filter(
        (result) => result.state === ibge.data.sigla
      )[0];
      const {
        last_available_confirmed,
        last_available_deaths,
        new_confirmed,
        new_deaths,
      } = dataState;
      const result = {
        last_available_confirmed,
        last_available_deaths,
        new_confirmed,
        new_deaths,
      };
      return result;
    } catch (error) {
      throw new Error({ message: "Erro ao conectar a api" });
    }
  }
}
module.exports = SearchState;
