export const state = {
  token: null,
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
};

export const actions = {
  userAuth({ commit }, login) {
    try {
      const token = this.$auth.loginWith("local", {
        data: {
          user: login.user,
          pass: login.pass,
          device_id: login.device_id,
          client_version: login.client_version,
        },
      });
      commit("SET_TOKEN", token);
    } catch (error) {
      console.log("erro na store");
    }
  },
};

export const getters = {
  $getNameUser(state) {
    return state.token;
  },
};
