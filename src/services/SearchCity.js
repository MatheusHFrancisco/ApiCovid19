const { default: axios } = require("axios");
const { helper } = require("../utils/utils");
const token = process.env.KEY;
class SearchCity {
  async execute(city) {
    const novacidade = helper(city);
    const linkIbge = `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${novacidade}`;
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    const ibge = await axios.get(linkIbge);

    const estado = ibge.data.microrregiao.mesorregiao.UF.sigla;
    const link = `https://api.brasil.io/v1/dataset/covid19/caso_full/data?state=${estado}&is_last`;
    try {
      const dataCovid = await axios.get(link, config);
      const dadosCidade = dataCovid.data.results.filter(
        (result) => result.city === ibge.data.nome
      )[0];
      const {
        last_available_confirmed,
        last_available_deaths,
        new_confirmed,
        new_deaths,
      } = dadosCidade;
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

module.exports = SearchCity;

// const brasil ={
//"cases": 9354609
//"todayCases": 14688,
//"deaths": 227883,
//"todayDeaths": 291,
//"recovered": 8236864}
