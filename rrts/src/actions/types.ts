import { IFetchTodosAction, IDeleteTodoAction } from "./todos";

// Official docs on Typescript recommend using type aliases with hard-coded strings,
// not doing that.
export enum ActionTypes {
    fetchTodos, 
    deleteTodo
}

// action type union for all the actions
export type Action = IFetchTodosAction | IDeleteTodoAction;