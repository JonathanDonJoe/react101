// class Student {
//     constructor(name, seatNum) {
//         console.log("Constructor is running");
//         this.name = name;
//         this.seatNum = seatNum;
//         console.log(this);
//     };
//     study() {
//       console.log(`${this.name} is studying`)
//     }
// };

// const sean = new Student('Sean', 1);
// const nathan = new Student('Nathan', 2);

// let students = [
//   new Student ('Jon', 3),
//   new Student ('Ben', 4)
// ];

// console.log(students[0].name);
// students[0].study();







// function Student(name, seatNum) {
//     this.name=name;
//     this.seatNum = seatNum;
// };

// Student.prototype.species = 'human'
// Student.prototype.study = function() {
//     console.log(`${this.name} is studying`);
// };

// const s1 = new Student('Kyle', 7);
// s1.study();

// console.log(s1.species)








// class Car {
//     constructor(model, make, mpg) {
//         this.model = model;
//         this.make = make;
//         this.mpg = mpg;
//         this.tankSize = 30
//     }
//     distanceToEmpty() { 
//         return 30*this.mpg;
//     }
//     drive() {
//       console.log('Vroooom')
//     }
// }

// const nathansCar = new Car('GMC', 'Acadia', 14);
// console.log(nathansCar.distanceToEmpty())

// class ElectricCar extends Car{
//   constructor(model, make, batterySize) {
//     super(make, model, null);
//     this.batterySize = batterySize;
//   }
//   distanceToEmpty() {
//     return 30*this.batterySize;
//   }
// }

// const anthonysProbablyCar = new ElectricCar('Tesla', 3, 30)
// console.log(anthonysProbablyCar.distanceToEmpty())
// anthonysProbablyCar.drive()