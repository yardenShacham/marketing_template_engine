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

    async createNewView(viewName) {
        const url = `${domain.local}${viewApiRoute.createNewView}`;
        const result = await appInjector.get(appServices.httpService).post(url, {viewName});
        return result;
    }

    async updateViewName(viewId, viewName) {
        const url = `${domain.local}${viewApiRoute.updateViewName(viewId)}`;
        const result = await appInjector.get(appServices.httpService).put(url, {viewName});
        return result;
    }

    async appendHtmlTemplate(viewId, html) {
        const url = `${domain.local}${viewApiRoute.appendHtmlTemplate}`;
        const result = await appInjector.get(appServices.httpService).post(url, {viewId, htmlTemplate: html});
        return result;
    }
}