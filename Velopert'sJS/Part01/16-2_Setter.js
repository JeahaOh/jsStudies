const dog = {
  _name: '댕댕이',
  set name( val ) {
    console.log( 'setter is called as : ' + val );
    this._name = val;
  }
}

console.log( dog._name );

dog.name = '뭉뭉이';
console.log( dog._name );