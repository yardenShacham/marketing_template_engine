import {appInjector} from './appInjector';
import {appServices} from "../consts/appServices";
import {domain, viewApiRoute} from "../consts/api-routes";

export class ViewService {

    async getAllViews() {
        const url = `${domain.local}${viewApiRoute.getAllViews}`;
        return await appInjector.get(appServices.httpService).get(url);
    }

    async getViewStyles(viewId) {
        const url = `${domain.local}${viewApiRoute.getViewStyles(viewId)}`;
        return await appInjector.get(appServices.httpService).get(url);
    }

    async removeView(viewId) {
        const url = `${domain.local}${viewApiRoute.removeView}`;
        return await appInjector.get(appServices.httpService).delete(url, {viewId})
    }

    async createNewView(viewName) {
        const url = `${domain.local}${viewApiRoute.createNewView}`;
        return await appInjector.get(appServices.httpService).post(url, {viewName});
    }

    async updateViewName(viewId, viewName) {
        const url = `${domain.local}${viewApiRoute.updateViewName(viewId)}`;
        return await appInjector.get(appServices.httpService).put(url, {viewName});
    }

    async appendHtmlTemplate(viewId, html) {
        const url = `${domain.local}${viewApiRoute.appendHtmlTemplate(viewId)}`;
        return await appInjector.get(appServices.httpService).post(url, {htmlTemplate: html});
    }

    async appendStyles(viewId, styles) {
        const url = `${domain.local}${viewApiRoute.appendStyles(viewId)}`;
        return await appInjector.get(appServices.httpService).post(url, {styles});
    }

    async appendJs(viewId, js) {
        const url = `${domain.local}${viewApiRoute.appendJs(viewId)}`;
        return await appInjector.get(appServices.httpService).post(url, {js});
    }

}