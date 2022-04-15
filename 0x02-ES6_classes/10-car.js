export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() { return this._brand; }

  set brand(brand) { this._brand = brand; }

  get motor() { return this._motor; }

  set motor(value) { this._motor = value; }

  get color() { return this._color; }

  set color(value) { this._color = value; }

  cloneCar() { Symbol(this); }
}
