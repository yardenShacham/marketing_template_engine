import {appInjector} from './appInjector';
import {appServices} from "../consts/appServices";
import {domain, viewInstanceContentApiRoutes} from "../consts/api-routes";

export class InstanceContentService {

    async getInstanceHtmlContent(viewId, instanceId) {
        const url = `${domain.local}${viewInstanceContentApiRoutes.getHtmlContent(viewId, instanceId)}`;
        return await appInjector.get(appServices.httpService).get(url);
    }


    async updateContentParams(viewId, instanceId, contentParams) {
        const url = `${domain.local}${viewInstanceContentApiRoutes.updateContentParams(viewId, instanceId)}`;
        return await appInjector.get(appServices.httpService).put(url, {
            updateContentParams: contentParams
        });
    }


}