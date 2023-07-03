"use strict";
//  INITIALISATION HERO //
class Hero {
    constructor(name, power, life) {
        this.name = name;
        this.power = power;
        this.life = life;
    }
    getName() {
        return this.name;
    }
    getLife() {
        return this.life;
    }
    setLife(newLife) {
        this.life = newLife;
    }
    getPower() {
        return this.power;
    }
    attack(opponent) {
        if (this.weapon) {
            opponent.life -= this.power + this.weapon.damage;
        }
        else {
            opponent.life -= this.power;
        }
    }
    isAlive() {
        return this.life > 0;
    }
}
// INITIALISATION ARME //
class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}
const axe = new Weapon("Axe", 20);
const spear = new Weapon("Spear", 50);
const sword = new Weapon("Sword", 30);
// INITIALISATION SOUS CLASSE HERO
class HeroAxe extends Hero {
    constructor(name, power, life) {
        super(name, power, life);
        this.weapon = axe;
    }
    attack(opponent) {
        if (opponent instanceof HeroSword) {
            opponent.setLife(opponent.getLife() - (this.getPower() * 2 + this.weapon.damage));
        }
        else {
            super.attack(opponent);
        }
    }
}
class HeroSpear extends Hero {
    constructor(name, power, life) {
        super(name, power, life);
        this.weapon = spear;
    }
    attack(opponent) {
        if (opponent instanceof HeroAxe) {
            opponent.setLife(opponent.getLife() - (this.getPower() * 2 + this.weapon.damage));
        }
        else {
            super.attack(opponent);
        }
    }
}
class HeroSword extends Hero {
    constructor(name, power, life) {
        super(name, power, life);
        this.weapon = sword;
    }
    attack(opponent) {
        if (opponent instanceof HeroSpear) {
            opponent.setLife(opponent.getLife() - (this.getPower() * 2 + this.weapon.damage));
        }
        else {
            super.attack(opponent);
        }
    }
}
const pierre = new HeroSword("Pierre", 25, 300);
const paul = new HeroSpear("Paul", 15, 300);
const jean = new HeroAxe("Jean", 20, 300);
// INITIALISATION INTERFACE //
const winner = document.getElementById("winner");
const nbRound = document.getElementById("nbRound");
let nameHero1 = document.getElementById("nameHero1");
let nameHero2 = document.getElementById("nameHero2");
let weaponH1 = document.getElementById("weaponH1");
let weaponH2 = document.getElementById("weaponH2");
let imgHero1 = document.getElementById("imgHero1");
let imgHero2 = document.getElementById("imgHero2");
const fightBtn = document.getElementById("fightBtn");
const chooseBtn = document.getElementById("chooseBtn");
let hero1 = document.getElementById("hero1Choice");
let hero2 = document.getElementById("hero2Choice");
let heros1;
let heros2;
let debutPartie = false;
// PARAMETRAGE DES HEROS //
function chooseHero() {
    if (hero1.value == "heroAxe") {
        heros1 = jean;
    }
    else if (hero1.value == "heroSpear") {
        heros1 = paul;
    }
    else {
        heros1 = pierre;
    }
    if (hero2.value == "heroAxe") {
        heros2 = jean;
    }
    else if (hero2.value == "heroSpear") {
        heros2 = paul;
    }
    else {
        heros2 = pierre;
    }
    if (hero1.value == "heroAxe") {
        imgHero1.src = "./images/axe.jpg";
        nameHero1.innerHTML = `${jean.getName()}`;
        weaponH1.innerText = `got a ${jean.weapon.name}`;
    }
    else if (hero1.value == "heroSpear") {
        imgHero1.src = "./images/spear.jpg";
        nameHero1.innerHTML = `${paul.getName()}`;
        weaponH1.innerText = `got a ${paul.weapon.name}`;
    }
    else {
        imgHero1.src = "./images/sword.jpg";
        nameHero1.innerHTML = `${pierre.getName()}`;
        weaponH1.innerText = `got a ${pierre.weapon.name}`;
    }
    if (hero2.value == "heroAxe") {
        imgHero2.src = "./images/axe.jpg";
        nameHero2.innerHTML = `${jean.getName()}`;
        weaponH2.innerText = `got a ${jean.weapon.name}`;
    }
    else if (hero2.value == "heroSpear") {
        imgHero2.src = "./images/spear.jpg";
        nameHero2.innerHTML = `${paul.getName()}`;
        weaponH2.innerText = `got a ${paul.weapon.name}`;
    }
    else {
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
    }
    else {
        debutPartie = true;
        heros1.setLife(300);
        heros2.setLife(300);
    }
});
fightBtn.addEventListener("click", () => {
    if (!debutPartie || heros1.getLife() <= 0 || heros2.getLife() <= 0) {
        winner.style.color = "red";
        winner.innerText = `Choose Heroes before !`;
    }
    else {
        chooseHero();
        winner.style.color = "black";
        // BOUCLE DU JEU //
        let result = "";
        let numberOfRound = 0;
        while (heros1.isAlive() && heros2.isAlive()) {
            heros1.attack(heros2);
            heros2.attack(heros1);
            numberOfRound++;
            console.log(`la vie du héros 1 : ${heros1.getLife()}`);
            console.log(`la vie du héros 2 : ${heros2.getLife()}`);
            if (heros1.getLife() <= 0 && heros2.getLife() <= 0) {
                result = `It's a draw !`;
            }
            else if (heros1.getLife() <= 0) {
                result = `Hero ${heros2.getName()} wins !`;
            }
            else if (heros2.getLife() <= 0) {
                result = `Hero ${heros1.getName()} wins !`;
            }
        }
        nbRound.innerText = `${numberOfRound}`;
        winner.innerText = `${result}`;
    }
});
// nbRound.innerText = `${numberOfRound}`;
// winner.innerText = `${heros1.getName()} life : ${heros1.getLife()} - ${heros2.getName()} life : ${heros2.getLife()}`;
