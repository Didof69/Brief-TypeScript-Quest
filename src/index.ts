//  INITIALISATION HERO //

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
    if (this.weapon) {
      opponent.life -= this.power - this.weapon.damage;
    } else {
      opponent.life -= this.power;
    }
  }

  isAlive(): boolean {
    return this.life > 0;
  }
}

// INITIALISATION ARME //
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

// INITIALISATION SOUS CLASSE HERO
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
      super.attack(opponent);
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
      super.attack(opponent);
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
      super.attack(opponent);
    }
  }
}

const pierre = new HeroSword("Pierre", 25, 300);
// console.log(pierre);
const paul = new HeroSpear("Paul", 15, 300);
// console.log(paul);
const jean = new HeroAxe("Jean", 20, 300);
// console.log(jean);

// let heros1: Hero = pierre;
// let heros2: Hero = jean;
// console.log(heros1.getName() + " attacks " + heros2.getName());
// console.log(jean);
// console.log(paul);
// console.log("la vie du héros 1 " + heros1.getLife());
// console.log("la vie du héros 2 " + heros2.getLife());

// INITIALISATION INTERFACE //

const winner = document.getElementById("winner") as HTMLParagraphElement;
const nbRound = document.getElementById("nbRound") as HTMLParagraphElement;
let nameHero1 = document.getElementById("nameHero1") as HTMLParagraphElement;
let nameHero2 = document.getElementById("nameHero2") as HTMLParagraphElement;
let weaponH1 = document.getElementById("weaponH1") as HTMLParagraphElement;
let weaponH2 = document.getElementById("weaponH2") as HTMLParagraphElement;
let imgHero1 = document.getElementById("imgHero1") as HTMLImageElement;
let imgHero2 = document.getElementById("imgHero2") as HTMLImageElement;
const fightBtn = document.getElementById("fightBtn") as HTMLButtonElement;
const chooseBtn = document.getElementById("chooseBtn") as HTMLButtonElement;
let hero1 = document.getElementById("hero1Choice") as HTMLSelectElement;
let hero2 = document.getElementById("hero2Choice") as HTMLSelectElement;
let heros1: Hero;
let heros2: Hero;

// PARAMETRAGE DES HEROS //
function chooseHero(): void {
  if (hero1.value == "heroAxe") {
    heros1 = jean;
  } else if (hero1.value == "heroSpear") {
    heros1 = paul;
  } else {
    heros1 = pierre;
  }
  if (hero2.value == "heroAxe") {
    heros2 = jean;
  } else if (hero2.value == "heroSpear") {
    heros2 = paul;
  } else {
    heros2 = pierre;
  }
}

chooseBtn.addEventListener("click", () => {
  chooseHero();

  if (hero1.value == "heroAxe") {
    imgHero1.src = "./images/axe.jpg";
    nameHero1.innerHTML = `${jean.getName()}`;
    weaponH1.innerText = `got a ${jean.weapon.name}`;
  } else if (hero1.value == "heroSpear") {
    imgHero1.src = "./images/spear.jpg";
    nameHero1.innerHTML = `${paul.getName()}`;
    weaponH1.innerText = `got a ${paul.weapon.name}`;
  } else {
    imgHero1.src = "./images/sword.jpg";
    nameHero1.innerHTML = `${pierre.getName()}`;
    weaponH1.innerText = `got a ${pierre.weapon.name}`;
  }
  if (hero2.value == "heroAxe") {
    imgHero2.src = "./images/axe.jpg";
    nameHero2.innerHTML = `${jean.getName()}`;
    weaponH2.innerText = `got a ${jean.weapon.name}`;
  } else if (hero2.value == "heroSpear") {
    imgHero2.src = "./images/spear.jpg";
    nameHero2.innerHTML = `${paul.getName()}`;
    weaponH2.innerText = `got a ${paul.weapon.name}`;
  } else {
    imgHero2.src = "./images/sword.jpg";
    nameHero2.innerHTML = `${pierre.getName()}`;
    weaponH2.innerText = `got a ${pierre.weapon.name}`;
  }
});

fightBtn.addEventListener("click", () => {
  chooseHero();

  if (hero1.value == "heroAxe") {
    heros1 = jean;
  } else if (hero1.value == "heroSpear") {
    heros1 = paul;
  } else {
    heros1 = pierre;
  }
  if (hero2.value == "heroAxe") {
    heros2 = jean;
  } else if (hero2.value == "heroSpear") {
    heros2 = paul;
  } else {
    heros2 = pierre;
  }

  // BOUCLE DU JEU //
  let numberOfRound: number = 0;
  let result: string = "";
  while (heros1.isAlive() && heros2.isAlive()) {
    heros1.attack(heros2);
    heros2.attack(heros1);
    console.log("la vie du héros 1 " + heros1.getLife());
    console.log("la vie du héros 2 " + heros2.getLife());
    numberOfRound++;
    if (heros1.getLife() <= 0 && heros2.getLife() <= 0) {
      result = `It's a draw !`;
    } else if (heros1.getLife() <= 0) {
      result = `Hero ${heros2.getName()} wins !`;
    } else if (heros2.getLife() <= 0) {
      result = `Hero ${heros1.getName()} wins !`;
    }
  }
  nbRound.innerText = `${numberOfRound}`;
  console.log(nbRound);

  winner.innerText = `${result}`;
  console.log(result);
});
