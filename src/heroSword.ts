import { Hero } from "./hero"; 
import { Weapon } from "./weapon";
import { HeroSpear } from "./heroSpear";

export class HeroSword extends Hero {
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

const sword = new Weapon("Sword", 30);