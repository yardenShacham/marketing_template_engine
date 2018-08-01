import {action, observable, runInAction, computed} from 'mobx';
import {appInjector} from '../core/appInjector';

class ViewStore {


    //<editor-fold desc="All Views Page">
    @observable currentViewTemplate;
    @observable allViews = [];
    @observable searchViewNameOrId: string;
    @observable isLoading: boolean = false;

    @computed
    get searchedViews() {
        return this.allViews ? this.allViews.filter(({viewId, name}) => {
            return this.searchViewNameOrId ? name.toLowerCase()
                .includes(this.searchViewNameOrId.toLowerCase()) ? true : this.searchViewNameOrId === viewId : true;
        }) : []
    }

    @action
    async getAllViews() {
        this.isLoading = true;
        const result = await appInjector.get('viewService').getAllViews();
        runInAction(() => {
            this.isLoading = false;
            this.allViews = result || [];
        });
    }

    @action
    searchViews = (searchViewNameOrId: string) => {
        this.searchViewNameOrId = searchViewNameOrId;
    };

    @action
    removeView = async (viewId: any) => {
        this.isLoading = true;
        await appInjector.get('viewService').removeView(viewId);
        runInAction(() => {
            this.allViews = this.allViews.filter((view) => view.viewId !== viewId);
            this.isLoading = false;
        });
    };

    @action
    addNewView = async (viewName: any) => {
        this.isLoading = true;
        const newView = await appInjector.get('viewService').addNewView(viewName);
        runInAction(() => {
            this.allViews.push(newView);
            this.isLoading = false;
        });
    };

    @action
    updateViewName = async (viewId, viewName: any) => {
        const updatedView = await appInjector.get('viewService').updateViewName(viewId, viewName);
        runInAction(() => {
            const foundIndex = this.allViews.findIndex((view) => view.viewId === viewId);
            this.allViews[foundIndex] = updatedView;
        });
    };


    //</editor-fold>

    //<editor-fold desc="Edit View Page">
    //</editor-fold>

}

export function getViewsStore(initialState: any) {
    return new ViewStore();
}