import { Weapon } from "./Weapon";
import { Hero } from "./Hero";
import { HeroAxe } from "./HeroAxe";

export class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number, weapon?: string) {
    super(name, power, life);
    this.weapon = new Weapon("Spear");
  }
  attack(opponent: Hero): void {
    if (opponent instanceof HeroAxe) {
      opponent.setLife(opponent.getLife() - this.getPower() * 2);
    } else {
      super.attack(opponent);

    }
  }
}
