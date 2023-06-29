import { Hero } from "./Hero";
import { HeroSpear } from "./HeroSpear";
import { HeroAxe } from "./HeroAxe";
import { HeroSword } from "./HeroSword";

// let joan = new Hero("Joan", 60, 100);
// let leon = new Hero("Leon", 20, 100);
// console.log(joan);
// console.log(leon);
// console.log("joan est il en vie? " + joan.isAlive());

// joan.attack(leon);
// console.log("attaque 1 : leon est il en vie? " + leon.getLife());
// joan.attack(leon);
// joan.attack(leon);
// console.log("attaque 2 : leon est il en vie? " + leon.getLife());

let pierre = new HeroSword("Pierre", 25, 300);
console.log(pierre);
let paul = new HeroSpear("Paul", 15, 300);
console.log(paul);
let jean = new HeroAxe("Jean", 20, 300);
console.log(jean);

// jean.attack(pierre);
// pierre.attack(jean);
// console.log(jean.isAlive());

let heros1: Hero = jean;
let heros2: Hero = pierre;

while (heros1.isAlive() && heros2.isAlive()) {
      heros1.attack(heros2);
      heros2.attack(heros1);  
    if (heros1.getLife() <= 0 && heros2.getLife() <= 0) {
       console.log(`It's a draw`); 
    } else if (heros1.getLife() <= 0) {
        console.log(`${heros2.getName()} wins`);
    } else if (heros2.getLife() <= 0) {
      console.log(`${heros1.getName()} wins`);
    }
}