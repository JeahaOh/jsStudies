/**
 * Object Oriented Programming
 */

var grades = {
  'list' : {
      'Jeaha': 10,
      'IsoL': 20,
      'Sorrowkissed': 5
  },
  'show' : function() {
    // console.log( this.list );
    for( var name in this.list ){
      console.log(name, ':' , this.list[name]);
    }
  }
}

console.log( "List : Jeaha : " + grades['list']['Jeaha'] );
// grades['show']();
grades.show();