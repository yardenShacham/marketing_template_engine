import dashboard from './dashboard';

export function RegisterModules() {
    return new Promise((resolve, reject) => {
        dashboard();
        resolve();
    });
}