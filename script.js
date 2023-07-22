
class Hero {
  constructor(name, attak, hp) {
    this.name = name;
    this.attak = attak;
    this.hp = hp;
  }

  attakOn(Enemy) {
    Enemy.hp = Enemy.hp - this.attak;
  }
}

class Enemy {
  constructor(name, attak, hp, gold) {
    this.name = name;
    this.attak = attak;
    this.hp = hp;
    this.gold = gold;
  }

  attakOn(Hero) {
    Hero.hp = Hero.hp - this.attak;
  }
}

const hero = new Hero('Hamster', 1, 10);
const enemy = new Enemy('Skull', 1, 10, 1);

function startTheGame() {
  const mainDiv = document.getElementsById("main-div");
  
  mainDiv.innerHTML = `<div class="hero">
  <img src="./media/elements/hero.png"/>
  <span id="hero-span"></span>
  </div>
  <div class="enemy" onClick="">
  <img src="./media/elements/enemy.png"/>
  <span id="enemy-span"></span>
  </div>`
}

function clickOnAttak() {
  hero.attakOn(enemy);

}


