import { Weapon } from "./Weapon";

export class Hero {
  constructor(
    private name: string,
    private power: number,
    private life: number,
    public weapon?: Weapon
  ) {}

  getName(): string {
    return this.name;
  }

  getLife(): number {
    return this.life;
  }

  setLife(newLife: number): void{
    this.life = newLife;
  }

  getPower(): number {
    return this.power;
  }

  attack(opponent: Hero): void {
    opponent.life -= this.power;
  }

  isAlive(): boolean {
    if (this.life > 0) {
      return true;
    } else {
      return false;
    }
  }
}
