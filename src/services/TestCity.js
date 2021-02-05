const { default: axios } = require("axios");
class TestCity {
  async execute(city) {
    const link =
      "https://servicodados.ibge.gov.br/api/v1/localidades/municipios/" + city;
    console.log(link);
    const { data } = await axios.get(link);
    console.log(data);
    return data.length;
  }
}
module.exports = TestCity;
