const types = {
    ADD_USER: 'ADD_USER',
    LOGIN_USER: 'LOGIN_USER',
    LOG_OUT_USER: 'LOG_OUT_USER',
}

export default {
    namespaced: true,
    state: () => ({
      user: null,
    }),
    actions: {
        addUser: (ctx, user) => {
            //TODO check user in db ? user exist : addUser();
            ctx.commit(types.ADD_USER, user)
            ctx.commit(types.LOGIN_USER, user)
        },
        login: (ctx, user) => {
            //TODO check user in db ? login() : forgot the password?;
            ctx.commit(types.LOGIN_USER, user)
        },
        logOutUser: (ctx) => {
            ctx.commit(types.LOG_OUT_USER)
        },
        getUserFromLocalStorage: (ctx) => {
           const user = localStorage.getItem('user')
            console.log('getUserFromLocalStorage', user)
            if (user) ctx.commit(types.LOGIN_USER, JSON.parse(user));
        },
    },
    mutations: {
        [types.ADD_USER](state, payload) {
            console.log(payload, 'USer : ADD USER?  ))))))))))');
            // localStorage.setItem('user',  JSON.stringify(payload))
            //TODO add user to db
        },
        [types.LOG_OUT_USER](state) {
            state.user = null;
            localStorage.removeItem('user');
        },
        [types.LOGIN_USER](state, payload) {
            const { fullname, email } = payload
            state.user = { fullname, email }
            localStorage.setItem('user',  JSON.stringify({ fullname, email }))
        }
    },
    getters: {
        user: (state) => {
            return state.user;
        }
    },
}