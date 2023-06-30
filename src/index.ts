class Hero {
  private name: string;
  private power: number;
  private life: number;
  weapon!: Weapon;

  constructor(name: string, power: number, life: number) {
    this.name = name;
    this.power = power;
    this.life = life;
  }

  getName(): string {
    return this.name;
  }

  getLife(): number {
    return this.life;
  }

  setLife(newLife: number): void {
    this.life = newLife;
  }

  getPower(): number {
    return this.power;
  }

  attack(opponent: Hero): void {
    if (typeof this.weapon === undefined) {
      opponent.life -= this.power;
    }
  }

  isAlive(): boolean {
    if (this.life > 0) {
      return true;
    } else {
      return false;
    }
  }
}

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

class Weapon {
  name: string;
  damage: number;

  constructor(name: string, damage: number) {
    this.name = name;
    this.damage = damage;
  }
}

const axe = new Weapon("Axe", 20);
const spear = new Weapon("Spear", 50);
const sword = new Weapon("Sword", 30);

class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = axe;
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSword) {
      opponent.setLife(
        opponent.getLife() - (this.getPower() * 2 + this.weapon.damage)
      );
    } else {
      opponent.setLife(
        opponent.getLife() - (this.getPower() * 2 + this.weapon.damage)
      );
    }
  }
}

class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = spear;
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroAxe) {
      opponent.setLife(
        opponent.getLife() - (this.getPower() * 2 + this.weapon.damage)
      );
    } else {
      opponent.setLife(
        opponent.getLife() - (this.getPower() + this.weapon.damage)
      );
    }
  }
}

class HeroSword extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = sword;
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSpear) {
      opponent.setLife(
        opponent.getLife() - (this.getPower() * 2 + this.weapon.damage)
      );
    } else {
      opponent.setLife(
        opponent.getLife() - (this.getPower() * 2 + this.weapon.damage)
      );
    }
  }
}

const pierre = new HeroSword("Pierre", 25, 300);
// console.log(pierre);
const paul = new HeroSpear("Paul", 15, 300);
// console.log(paul);
const jean = new HeroAxe("Jean", 20, 300);
// console.log(jean);

// jean.attack(pierre);
// pierre.attack(jean);
// console.log(jean.getLife());
// console.log(pierre.getLife());

let heros1: Hero = pierre;
let heros2: Hero = jean;
console.log(heros1.getName() + " attacks " + heros2.getName());
console.log(jean);
console.log(paul);
console.log("la vie du héros 1 " + heros1.getLife());
console.log("la vie du héros 2 " + heros2.getLife());

let numberOfRound: number = 0;

while (heros1.isAlive() && heros2.isAlive()) {
  heros1.attack(heros2);
  heros2.attack(heros1);
  console.log("la vie du héros 1 " + heros1.getLife());
  console.log("la vie du héros 2 " + heros2.getLife());
  numberOfRound++;
  console.log(numberOfRound);
  
  if (heros1.getLife() <= 0 && heros2.getLife() <= 0) {
    console.log(`It's a draw`);
  } else if (heros1.getLife() <= 0) {
    console.log(`${heros2.getName()} wins`);
  } else if (heros2.getLife() <= 0) {
    console.log(`${heros1.getName()} wins`);
  }
}
