import { getToken } from '@/utils/auth'
const user = {
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {

  }
}

export default user

