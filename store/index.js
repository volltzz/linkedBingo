export const state = {
  token: null,
  lotteries: []
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_LOTTERIES(state, lotteries) {
    state.lotteries = lotteries;
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
  async fetchLotteries({commit}){
    try{
      const lotterries = await this.$axios.$post("/listdraw");
      commit("SET_LOTTERIES", lotterries)
    }catch(error){
      console.log("erro na store");
    }
  }
};

export const getters = {
  $allLotteries(state){
    return state.lotteries;
  }
};
