var arr = ['a', 'b', 'c'];
console.log('Object.keys(arr) : ', Object.keys(arr));
//  Object.keys(arr) : [ '0', '1', '2' ]

var o = new Object();
console.log('o.toString() : ', o.toString());
//  o.toString() : [object Object]

var jeje = {
  'name' : 'jeje',
  'age' : 28,
  'city' : 'seoul'
};
jeje
//  { name: 'jeje', age: 28, city: 'seoul' }
Object.create(jeje);
//  {}
Object.keys(jeje);
//  ['name', 'age', 'city' ]