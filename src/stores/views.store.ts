import {action, observable, computed} from 'mobx';
import {appInjector} from '../core/appInjector';

class ViewStore {


    //<editor-fold desc="All Views Page">
    @observable currentViewTemplate;
    @observable allViews = [];
    @observable searchViewNameOrId: string;

    @computed
    get searchedViews() {
        return this.allViews ? this.allViews.filter(({viewId, name}) => {
            return this.searchViewNameOrId ? name.toLowerCase()
                .includes(this.searchViewNameOrId.toLowerCase()) ? true : this.searchViewNameOrId === viewId : true;
        }) : []
    }

    @action
    async getAllViews() {
        //const result = await appInjector.get('viewService').getAllViews();
        //this.allViews = result || [];
        this.allViews = [{viewId: "test", name: "yarden"}];
    }

    @action
    searchViews = (searchViewNameOrId: string) => {
        this.searchViewNameOrId = searchViewNameOrId;
    };

    @action
    removeView = async (viewId: any) => {
        await appInjector.get('viewService').removeView(viewId);
        await this.getAllViews();
    };


    //</editor-fold>

    //<editor-fold desc="Edit View Page">
    //</editor-fold>

}

export function getViewsStore(initialState: any) {
    return new ViewStore();
}