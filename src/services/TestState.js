class TestState {
  async execute(state) {
    const link = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}`;
    console.log(link);
    const { data } = await axios.get(link);
    console.log(data);
    return data.length;
  }
}
module.exports = TestState;
