const types = {
    ADD_USER: 'ADD_USER',
    LOGIN_USER: 'LOGIN_USER',
    LOG_OUT_USER: 'LOG_OUT_USER',
}

export default {
    state: () => ({
      user: null,
    }),
    actions: {
        addUser: (ctx, user) => {
            ctx.commit(types.ADD_USER, user)
        },
        logOutUser: (ctx) => {
            ctx.commit(types.LOG_OUT_USER)
        }
    },
    mutations: {
        [types.ADD_USER](state, payload) {
            //TODO add user to db
        // login user. mutation
        },
        [types.LOG_OUT_USER](state) {
            state.user = null;
            //TODO remove from local store
        },
        [types.LOGIN_USER](state, payload) {
            state.user = payload;
            // localStorage.setItem()
        }
    },
    getters: {
        user: (state) => {
            return state.user;
        }
    },
}