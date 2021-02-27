import { db } from "../../../firebase/db";
import types from './types'

export default {
    addUser: (ctx, user) => {
        // TODO check
        // db.collection('users')
        //     .doc(user.email)
        //     .get()
        //     .then(query => {
        //         console.log(query.doc.data(), 'query.doc.data()')
        //         return !!query.doc.data()
        //     })

        db.collection('users')
            .doc(user.email)
            .set(user)
            .then(() => {
                console.log('user updated!', user)
            })
        //TODO check user in db ? user exist : addUser();
        ctx.commit(types.ADD_USER, user)
        ctx.commit(types.LOGIN_USER, user)
    },
    login: (ctx, userData) => {
        console.log(userData, 'userData>>>>>>>>>>>>');
        db.collection('users')
            .doc(userData.email)
            .get()
            .then(doc => {
                const data = doc.data()
                console.log(data, 'query.data()???')
                data && data.password === userData.password ? ctx.commit(types.LOGIN_USER, data) : console.log('User not exist / password incorrect')
            })
        //TODO check user in db ? login() : forgot the password?;

    },
    logOutUser: (ctx) => {
        ctx.commit(types.LOG_OUT_USER)
    },
    getUserFromLocalStorage: (ctx) => {
        const user = localStorage.getItem('user')
        console.log('getUserFromLocalStorage', user)
        if (user) ctx.commit(types.LOGIN_USER, JSON.parse(user));
    },
}