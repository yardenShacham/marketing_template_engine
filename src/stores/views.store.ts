import {action, observable, runInAction, computed} from 'mobx';
import {appInjector} from '../core/appInjector';
import {appServices} from "../consts/appServices";

class ViewStore {


    //<editor-fold desc="All Views Page">
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
        const result = await appInjector.get(appServices.viewService).getAllViews();
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
        await appInjector.get(appServices.viewService).removeView(viewId);
        runInAction(() => {
            this.allViews = this.allViews.filter((view) => view.viewId !== viewId);
            this.isLoading = false;
        });
    };

    @action
    createNewView = async (viewName: any) => {
        this.isLoading = true;
        const newView = await appInjector.get(appServices.viewService).createNewView(viewName);
        runInAction(() => {
            this.allViews.push(newView);
            this.isLoading = false;
        });
    };

    @action
    updateViewName = async (viewId, viewName: any) => {
        const updatedView = await appInjector.get(appServices.viewService).updateViewName(viewId, viewName);
        runInAction(() => {
            const foundIndex = this.allViews.findIndex((view) => view.viewId === viewId);
            this.allViews[foundIndex] = updatedView;
        });
    };

    @action
    appendHtmlTemplate = async (viewId, htmlTemmplate) => {
        const updatedView = await appInjector.get(appServices.viewService).appendHtmlTemplate(viewId, htmlTemmplate);
        runInAction(() => {
            const foundIndex = this.allViews.findIndex((view) => view.viewId === viewId);
            this.allViews[foundIndex] = updatedView;
        });
    };

    @action
    appendStyles = async (viewId, styles) => {
        const hasStyles = await appInjector.get(appServices.viewService).appendStyles(viewId, styles);
        runInAction(() => {
            const foundIndex = this.allViews.findIndex((view) => view.viewId === viewId);
            this.allViews[foundIndex].hasStyles = hasStyles;
        });
    };

    @action
    appendJs = async (viewId, js) => {
        const hasJs = await appInjector.get(appServices.viewService).appendJs(viewId, js);
        runInAction(() => {
            const foundIndex = this.allViews.findIndex((view) => view.viewId === viewId);
            this.allViews[foundIndex].hasJs = hasJs;
        });
    };



    //</editor-fold>

    //<editor-fold desc="Edit View Page">
    //</editor-fold>

}

export function getViewsStore(initialState: any) {
    return new ViewStore();
}