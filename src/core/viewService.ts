import {appInjector} from './appInjector';
import {appServices} from "../consts/appServices";
import {domain, viewApiRoute} from "../consts/api-routes";

export class ViewService {

    async getAllViews() {
        const url = `${domain.local}${viewApiRoute.getAllViews}`;
        return await appInjector.get(appServices.httpService).get(url);
    }

    async removeView(viewId) {
        const url = `${domain.local}${viewApiRoute.removeView}`;
        return await appInjector.get(appServices.httpService).delete(url, {viewId})
    }
}