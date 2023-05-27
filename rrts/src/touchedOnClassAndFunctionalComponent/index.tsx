import React from 'react';

interface AppProps {
    color?: string;
}

interface AppState {
    counter: number;
}

// functional component
export const AppFunctional = (props: AppProps): JSX.Element => {
    return <div>{props.color}</div>
}
// ReactDOM.render(
//     <App color="red"/>,
//     document.querySelector('#root')
// )

export class AppClass extends React.Component<AppProps> {
    
//     // Typescript way
    state = { counter: 0 };

//     //Javascript way needs a second type(AppState) 
//     // constructor(props: AppProps) {
//     //    super(props)

//     //    this.state = { counter: 0 };
//     // }


    onIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1});
    }

    onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1});
    }

    render () {
        return (
            <div>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
                {this.state.counter}
            </div>
        )
    }
}

