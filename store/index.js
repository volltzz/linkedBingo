export const state = {
  token: null,
  lotteries: [],
  csv: null
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_LOTTERIES(state, lotteries) {
    state.lotteries = lotteries;
  },
  SET_CSV(state, csv) {
    console.log(csv);
    state.csv = csv;
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
      console.log("Erro ao enviar login na store");
    }
  },

  async fetchLotteries({commit}){
    try{
      const lotterries = await this.$axios.$post("/listdraw");
      commit("SET_LOTTERIES", lotterries)
    }catch(error){
      console.log("Erro ao carregar lista na store");
    }
  },

  async issueTicket({ commit }, issue) {
    try {
      const csv = await this.$axios.$post("/issue_manual_ticket", {
        quantity: issue.quantity,
        draw_id: issue.draw_id,
        playersId: issue.playersId
      });
      commit("SET_CSV", csv);
    } catch (error) {
      console.log("Erro ao carregar csv na store");
    }
  }
};

export const getters = {
  $allLotteries(state){
    return state.lotteries;
  },
  $csvGenerated(state){
    return state.csv;
  }
};
