export class StorageService {

    getItem(key) {
        const val = localStorage.getItem(key);
        return val ? JSON.parse(val) : null;
    }

    saveItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}