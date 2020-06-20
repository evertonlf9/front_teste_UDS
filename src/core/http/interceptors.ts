import store from "../store";

export default (req: any) => {
  return ({ status }: any) => {
    if (status === 401) {
      // store.dispatch('auth/ActionSignOut')
    }
  };
};
