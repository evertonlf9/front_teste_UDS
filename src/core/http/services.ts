import Repository from "./";

const base = {
  get() {
    return Repository.get('/mocks/choice.json');
  }
};

export default base;