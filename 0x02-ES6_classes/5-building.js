export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    // console.log('here is', this)
    // console.log(!('evacuationWarningMessage' in this))
    if (this.constructor !== Building) {
      if (!('evacuationWarningMessage' in this)) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() { return this._sqft; }

  set sqft(value) { this._sqft = value; }
}
