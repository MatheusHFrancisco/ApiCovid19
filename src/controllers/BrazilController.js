const SearchBrazil = require("../services/SearchBrazil");
class Brazilcontroller {
  async searchBrazil(_, res) {
    try {
      const searchBrazil = new SearchBrazil();
      const result = await searchBrazil.execute();
      if (!result) {
        return res
          .status(404)
          .json({ message: "Não encontramos informações( searchBrazil )" });
      }
      return res.status(200).json(result);
    } catch (err) {
      return res
        .status(404)
        .json({ message: "Não encontramos informações ( searchBrazil )" });
    }
  }
}

module.exports = Brazilcontroller;
