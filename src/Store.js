import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      isModalOpen: false,
      role: "",
      car:{},
      additionalFeatures:{
        driver:false,
        protection:  false,
        infantSeat:  false,
        toddlerSeat: false,
      },
      additionalFeaturesPrices:{
        driver:  500 ,
        protection:  1500 ,
        infantSeat:  150 ,
        toddlerSeat:  200 ,
      },
      LegalName:"",
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
    setcar(state, car) {
      state.car = car;
    },
    setfeatures(state, features) {
      state.additionalFeatures = features;
    },
    setlegalname(state, ln) {
      state.LegalName = ln;
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
    setcar({ commit }, car) {
      commit("setcar", car);
    },
    setfeatures({ commit }, features) {
      commit("setfeatures", features);
    },
    setlegalname({ commit },ln) {
      commit("setlegalname", ln);
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
    getlegalname(state) {
      return state.LegalName;
    },
    getfeaturesprices(state) {
      return state.additionalFeaturesPrices;
    },
  },
});
export default store;
