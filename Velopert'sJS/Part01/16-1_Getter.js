const nums = {
  a : 1,
  b : 2,
  get sum() {
    console.log( 'SUM' );
    return this.a + this.b;
  }
}

nums.a = 5;
console.log( nums );

console.log( nums.sum );

nums.b = 5;
console.log( nums.sum );