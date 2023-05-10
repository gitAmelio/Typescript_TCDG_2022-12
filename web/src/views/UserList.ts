import { User, IUserProps } from '../models/User';
import { CollectionView } from '../views/CollectionView';
import { UserShow } from '../views/UserShow';

export class UserList extends CollectionView<User, IUserProps> {

    renderItem(model: User, ItemParent: Element): void {
        const userShow = new UserShow(ItemParent, model)
        userShow.render();
    }
}