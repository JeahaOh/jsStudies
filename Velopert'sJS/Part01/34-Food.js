class Food {
  constructor( name ) {
    this.name = name;
    this.brands = [];
  }
  addBrand( brand ) {
    this.brands.push( brand );
  }
  print() {
    console.log( `${this.name}을/를 파는 음식점들 :`);
    console.log( this.brands.join(', ') );
  }
}

const pizza = new Food( 'Pizza' );
pizza.addBrand( 'Pizza Hut' );
pizza.addBrand( 'Domino Pizza' );

const chicken = new Food( 'Chicken' );
chicken.addBrand( '굽네' );
chicken.addBrand( 'BBQ' );

pizza.print();
chicken.print();