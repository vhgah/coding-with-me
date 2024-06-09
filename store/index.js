export const state = () => ({
  settings: {
    menu: "hidden",
    theme: "light",
  },
});

export const mutations = {
  toggleMenu(state, attr) {
    state.settings.menu = attr;
  },
};
