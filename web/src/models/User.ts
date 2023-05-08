import { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface IUserProps {
    // (?) is to make properties optional
    id?: number;
    name?: string;  
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {

    public events: Eventing = new Eventing();
    public sync: Sync<IUserProps> = new Sync<IUserProps>(rootUrl)
    public attributes: Attributes<IUserProps>;

    constructor(attrs: IUserProps) {
        this.attributes = new Attributes<IUserProps>(attrs);
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set(update: IUserProps): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.get('id');

        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an id');
        }

        this.sync.fetch(id).then ((response: AxiosResponse)=>{
            this.set(response.data);
        });

    }

    save(): void {
        this.sync.save(this.attributes.getAll())
            .then((response: AxiosResponse): void => {
                this.trigger('save');
            })
            .catch(() => {
                this.trigger('error');
            })
    }

}