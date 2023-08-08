import { Weapon } from "./weapon";

export class Hero {
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
