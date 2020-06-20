// import services from '../../../http'
import * as types from "./mutation-types";

export const ActionSetSize = ({ commit }: any, payload: any) => {
  commit(types.SET_SIZE, payload);
};

export const ActionSetFlavor = ({ commit }: any, payload: any) => {
  commit(types.SET_FLAVOR, payload);
};

export const ActionSetCustomization = ({ commit }: any, payload: any) => {
  commit(types.SET_CUSTOMIZATION, payload);
};

export const ActionSetSizeSelected = ({ commit }: any, payload: any) => {
  commit(types.SET_SIZE_SELECTED, payload);
};

export const ActionSetFlavorSelected = ({ commit }: any, payload: any) => {
  commit(types.SET_FLAVOR_SELECTED, payload);
};

export const ActionSetCustomizationSelected = (
  { commit }: any,
  payload: any
) => {
  commit(types.SET_CUSTOMIZATION_SELECTED, payload);
};

export const ActionSetTime = ({ commit }: any, payload: any) => {
  commit(types.SET_TIME, payload);
};

export const ActionSetTotal = ({ commit }: any, payload: any) => {
  commit(types.SET_TOTAL, payload);
};

export const ActionSetItem = ({ commit }: any, payload: any) => {
  commit(types.SET_ITEM, payload);
};

export const ActionSetDataList = ({ commit }: any, payload: any) => {
  commit(types.SET_DATA_LIST, payload);
};

export const ActionSetClear = ({ commit }: any, payload: any) => {
  commit(types.SET_CLEAR, payload);
};

export const ActionSetAlertShow = ({ commit }: any, payload: any) => {
  commit(types.SET_ALERT_SHOW, payload);
};
