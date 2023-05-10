import { User, IUserProps } from '../models/User';
import { View } from '../views/View';

export class UserForm extends View<User, IUserProps> {

    eventsMap(): {[key: string]: () => void } {
        return {
            // 'click:button': this.onButtonClick,
            // 'mouseenter:h1': this.onHeaderHover,
            // 'drag:div': this.onDragDiv
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick
        };
    }

    onSaveClick = (): void  => {
        this.model.save();
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');

        if (!input) return // Gaurd against null

        const name = input.value;

        this.model.set({ name });
    }

    // onHeaderHover(): void {
    //     console.log('H1 was hovered over');
    // }

    // onButtonClick(): void {
    //     console.log('Hi there')
    // }

    template(): string {
        return `
            <div>
                <input placeholder="${this.model.get('name') || 'User Name'}"/>
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-model">Save User</button>
            </div>
        `;
    }


}