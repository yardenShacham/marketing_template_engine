import {
    action,
    observable,
    runInAction,
    computed
} from 'mobx';
import {appInjector} from '../core/appInjector';

class ViewStore {

    constructor(initialStore: any) {
        this.currentViewInstance = null;
        this.selectedView = null;
    }

    @observable selectedView;
    @observable allViewsInstances;
    @observable viewNames = [];
    @observable searchViewInstanceNameOrId: string;
    @observable currentViewInstance: any

    //<editor-fold desc="All Views Actions">
    @computed
    get searchedViews() {
        return this.allViewsInstances ? this.allViewsInstances.filter((view: any) => {
            return this.searchViewInstanceNameOrId ? view.name.toLowerCase()
                .includes(this.searchViewInstanceNameOrId.toLowerCase()) ? true : this.searchViewInstanceNameOrId === view.id : true;
        }) : []
    }

    @action
    getViewNames() {
        appInjector.get('viewService').getAllViews().then((views: any[]) => {
            if (views) {
                runInAction(() => {
                    this.viewNames = views;
                });
            }
        });
    }

    @action
    searchViews = (searchViewInstanceNameOrId: string) => {
        this.searchViewInstanceNameOrId = searchViewInstanceNameOrId;
    };

    @action
    removeViewInstance = (viewId: any) => {
        appInjector.get('viewService').removeViewInstance(viewId)
            .then(() => this.getAllViewInstances(this.selectedView));
    };

    @action
    getAllViewInstances = (viewName) => {
        if (viewName)
            this.selectedView = viewName;

        appInjector.get('viewService').getViewsInstances(this.selectedView).then((views: any[]) => {
            if (views) {
                runInAction(() => {
                    this.allViewsInstances = views;
                });
            }
        });
    };

    @action
    getViewInstanceId(viewInstanceId: any) {
        appInjector.get('viewService').getViewInstance(viewInstanceId).then((viewInstance) => {
            runInAction(() => {
                this.currentViewInstance = viewInstance;
            });
        });
    }

    //</editor-fold>

}

export function getViewsStore(initialState: any) {
    return new ViewStore({});
}