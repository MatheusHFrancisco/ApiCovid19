const CityStore = require("../services/CityStore");
const TestCity = require("../services/TestCity");
const SearchCity = require("../services/SearchCity");

class CityController {
  async store(req, res) {
    try {
      const { city, state } = req.body;
      const cityStore = new CityStore();
      const result = await cityStore.execute(city, state);
      if (!result) {
        return res.status(404).json({ message: "Cidade não encontrada" });
      }
      console.log(result);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(404).json({ message: "Cidade não encontrada" });
    }
  }

  async testacidade(req, res) {
    try {
      const { city } = req.body;
      const testCity = new TestCity();
      const result = await testCity.execute(city);
      if (!result) {
        return res.status(404).json({ message: "Cidade não encontrada" });
      }
      return res.status(200).json(result);
    } catch (err) {
      return res.status(404).json({ message: "Cidade não encontrada" });
    }
  }

  async buscasocidade(req, res) {
    try {
      const { city } = req.params;
      const searchCity = new SearchCity();
      const result = await searchCity.execute(city);
      if (!result) {
        return res.status(404).json({ message: "Cidade não encontrada" });
      }
      return res.status(200).json(result);
    } catch (err) {
      return res.status(404).json({ message: "Cidade não encontrada" });
    }
  }
}
module.exports = CityController;
