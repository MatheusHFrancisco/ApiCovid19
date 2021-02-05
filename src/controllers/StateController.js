const StateStore = require("../services/StateStore");
const TestState = require("../services/TestState");
const SearchState = require("../services/SearchState");

class StateController {
  async store(req, res) {
    try {
      const { city, state } = req.body;
      const stateStore = new StateStore();
      const result = await stateStore.execute(city, state);
      if (!result) {
        return res
          .status(404)
          .json({ message: "Estado não encontrado(store)" });
      }
      console.log(result);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(404).json({ message: "Estado não encontrado(store)" });
    }
  }

  async teststate(req, res) {
    try {
      const { state } = req.body;
      const testState = new TestState();
      const result = await testState.execute(state);
      if (!result) {
        return res
          .status(404)
          .json({ message: "Estado não encontrado(teststate)" });
      }
      return res.status(200).json(result);
    } catch (err) {
      return res
        .status(404)
        .json({ message: "Estado não encontrado (teststate)" });
    }
  }

  async searchstate(req, res) {
    try {
      const { state } = req.params;
      const searchState = new SearchState();
      const result = await searchState.execute(state);
      if (!result) {
        return res
          .status(404)
          .json({ message: "Estado não encontrado (searchstate)" });
      }
      return res.status(200).json(result);
    } catch (err) {
      return res
        .status(404)
        .json({ message: "Estado não encontrado (buscaestado)" });
    }
  }
}

module.exports = StateController;
