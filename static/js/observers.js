/***
 * https://refactoring.guru/pt-br/design-patterns/creational-patterns
 * **/


export class Observable {
    constructor() {
        this.observers = [];
    }
  
    subscribe(func) {
        this.observers.push(func);
    }
  
    unsubscribe(func) {
        this.observers = this.observers.filter(observer => observer !== func);
    }
  
    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}


export class EventHandler extends Observable {

}
