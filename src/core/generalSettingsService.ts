import {appInjector} from '../core/appInjector';
import {appServices} from '../consts/appServices';
import {domain, generalRoute} from "../consts/api-routes";

export class GeneralSettingsService {
    storageKey;

    constructor() {
        this.storageKey = "general-settings";
    }

    async reloadSettings() {
        const url = `${domain.local}${generalRoute.getGeneralSettings}`;
        const settings = await appInjector.get(appServices.httpService).get(url);
        if (settings) {
            appInjector.get(appServices.storageService).saveItem(this.storageKey, settings);
        }
    }

    getSettings(settingKeys) {
        const allSettings = appInjector.get(appServices.storageService).getItem(this.storageKey);
        return Object.keys(allSettings).reduce((settings, nextKey) => {
            if (allSettings.hasOwnProperty(nextKey)) {
                settings[nextKey] = allSettings[nextKey];
            }
            return settings;
        }, {});
    }


}