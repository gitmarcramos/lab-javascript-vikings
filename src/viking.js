// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;

    return this.health <= 0
      ? `${this.name} has died in act of combat`
      : `${this.name} has received ${damage} points of damage`;
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}

const vik = new Viking("Vik", 100, 150)
const harold = new Viking("Harold", 80, 100)




// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage){
    this.health -= damage;

    return this.health <= 0 ? `A Saxon has died in combat` : `A Saxon has received ${damage} points of damage` 
  }
}

const brit = new Saxon(90, 100)
const brit2 = new Saxon(120, 10)
const brit3 = new Saxon(10, 100)




// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy= [];
  }

  addViking(Viking){
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }

  vikingAttack(){
    
    let randomViking = Math.floor(Math.random()* this.vikingArmy.length);
    let randomSaxon = Math.floor(Math.random()* this.saxonArmy.length);

    let selectedViking = this.vikingArmy[randomViking];

    let attackedSaxon = this.saxonArmy[randomSaxon].receiveDamage(selectedViking.attack());
    if(attackedSaxon.health <= 0){
      this.saxonArmy.splice(attackedSaxon, 1);
    }
  }

}

const hastings = new War()
console.log(vik);
console.log(hastings.addViking(vik));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
