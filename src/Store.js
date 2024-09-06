import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      isModalOpen: false,
      role: "",
    };
  },
  mutations: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
    setrole(state, type) {
      state.role = type;
    },
  },
  actions: {
    openModal({ commit }) {
      commit("openModal");
    },
    closeModal({ commit }) {
      commit("closeModal");
    },
    setrole({ commit }, type) {
      commit("setrole", type);
    },
  },
  getters: {
    getrole(state) {
      return state.role;
    },
  },
});
export default store;
