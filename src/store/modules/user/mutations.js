import types from './types'

export default {
    [types.ADD_USER](state, payload) {
        console.log(payload, 'USer : ADD USER?  ))))))))))');
        //TODO add user to db
    },
    [types.LOG_OUT_USER](state) {
        state.user = null;
        localStorage.removeItem('user');
    },
    [types.LOGIN_USER](state, payload) {
        const { fullname, email } = payload
        state.user = payload
        localStorage.setItem('user',  JSON.stringify({ fullname, email }))
    }
}