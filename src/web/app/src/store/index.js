import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import mutations from './mutations'
import accessControl from './modules/accessControl'
import presentation from "./modules/presentation";
import conference from "./modules/conference";
import section from "./modules/section";
import dbMetaData from "./modules/dbMetaData";
import dataMapping from "./modules/dataMapping";
import dataManage from "./modules/dataManage";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    isPageLoading: true,
  },

  mutations: mutations,

  actions: {},

  modules: {
    userInfo,
    presentation,
    conference,
    accessControl,
    section,
    dbMetaData,
    dataMapping,
    dataManage
  }
})
