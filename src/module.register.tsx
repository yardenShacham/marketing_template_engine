import home from './home';
import views from './views';

export function RegisterModules() {
    return new Promise((resolve, reject) => {
        home();
        views();
        resolve();
    });
}