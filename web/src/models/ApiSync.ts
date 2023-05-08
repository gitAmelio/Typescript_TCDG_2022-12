import axios, { AxiosPromise } from 'axios';

interface IHasId {
    id?: number;
}

export class ApiSync<T extends IHasId> {

    constructor(public rootUrl: string) {}
 
    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
            // .then((response: AxiosResponse): void =>{
            //     this.set(response.data);
            // }
        // );
    }

    save(data: T): AxiosPromise {
        // look in data for an ID
        const { id } = data;

        if (id) {
            // Update with "put"
            return axios.put(`${this.rootUrl}/${id}`, data)
        } else {
            // Create with "post"
            return axios.post(`${this.rootUrl}`, data)
        }
    }
}