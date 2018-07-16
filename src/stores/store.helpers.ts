import {getAppStore} from './app.store';
import {getViewsStore} from './views.store';

export function configureStores(initialState: any) {
    const appStore = getAppStore(initialState);
    const viewsStore = getViewsStore(initialState);
    return {
        appStore,
        viewsStore
    };
}