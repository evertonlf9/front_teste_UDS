import * as types from "./mutation-types";

export default {
  [types.SET_ALERT_SHOW](state: any, payload: any) {
    state.alertShow = payload;
  },
  [types.SET_TIME](state: any, payload: any) {
    state.time = payload;
  },
  [types.SET_TOTAL](state: any, payload: any) {
    state.total = payload;
  },
  [types.SET_SIZE](state: any, payload: any) {
    state.size = payload;
  },
  [types.SET_FLAVOR](state: any, payload: any) {
    state.flavor = payload;
  },
  [types.SET_CUSTOMIZATION](state: any, payload: any) {
    state.customization = payload;
  },
  [types.SET_SIZE_SELECTED](state: any, payload: any) {
    state.sizeSelected = payload;
  },
  [types.SET_FLAVOR_SELECTED](state: any, payload: any) {
    state.flavorSelected = payload;
  },
  [types.SET_CUSTOMIZATION_SELECTED](state: any, payload: any) {
    state.customizationSelected = payload;
  },
  [types.SET_DATA_LIST](state: any, payload: any) {
    state.data = payload;
  },
  [types.SET_ITEM](state: any, payload: any) {
    state.key = payload.key;
    state.time = payload.time;
    state.total = payload.total;
    state.sizeSelected = payload.sizeSelected;
    state.flavorSelected = payload.flavorSelected;
    state.customizationSelected = payload.customizationSelected;
  },
  [types.SET_CLEAR](state: any, payload: any) {
    state.id = null;
    state.time = "";
    state.total = "";
    state.sizeSelected = {};
    state.flavorSelected = {};
    state.customizationSelected = [];
  }
};
