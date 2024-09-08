import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      isModalOpen: false,
      logedIn: false,
    };
  },
  mutations: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },

    SetInOrOut(state) {
      const user =
        JSON.parse(localStorage.getItem("currentUser")) ||
        JSON.parse(sessionStorage.getItem("currentUser"));
      if (user) {
        state.logedIn = true;
      } else {
        state.logedIn = false;
      }
    },
  },
  actions: {
    openModal({ commit }) {
      commit("openModal");
    },
    closeModal({ commit }) {
      commit("closeModal");
    },

    setInOrOut({ commit }) {
      commit("SetInOrOut");
    },
  },
});
export default store;
