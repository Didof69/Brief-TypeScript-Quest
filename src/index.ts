class Hero {
  private name: string;
  private power: number;
  private life: number;
  Weapon!: Weapon;

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
    opponent.life -= this.power-this.Weapon.damage;
  }

  isAlive(): boolean {
    if (this.life > 0) {
      return true;
    } else {
      return false;
    }
  }
}

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
    this.Weapon = axe;
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSword) {
      opponent.setLife(opponent.getLife() - (this.getPower() * 2 + this.Weapon.damage)
      );
    } else {
      opponent.setLife(opponent.getLife() - (this.getPower() + this.Weapon.damage)
      );
    }
  }
}

class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.Weapon = spear;
  }

    attack(opponent: Hero): void {
    if (opponent instanceof HeroAxe) {
      opponent.setLife( opponent.getLife() - (this.getPower() * 2 + this.Weapon.damage));
    } else {
      opponent.setLife(opponent.getLife() - (this.getPower() + this.Weapon.damage));
    }
  }
  }

class HeroSword extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.Weapon = sword;
  }

  attack(opponent: Hero): void {
    if (opponent instanceof HeroSpear) {
      opponent.setLife(opponent.getLife() - (this.getPower() * 2 + this.Weapon.damage));
    } else {
      opponent.setLife(opponent.getLife() - (this.getPower()+ this.Weapon.damage));
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
console.log("et1 " + heros1.getLife());
console.log("et2 " + heros2.getLife());

while (heros1.isAlive() && heros2.isAlive()) {
      heros1.attack(heros2);
      heros2.attack(heros1);
  console.log("et1 " + heros1.getLife());
  console.log("et2 " + heros2.getLife());

    if (heros1.getLife() <= 0 && heros2.getLife() <= 0) {
       console.log(`It's a draw`);
    } else if (heros1.getLife() <= 0) {
        console.log(`${heros2.getName()} wins`);
    } else if (heros2.getLife() <= 0) {
      console.log(`${heros1.getName()} wins`);
    }
}
