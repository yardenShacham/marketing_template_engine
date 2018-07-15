

class AppStore {

    constructor(initialStore: any) {

    }
}

export function getAppStore(initialState: any) {
    return new AppStore({});
}

