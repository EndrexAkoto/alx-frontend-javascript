export default class Building() {
  /* eslint-disable */
  export default class Building() {
  /* eslint-disable */
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    if (
      this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw Error(
	'Class extending Building must override evacuationWarningMessage',
      );
    }

    this._sqft = sqft;
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  // setter 
  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}
