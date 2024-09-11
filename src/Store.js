import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      isModalOpen: false,
      role: "",
      car: {},
      additionalFeatures: {
        driver: false,
        protection: false,
        infantSeat: false,
        toddlerSeat: false,
      },
      additionalFeaturesPrices: {
        driver: 500,
        protection: 1500,
        infantSeat: 150,
        toddlerSeat: 200,
      },
      LegalName:"",

      selectedCarTypes: [],  // Store selected car types
      selectedBrands: [],    // Store selected car brands
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

    //filters mutations
    SET_CAR_TYPES(state, carTypes) {
      state.selectedCarTypes = carTypes;  // Set selected car types
    },
    SET_BRANDS(state, brands) {
      state.selectedBrands = brands;  // Set selected brands
    },
    CLEAR_CAR_TYPES(state) {
      state.selectedCarTypes = [];  // Clear car types
    },
    CLEAR_BRANDS(state) {
      state.selectedBrands = [];  // Clear brands
    },
    //filters mutations end
  },
  actions: {
    //filters actions
    setCarTypes({ commit }, carTypes) {
      commit("SET_CAR_TYPES", carTypes);  // Commit car types to the store
    },
    setBrands({ commit }, brands) {
      commit("SET_BRANDS", brands);  // Commit brands to the store
    },
    clearCarTypes({ commit }) {
      commit("CLEAR_CAR_TYPES");  // Clear car types from the store
    },
    clearBrands({ commit }) {
      commit("CLEAR_BRANDS");  // Clear brands from the store
    },
    //end filter actions

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
    setlegalname({ commit }, ln) {
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
