import { Hero } from "./hero";
import { Weapon } from "./weapon";
import { HeroSword } from "./heroSword";

export class HeroAxe extends Hero {
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

const axe = new Weapon("Axe", 20);