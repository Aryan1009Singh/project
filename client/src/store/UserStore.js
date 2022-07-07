import { extendObservable } from 'mobx';

class UserStore {
    constructor() {
        extendObservable(this, {
            loading: false,
            isLoggedIn: false,
            token: 0
        })
    }
}

export default new UserStore();