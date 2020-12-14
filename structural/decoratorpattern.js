var Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = 'male';
};

// a new instance of Person can then easily be created as follows:
var clark = new Person( "Clark" , "Kent" );
// Define a subclass constructor for for 'Superhero':
var Superhero = function (firstName, lastName, powers) {
    // Invoke the superclass constructor on the new object
    // then use .call() to invoke the constructor as a method of
    // the object to be initialized.
    Person.call(this, firstName, lastName);
    // Finally, store their powers, a new array of traits not found in a normal 'Person'
    this.powers = powers;
};

SuperHero.prototype = Object.create(Person.prototype);
var superman = new Superhero( "Clark" ,"Kent" , ['flight','heat-vision'] );
console.log(superman); // includes superhero props as well as gender

/**
    Decorators are used when it's necessary to delegate responsibilities to an object where
    it doesn't make sense to subclass it. A common reason for this is that the number of
    features required demand for a very large quantity of subclasses. Can you imagine
    having to define hundreds or thousands of subclasses for a project? It would likely
    become unmanageable fairly quickly.
*/

//Example 1: Basic decoration of existing object constructors with new functionality

function vehicle( vehicleType ){
    // properties and defaults
    this.vehicleType = vehicleType || 'car',
    this.model = 'default',
    this.license = '00000-000'
}

// Test instance for a basic vehicle
var testInstance = new vehicle('car');
console.log(testInstance);
// vehicle: car, model:default, license: 00000-000
// Lets create a new instance of vehicle, to be decorated*/
var truck = new vehicle('truck');
// New functionality we're decorating vehicle with
truck.setModel = function( modelName ){
    this.model = modelName;
}

truck.setColor = function( color ){
    this.color = color;
}
// Test the value setters and value assignment works correctly
truck.setModel('CAT');
truck.setColor('blue');
console.log(truck);
// vehicle:truck, model:CAT, color: blue
// Demonstrate 'vehicle' is still unaltered
var secondInstance = new vehicle('car');
console.log(secondInstance);

// Test the value setters and value assignment works correctly
truck.setModel('CAT');
truck.setColor('blue');
console.log(truck);
// vehicle:truck, model:CAT, color: blue
// Demonstrate 'vehicle' is still unaltered
var secondInstance = new vehicle('car');
console.log(secondInstance);
// as before, vehicle: car, model:default, license: 00000-000

//Example 2: Simply decorate objects with multiple decorators

// What we're going to decorate
function MacBook() {
    this.cost = function () { return 997; };
    this.screenSize = function () { return 13.3; };
}
// Decorator 1
function Memory( macbook ) {
    var v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    }
}
// Decorator 2
function Engraving( macbook ){
    var v = macbook.cost();
    macbook.cost = function(){
        return v + 200;
    };
}
// Decorator 3
function Insurance( macbook ){
    var v = macbook.cost();
        macbook.cost = function(){
        return v + 250;
    };
}

var mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);
console.log(mb.cost()); //1522
console.log(mb.screenSize()); //13.3


//https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
