export default class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    } else {
      if (typeof sqft !== 'number') {
        throw new TypeError('Provide valid dimensions');
      }
      this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(dimensions) {
    if (typeof dimensions !== 'number') {
      throw new TypeError('Provide valid dimensions');
    }
    this._sqft = dimensions;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
