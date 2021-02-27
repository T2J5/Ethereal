const state = {
  id: '',
  name: ''
};

const mumations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mumations,
  actions
}