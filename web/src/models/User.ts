import axios, { AxiosResponse  } from 'axios';

interface IUserProps {
    // (?) is to make properties optional
    id?: number;
    name?: string;  
    age?: number;
}

type Callback = () => void; // function that returns void

export class User {
    // store any Callback with any key
    events: { [key: string]: Callback[] } = {};

    constructor(private data: IUserProps) {}

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: IUserProps): void {
        // take all the properties in update and assign it to data.
        // this.data = {...this.data, ...update}
        Object.assign(this.data, update);  
    }

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string) {
        const handlers = this.events[eventName];

        // guard against invalid handlers
        if(!handlers || handlers.length === 0) return;

        // call each callback function in handlers
        handlers.forEach(callback => {
            callback();
        })
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void =>{
                this.set(response.data);
            }
        );
    }

    save(): void {
        const id = this.get('id');

        if(id){
            // Update with "put"
            axios.put(`http://localhost:3000/users/${id}`, this.data)
        } else {
            // Create with "post"
            axios.post(`http://localhost:3000/users`, this.data)
        }
    }

}