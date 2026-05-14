interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class UpiPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`Paid ${amount} using UPI`);
  }
}

class PaymentProcessor {
  private strategy: PaymentStrategy;
  
  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  process(amount: number) {
    this.strategy.pay(amount);
  }
}

const processor = new PaymentProcessor(
  new UpiPayment()
);

processor.process(500);