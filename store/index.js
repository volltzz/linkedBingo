export const state = {
  token: null,
  lotteries: [],
  csv: null,
  loginButton: false,
  errorText: false
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_LOTTERIES(state, lotteries) {
    state.lotteries = lotteries;
  },
  SET_LOGIN_BUTTON(state, loginButton) {
    state.loginButton = loginButton;
  },
  SET_ERROR_TEXT(state, errorText) {
    state.errorText = errorText;
  },
  SET_CSV(state, csv) {
    console.log(csv);
    state.csv = csv;
  },
};

export const actions = {
 async userAuth({ commit }, login) {
    try {
      const loginButton = true
      const errorText = false
      commit("SET_LOGIN_BUTTON", loginButton);
      commit("SET_ERROR_TEXT", errorText);
     const token = await this.$auth.loginWith("local", {
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
      const loginButton = false
      const errorText = true
      commit("SET_LOGIN_BUTTON", loginButton);
      commit("SET_ERROR_TEXT", errorText);
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
  },
  $buttonState(state){
    return state.loginButton;
  },
  $errorText(state){
    return state.errorText;
  }
};
