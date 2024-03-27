import { createStore } from 'vuex';
import authModules from './authModules/index.js';
import taskModules from './taskModules/index.js';


export default createStore({
  modules: {
    authModules,
    taskModules
  }
});