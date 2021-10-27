const store = {
  state: {
    popText: ''
  },
  mutations: {
    popText (state, text) {
      state.popText = text
      window.setTimeout(() => {
        state.popText = ''
      }, 1000)
    }
  }
}

export default store
