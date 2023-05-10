import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Collection } from './Collection';

export interface IUserProps {
    // (?) is to make properties optional
    id?: number;
    name?: string;  
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<IUserProps> {
    static buildUser(attrs: IUserProps): User {
        // serve pre-configured instance of User
        return new User(
            new Attributes<IUserProps>(attrs),
            new Eventing(),
            new ApiSync<IUserProps>(rootUrl)
        )
    }

    static buildUserCollection(): Collection<User, IUserProps> {
        return new Collection<User, IUserProps>(
            rootUrl,
            (json: IUserProps) => User.buildUser(json)
        );
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 200);
        this.set({age})
    }
}

