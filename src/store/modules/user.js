const types = {
    ADD_USER: 'ADD_USER',
    LOGIN_USER: 'LOGIN_USER',
    LOG_OUT_USER: 'LOG_OUT_USER',
}

export default {
    namespaced: true,
    state: () => ({
      user: {},
    }),
    actions: {
        addUser: (ctx, user) => {
            //TODO check user in db ? user exist : addUser();
            ctx.commit(types.ADD_USER, user)
            ctx.commit(types.LOGIN_USER, user)
        },
        login: (ctx, user) => {
          ctx.commit(types.LOGIN_USER, user)
        },
        logOutUser: (ctx) => {
            ctx.commit(types.LOG_OUT_USER)
        },
        getUserFromLocalStorage: (ctx) => {
           const user = localStorage.getItem('user')
            if (user) ctx.commit(types.LOGIN_USER);
        },
    },
    mutations: {
        [types.ADD_USER](state, payload) {
            console.log(payload, 'USer : ADD USER?  ))))))))))');
            // localStorage.setItem('user',  JSON.stringify(payload))
            //TODO add user to db
        },
        [types.LOG_OUT_USER](state) {
            localStorage.removeItem('user');
            state.user = null;
        },
        [types.LOGIN_USER](state, payload) {
            const { fullname, email } = payload
            state.user = { fullname, email }
            console.log(payload, 'LOGIN???')
            localStorage.setItem('user',  JSON.stringify({ fullname, email }))
        }
    },
    getters: {
        user: (state) => {
            return state.user;
        }
    },
}