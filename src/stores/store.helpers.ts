import {getAppStore} from './app.store';
import {getViewsStore} from './views.store';
import {getViewInstancesStore} from './view-instances.store';

export function configureStores(initialState: any) {
    const appStore = getAppStore(initialState);
    const viewsStore = getViewsStore(initialState);
    const viewInstancesStore = getViewInstancesStore(initialState);
    return {
        appStore,
        viewsStore,
        viewInstancesStore
    };
}