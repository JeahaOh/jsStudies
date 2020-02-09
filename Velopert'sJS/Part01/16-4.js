const nums = {
  _a : 1,
  _b : 2,
  sum : 3,
  calculate() {
    console.log( 'calculate' );
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a( val ) {
    this._a = val;
    this.calculate();
  },
  set b( val ) {
    this._b = val;
    this.calculate();
  }
}

console.log( nums.sum );

nums.a = 5;
nums.b = 7;

nums.a = 9;
console.log( nums.sum );