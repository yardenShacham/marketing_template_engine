import home from './home';
import viewInstances from './view-instances';
import editInstanceContent from './edit-instance-content';
import views from './view';

export function RegisterModules() {
    return new Promise((resolve, reject) => {
        home();
        views();
        viewInstances();
        editInstanceContent();
        resolve();
    });
}