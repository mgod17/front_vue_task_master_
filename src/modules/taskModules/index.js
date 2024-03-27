import actions from './actions';
import mutations from './mutation';
import state from './state';

const taskModules = {
  namespaced: true, 
  state,
  mutations,
  actions
};

export default taskModules;