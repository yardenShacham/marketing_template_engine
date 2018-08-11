import {
    action,
    observable,
    runInAction,
    computed
} from 'mobx';
import {appInjector} from '../core/appInjector';
import {appServices} from '../consts/appServices';

class ViewInstancesStore {

    constructor(initialStore: any) {
        this.selectedView = null;
        this.isLoading = false;
    }

    @observable isLoading;
    @observable selectedView;
    @observable allViewsInstances;
    @observable viewNames = [];
    @observable searchViewInstanceNameOrId: string;

    //<editor-fold desc="All Views Actions">
    @computed
    get searchedViewInstances() {
        return this.allViewsInstances ? this.allViewsInstances.filter((viewInstance: any) => {
            return this.searchViewInstanceNameOrId ? viewInstance.name.toLowerCase()
                .includes(this.searchViewInstanceNameOrId.toLowerCase()) ?
                true : this.searchViewInstanceNameOrId === viewInstance.viewInstanceId : true;
        }) : []
    }

    @action
    async getViewNames() {
        this.isLoading = true;
        const views = await  appInjector.get(appServices.viewService).getAllViews();
        runInAction(() => {
            this.viewNames = views;
        });
    }

    @action
    searchViewInstances = (searchViewInstanceNameOrId: string) => {
        this.searchViewInstanceNameOrId = searchViewInstanceNameOrId;
    };

    @action
    removeViewInstance = async (viewInstanceId: string) => {
        this.isLoading = true;
        await appInjector.get(appServices.viewInstanceService)
            .removeInstance(this.selectedView, viewInstanceId);
        runInAction(() => {
            this.allViewsInstances = this.allViewsInstances.filter((viewInstance) => viewInstance.viewInstanceId !== viewInstanceId);
            this.isLoading = false;
        });
    };

    @action
    getAllViewInstances = async (viewInstanceId) => {
        this.isLoading = true;
        const instances = await appInjector.get(appServices.viewInstanceService).getAllInstances(viewInstanceId);
        runInAction(() => {
            this.isLoading = false;
            this.allViewsInstances = instances;
        });
    };

    @action
    createNewInstance = async (viewInstanceName: string) => {
        this.isLoading = true;
        const newInstance = await appInjector.get(appServices.viewInstanceService)
            .createNewInstance(this.selectedView, viewInstanceName);

        runInAction(() => {
            if (newInstance) {
                this.allViewsInstances.push(newInstance);
            }
            this.isLoading = false;
        });
    };

    @action
    updateInstanceName = async (viewInstanceId, viewInstanceName: string) => {
        const newInstanceName = await appInjector.get(appServices.viewInstanceService)
            .updateInstanceName(this.selectedView, viewInstanceId, viewInstanceName);
        runInAction(() => {
            const foundIndex = this.allViewsInstances.findIndex((view) => view.viewInstanceId === viewInstanceId);
            this.allViewsInstances[foundIndex].name = newInstanceName;
        });
    };

    @action
    updateRoute = async (viewInstanceId, newRoute: string) => {
        const newRouteName = await appInjector.get(appServices.viewInstanceService)
            .updateRoute(viewInstanceId, newRoute);
        runInAction(() => {
            const foundIndex = this.allViewsInstances.findIndex((view) => view.viewInstanceId === viewInstanceId);
            this.allViewsInstances[foundIndex].route = newRouteName;
        });
    };


    @action
    selectView = async (selectedView) => {
        if (selectedView)
            this.selectedView = selectedView;
        else if (!selectedView && this.viewNames && this.viewNames.length > 0) {
            const {viewId} = this.viewNames[0];
            this.selectedView = viewId;
            await this.getAllViewInstances(viewId);
        }
    };

    //</editor-fold>

}

export function getViewInstancesStore(initialState: any) {
    return new ViewInstancesStore({});
}