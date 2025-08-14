import { Car } from './Car';

export class LuxuryCar extends Car {
  constructor(name, model, price,image, feature) {
    super(name, model, price,image);
    this.feature = feature;
  }

  getLuxuryDetails() {
    return `${this.getDetails()} - Includes: ${this.feature}`;
  }
}

