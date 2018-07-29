import {
    action,
    observable,
    runInAction,
    computed
} from 'mobx';
import {appInjector} from '../core/appInjector';

class ViewInstancesStore {

    constructor(initialStore: any) {
        this.currentViewInstance = null;
        this.selectedView = null;
    }

    @observable selectedView;
    @observable currentViewTemplate;
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
    getViewInstanceId = (viewInstanceId: any) => {
        appInjector.get('viewService').getViewInstance(viewInstanceId).then((viewInstance) => {
            runInAction(() => {
                this.currentViewInstance = viewInstance;
            });
        });
    }

    @action
    updateViewInstance = (viewInstanceId, fields) => {
        appInjector.get('viewService').updateViewInstanceContent(viewInstanceId, fields)
            .then(() => this.getViewInstanceId(viewInstanceId));
    };

    getViewTemplate = () => {
        appInjector.get('viewService').getViewTemplate(this.selectedView).then((viewTemplate) => {
            runInAction(() => {
                this.currentViewTemplate = viewTemplate;
            });
        });
    }

    //</editor-fold>

}

export function getViewInstancesStore(initialState: any) {
    return new ViewInstancesStore({});
}