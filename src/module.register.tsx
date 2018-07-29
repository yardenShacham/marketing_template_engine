import home from './home';
import viewInstances from './view-instances';
import views from './view';

export function RegisterModules() {
    return new Promise((resolve, reject) => {
        home();
        views();
        viewInstances();
        resolve();
    });
}