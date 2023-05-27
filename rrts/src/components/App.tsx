import React from 'react';
import { connect } from 'react-redux';
import { ITodo, fetchTodos, deleteTodo } from '../actions';
import { IStoreState } from '../reducures';

interface AppProps {
    todos: ITodo[];
    fetchTodos: Function; // react-redux does not know what a redux-thunk type action creator is
    deleteTodo: typeof deleteTodo;
}

// option 2 to initialize state
// then pass type to component as second generic type
interface AppState {
    fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
    // option 1 to initialize state
    // state = { fetching: false } OR

    // option 2 to initialize state
    // in constructor
    constructor(props: AppProps) {
        super(props);

        this.state = { fetching: false };
    }

    componentDidUpdate(prevProps: AppProps): void {
        if(!prevProps.todos.length && this.props.todos.length) {
            this.setState( { fetching: false });
        }
    }

    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState( {fetching: true});
    };

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id)
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: ITodo) => {
            return <div onClick={()=>this.onTodoClick(todo.id)} key={todo.id}>{todo.title}</div>
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.state.fetching ? 'LOADING' : null}
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = ({ todos }: IStoreState): { todos: ITodo[] } => {
    // return { todos: state.todos };
    return { todos };
}

export const App = connect(
    mapStateToProps,
    { fetchTodos, deleteTodo }
)(_App);