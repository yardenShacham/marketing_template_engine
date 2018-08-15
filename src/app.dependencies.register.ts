import {StyleService} from './core/styleService'
import {ViewService} from './core/viewService'
import {ViewInstanceService} from './core/viewInstanceService'
import {HttpService} from './core/httpService'
import {InstanceContentService} from './core/instanceContentService';
import {appInjector} from './core/appInjector';
import {appConfiguration} from './app.config';

import {appServices} from './consts/appServices';


export function registerDependencies() {
    if (appInjector) {
        appInjector.registerSingleton(appServices.styleService, StyleService);
        appInjector.registerSingleton(appServices.viewService, ViewService);
        appInjector.registerSingleton(appServices.viewInstanceService, ViewInstanceService);
        appInjector.registerSingleton(appServices.httpService, HttpService);
        appInjector.registerSingleton(appServices.instanceContentService, InstanceContentService);
        if (appConfiguration.isTestMode) {
            appInjector.registerSingleton("viewService", viewServiceMock, true);
        }
        return Promise.resolve();
    }
    else {
        return Promise.reject("rejector has does not exsit or have some problems");
    }
}


class viewServiceMock {

    allViewsMap = [{
        id: "fromLocalAirport",
        name: "From Local Airport"
    }]

    allViews = {
        fromLocalAirport: {
            bristol: {
                id: "fromLocalAirport-bristol",
                name: "fly to Bristol",
                content: {
                    header: "Holidays from Bristol Airport",
                    subHeader: `<p>Fly to an array of incredible destinations from Bristol airport this year. Unroll your beach mat and lie out under sunny skies in <a href="https://www.easyjet.com/en/holidays/spain/majorca/">Majorca</a> or the <a href="https://www.easyjet.com/en/holidays/portugal/algarve/">Algarve</a>. Or if you fancy throwing some shapes on the dancefloor head to <a href="https://www.easyjet.com/en/holidays/germany/berlin/berlin-city/">Berlin</a> and <a href="https://www.easyjet.com/en/holidays/poland/krakow/krakow-city/">Krakow </a>for nightlife you’ll never want to say goodbye to.</p>`,
                    addtionalHtml: `<div>addtionalHtml</div>`
                }
            },
            lasVegas: {
                id: "fromLocalAirport-bristol",
                name: " fly to Last vegas",
                content: {
                    header: "Holidays from Las vegas Airport",
                    subHeader: `<p>Fly to an array of incredible destinations from Las vegas airport this year. Unroll your beach mat and lie out under sunny skies in <a href="https://www.easyjet.com/en/holidays/spain/majorca/">Majorca</a> or the <a href="https://www.easyjet.com/en/holidays/portugal/algarve/">Algarve</a>. Or if you fancy throwing some shapes on the dancefloor head to <a href="https://www.easyjet.com/en/holidays/germany/berlin/berlin-city/">Berlin</a> and <a href="https://www.easyjet.com/en/holidays/poland/krakow/krakow-city/">Krakow </a>for nightlife you’ll never want to say goodbye to.</p>`,
                    addtionalHtml: `<div>addtionalHtml</div>`
                }
            }
        }
    };

    createNewViewInstance(viewName, instanceName) {
        if (this.allViews[viewName]) {
            this.allViews[viewName] = {
                id: `${viewName}-${instanceName.toLowerCase()}`,
                name: instanceName,
                content: {
                    header: `<h1>default hedaer :)</h1>`,
                    subHedaer: `<p>bla bla bla bla bla bla bla bla bla bla 
                               bla bla bla bla bla bla bla bla bla bla bla bla bla 
                               bla bla bla bla bla bla bla </p>`,
                    addtionalHtml: null
                }
            };

            return null;
        }
    }

    getAllViews() {
        return Promise.resolve(this.allViewsMap);
    }

    getViewTemplate(viewName) {
        return Promise.resolve(`<div className="conatiner">
                                       <div className="header">{header}</div>
                                       <div className="subHeader">{subHeader}</div>
                                       <div className="addtionl-html-container">{addtionalHtml}</div>
                                     </div>`
        );
    }

    updateViewInstanceContent(viewInstanceId, instanceContent) {
        const [viewName, viewInstanceName] = viewInstanceId.split('-');
        if (this.allViews[viewName]) {
            const instanceKey = viewInstanceName.toLowerCase();
            this.allViews[viewName][instanceKey].content = Object.assign(this.allViews[viewName][instanceKey].content, instanceContent);
            return Promise.resolve();
        }
    };

    getViewsInstances(viewName) {
        if (!viewName)
            return Promise.resolve([]);

        return Promise.resolve(Object.keys(this.allViews[viewName]).map((viewInstanceName) => this.allViews[viewName][viewInstanceName]));
    }

    removeViewInstance(viewInstanceId) {
        const [viewName, viewInstanceName] = viewInstanceId.split('-');
        if (this.allViews[viewName]) {
            const instanceKey = viewInstanceName.toLowerCase();
            delete this.allViews[viewName][instanceKey];
            return Promise.resolve();
        }
    }

    getViewInstance(viewInstanceId) {
        const [viewName, viewInstanceName] = viewInstanceId.split('-');
        const instanceKey = viewInstanceName.toLowerCase();
        return Promise.resolve(this.allViews[viewName] && this.allViews[viewName][instanceKey]);
    }
}






