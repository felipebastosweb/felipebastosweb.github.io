
export class StrategyContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

}

export class Strategy {
    constructor() {}
    run() {}
}

export class ConcreteStrategy1 extends Strategy {
    run() {
        super.run();
    }
}

export class ConcreteStrategy2 extends Strategy {
    run() {
        super.run();
    }
}

const context = StrategyContext();
context.strategy = ConcreteStrategy1();
context.strategy.run();
context.strategy = ConcreteStrategy2();
context.strategy.run();