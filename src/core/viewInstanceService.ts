import {appInjector} from './appInjector';
import {appServices} from "../consts/appServices";
import {domain, viewApiRoute, viewInstanceApiRoute} from "../consts/api-routes";

export class ViewInstanceService {

    async getAllInstances(viewId) {
        const url = `${domain.local}${viewInstanceApiRoute.getAllInstances(viewId)}`;
        return await appInjector.get(appServices.httpService).get(url);
    }

    async removeInstance(viewId, viewInstanceId) {
        const url = `${domain.local}${viewInstanceApiRoute.removeInstance}`;
        return await appInjector.get(appServices.httpService).delete(url, {viewId, viewInstanceId})
    }

    async createNewInstance(viewId, viewInstanceName) {
        if (viewId && viewInstanceName) {
            const url = `${domain.local}${viewInstanceApiRoute.createNewInstance}`;
            const result = await appInjector.get(appServices.httpService)
                .post(url, {viewId, viewInstanceName});
            return result;
        }
        return null;
    }

    async updateInstanceName(viewId, viewInstanceId, viewInstanceName) {
        const url = `${domain.local}${viewInstanceApiRoute.updateInstanceName}`;
        return await appInjector.get(appServices.httpService).put(url, {
            viewId,
            viewInstanceId,
            viewInstanceName
        });
    }

    async updateRoute( viewInstanceId, newRoute) {
        const url = `${domain.local}${viewInstanceApiRoute.updateRoute}`;
        return await appInjector.get(appServices.httpService).put(url, {
            viewInstanceId,
            newRoute
        });
    }
}