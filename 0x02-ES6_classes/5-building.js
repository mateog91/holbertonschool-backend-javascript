export default class Building {
	constructor(sqft, currency) {
		if (this.constructor != Building) {
			if (!('evacuationWarningMessage' in this.constructor)) {
			}
			throw new Error('Class extending Building must override evacuationWarningMessage')
		}
		this._sqft = sqft;
		}
		get sqft() { return this._sqft; };
		set sqft(value) { this._sqft = value; };
	}


