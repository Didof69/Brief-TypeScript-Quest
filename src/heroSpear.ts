import { Hero } from "./hero";
import { Weapon } from "./weapon";
import { HeroAxe } from "./heroAxe";

export class HeroSpear extends Hero {
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

const spear = new Weapon("Spear", 50);