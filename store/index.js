export const state = {
  token: null,
  lotteries: [],
  tickets: [],
  csv: null,
  loginButton: false,
  buttonState: false,
  errorText: false,
};

export const mutations = {
  SET_LOTTERIES(state, lotteries) {
    state.lotteries = lotteries;
  },
  SET_TICKETS(state, tickets) {
    state.tickets = tickets;
  },
  SET_LOGIN_BUTTON(state, loginButton) {
    state.loginButton = loginButton;
  },
  SET_BUTTON_STATE(state, buttonState) {
    state.buttonState = buttonState;
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
      const loginButton = true;
      const errorText = false;
      commit("SET_LOGIN_BUTTON", loginButton);
      commit("SET_ERROR_TEXT", errorText);
      await this.$auth.loginWith("local", {
        data: {
          user: login.user,
          pass: login.pass,
          device_id: login.device_id,
          client_version: login.client_version,
        },
      });
    } catch (error) {
      console.log("Erro ao enviar login na store");
      const loginButton = false;
      const errorText = true;
      commit("SET_LOGIN_BUTTON", loginButton);
      commit("SET_ERROR_TEXT", errorText);
    } finally {
      const loginButton = false;
      commit("SET_LOGIN_BUTTON", loginButton);
    }
  },
  userLogout() {
    this.$auth.logout();
    this.$router.push("/login")
  },
  async fetchLotteries({ commit }) {
    try {
      const lotterries = await this.$axios.$post("/listdraw");
      commit("SET_LOTTERIES", lotterries);
    } catch (error) {
      console.log("Erro ao carregar lista na store");
    }
  },
  async fetchTickets({ commit }, draw_id) {
    try {
      const tickets = await this.$axios.$post("/draw/getTickets", { draw_id: draw_id });
      commit("SET_TICKETS", tickets);

    } catch (error) {
      console.log("Erro ao carregar lista Tickets na store");
    }
  },

  async issueTicket({ commit }, issue) {
    try {
      const buttonState = true;
      commit("SET_BUTTON_STATE", buttonState);
      const csv = await this.$axios.$post("/issue_manual_ticket", {
        quantity: issue.quantity,
        draw_id: issue.draw_id,
        playersId: issue.playersId,
      });
      commit("SET_CSV", csv);
    } catch (error) {
      const buttonState = false;
      commit("SET_BUTTON_STATE", buttonState);
      console.log("Erro ao carregar csv na store");
    } finally {
      const buttonState = false;
      commit("SET_BUTTON_STATE", buttonState);
    }
  },
};

export const getters = {
  $allTickets(state) {
    return state.tickets
  },
  $allLotteries(state) {
    return state.lotteries;
  },
  $csvGenerated(state) {
    return state.csv;
  },
  $buttonState(state) {
    return state.loginButton;
  },
  $globalButton(state) {
    return state.buttonState;
  },
  $errorText(state) {
    return state.errorText;
  },
};
