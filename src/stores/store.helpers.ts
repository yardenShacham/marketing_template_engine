import {getAppStore} from './app.store';
import {getViewsStore} from './views.store';
import {getViewInstancesStore} from './view-instances.store';
import {getInstanceContentStore} from './instance-content.store';

export function configureStores(initialState: any) {
    const appStore = getAppStore(initialState);
    const viewsStore = getViewsStore(initialState);
    const viewInstancesStore = getViewInstancesStore(initialState);
    const instanceContentStore = getInstanceContentStore(initialState);
    return {
        appStore,
        viewsStore,
        viewInstancesStore,
        instanceContentStore
    };
}