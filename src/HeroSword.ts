import { Weapon } from "./Weapon";
import { Hero } from "./Hero";
import { HeroSpear } from "./HeroSpear";

export class HeroSword extends Hero {
  constructor(name: string, power: number, life: number, weapon?: string) {
    super(name, power, life);
    this.weapon = new Weapon("Sword");
  }
  attack(opponent: Hero): void {
    if (opponent instanceof HeroSpear) {
      opponent.setLife(opponent.getLife() - (this.getPower() * 2));
    } else {
      super.attack(opponent);
    }
  }
}
