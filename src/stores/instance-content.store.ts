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



}

export function getInstanceContentStore(initialState: any) {
    return new InstanceContentStore({});
}