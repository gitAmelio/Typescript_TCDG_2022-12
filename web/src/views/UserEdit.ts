import { View } from './View';
import { User, IUserProps } from '../models/User';
import { UserForm } from '../views/UserForm';
import { UserShow } from '../views/UserShow';

export class UserEdit extends View<User, IUserProps> {

    regionsMap(): { [key: string]: string } {
        return {
            userShow: '.user-show',
            userForm: '.user-form'
        }
    }
 
    // will get call automatically
    onRender(): void {
        const userShow = new UserShow(this.regions.userShow, this.model);
        userShow.render();
        const userForm = new UserForm(this.regions.userForm, this.model);
        userForm.render();

    }

    template(): string {
        return `
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `
    }
}