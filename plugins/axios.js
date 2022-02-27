export default function ({ $axios, app }, inject) {
  const api = $axios.create({
    headers: {
      Accept: "application/json", //accept json
    },
  });

  api.onRequest((config) => {
    if (app.$auth.loggedIn) {
      const token = app.$auth.strategy.token.get().split(" ")[1];
      api.setHeader("X-Auth-Token", token);
    }
  });

  inject("api", api);
}
