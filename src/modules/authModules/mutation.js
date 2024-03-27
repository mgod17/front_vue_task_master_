const mutations = {
    setToken(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
      },
      clearToken(state) {
        state.token = null;
        localStorage.removeItem('token');
      }
}
export default mutations;