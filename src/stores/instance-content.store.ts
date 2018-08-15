import {
    action,
    observable,
    runInAction,
    computed
} from 'mobx';
import {appInjector} from '../core/appInjector';
import {appServices} from '../consts/appServices';

class InstanceContentStore {

    constructor(initialStore: any) {
    }

    @observable instanceHtmlContent;

    @action
    getInstanceHtmlContent(viewId, instanceId) {
        appInjector.get(appServices.instanceContentService).getInstanceHtmlContent(viewId, instanceId)
            .then((htmlContent) => {
                runInAction(() => {
                    this.instanceHtmlContent = htmlContent;
                });
            });
    }





}

export function getInstanceContentStore(initialState: any) {
    return new InstanceContentStore({});
}