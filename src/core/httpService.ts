import {METHOD_TYPES} from '../consts/methodTypes';

export class HttpService {

    getHeaders() {
        return {
            "Content-Type": "application/json; charset=utf-8"
        }
    }

    getRequestMetadata(method, body?) {
        let reqMetadata: any = {
                method: method,
                mode: "cors",
                cache: "default",
                headers: this.getHeaders(),
            }
        ;
        if (body)
            reqMetadata.body = JSON.stringify(body);

        return reqMetadata;
    }

    async get(url) {
        const result = await fetch(url, this.getRequestMetadata(METHOD_TYPES.get));
        if (result.status === 200)
            return await result.json();

        return null;
    }

    async post(url, body) {
        return await fetch(url, this.getRequestMetadata(METHOD_TYPES.post, body));
    }

    async delete(url, body) {
        const result = await fetch(url, this.getRequestMetadata(METHOD_TYPES.delete, body));
        return result.status === 200;
    }
}