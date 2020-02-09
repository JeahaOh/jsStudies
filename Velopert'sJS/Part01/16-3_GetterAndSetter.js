const dog = {
  _name: '댕댕이',
  get name() {
    console.log( 'getter is called' );
    return this._name;
  },
  set name( val ) {
    console.log( 'setter is called as : ' + val );
    this._name = val;
  }
}

console.log( dog.name );

dog.name = '몽몽이';
console.log( dog.name );