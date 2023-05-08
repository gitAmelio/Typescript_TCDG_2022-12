type Callback = () => void; // function that returns void

export class Eventing {

    // store any Callback with any key
    events: { [key: string]: Callback[] } = {};

    on = (eventName: string, callback: Callback): void => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger = (eventName: string) => {
        const handlers = this.events[eventName];

        // guard against invalid handlers
        if(!handlers || handlers.length === 0) return;

        // call each callback function in handlers
        handlers.forEach(callback => {
            callback();
        })
    }
}