import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      isModalOpen: false,
      logedIn: false,
      car: {},
      additionalFeatures: {},
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
    setcar(state, car) {
      state.car = car;
    },
    setfeatures(state, features) {
      state.additionalFeatures = features;
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
    setInOrOut({ commit }) {
      commit("SetInOrOut");
    },
  },
  getters: {
    getrole(state) {
      return state.role;
    },
    getcar(state) {
      return state.car;
    },
    getfeatures(state) {
      return state.additionalFeatures;
    },
  },
});
export default store;
