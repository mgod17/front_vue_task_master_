import actions from './actions';
import mutations from './mutation';
import state from './state';

const authModule = {
  namespaced: true, 
  state,
  mutations,
  actions
};

export default authModule;