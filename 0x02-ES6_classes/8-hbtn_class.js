export default class Airport {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() { return this._size; }

  set size(size) { this._size = size; }

  get location() { return this._location; }

  set location(value) { this._location = value; }

  Number() { return `${this.size}`; }

  String() { return `${this.location}`; }
}
