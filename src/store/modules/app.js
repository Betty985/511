export default {
  nameSpaced: true,
  state: () => ({
    sidebarOpened: true,
  }),
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
  },
}
