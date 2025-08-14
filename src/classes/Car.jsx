export class Car {
  constructor(name, model, price,image) {
    this.name = name;
    this.model = model;
    this.price = price;
    this.image=image;
  }

  getDetails() {
    return `${this.name} (${this.model}) - ₹${this.price}/day`;
  }
}


