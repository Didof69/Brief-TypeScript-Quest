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
      opponent.life -= this.power + this.weapon.damage;
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
const paul = new HeroSpear("Paul", 15, 300);
const jean = new HeroAxe("Jean", 20, 300);

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
let debutPartie: boolean = false;

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
}

chooseBtn.addEventListener("click", () => {
  chooseHero();

  if (heros1 == heros2) {
    winner.style.color = "red";
    winner.innerText = `${heros1.getName()} can't fight himself !`;
  } else {
    debutPartie = true;

    heros1.setLife(300);
    heros2.setLife(300);
  }
});

fightBtn.addEventListener("click", () => {
  if (!debutPartie || heros1.getLife() <= 0 || heros2.getLife() <= 0) {
    winner.style.color = "red";
    winner.innerText = `Choose Heroes before !`;
  } else {
    chooseHero();

    winner.style.color = "black";

    let result: string = "";
    let numberOfRound: number = 0;
    let recapRound: Array<{ round: number; lifeH1: number; lifeH2: number }> =
      [];

    // BOUCLE DU JEU //
    while (heros1.isAlive() && heros2.isAlive()) {
      heros1.attack(heros2);
      heros2.attack(heros1);

      numberOfRound++;
      recapRound.push({
        round: numberOfRound,
        lifeH1: heros1.getLife(),
        lifeH2: heros2.getLife(),
      });

      if (heros1.getLife() <= 0 && heros2.getLife() <= 0) {
        result = `It's a draw !`;
      } else if (heros1.getLife() <= 0) {
        result = `Hero ${heros2.getName()} wins !`;
      } else if (heros2.getLife() <= 0) {
        result = `Hero ${heros1.getName()} wins !`;
      }
    }

      for (let i = 0; i < recapRound.length; i++) {
        nbRound.innerText = `${numberOfRound}`;
        winner.innerText = `${heros1.getName()} : rest life ${
          recapRound[i].lifeH1
        } - ${heros2.getName()} rest life : ${recapRound[i].lifeH2}`;

        console.log(
          `Round ${recapRound[i].round}: ${heros1.getName()} rest life ${
            recapRound[i].lifeH1
          } - ${heros2.getName()} rest life ${recapRound[i].lifeH2}`
        );
      }

    recapRound.forEach(round => {
      nbRound.innerText = `${round.round}`;
      winner.innerText = `${heros1.getName()} : rest life ${
        round.lifeH1
        } - ${heros2.getName()} rest life : ${round.lifeH2}`;
       console.log(
          `Round ${round.round}: ${heros1.getName()} rest life ${
            round.lifeH1
          } - ${heros2.getName()} rest life ${round.lifeH2}`
        );
    });

    nbRound.innerText = `${numberOfRound}`;
    winner.innerText = `${result}`;
  }
});