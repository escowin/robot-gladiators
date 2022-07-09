// redux | bonus.build out .html via js
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  
  return value;
};

// GAME LOGIC
var fight = function (enemy) {  
  // repeat while current enemy is alive
  while(playerInfo.health > 0 && enemy.health > 0) {
    var promptFight = window.prompt("SKIP or FIGHT?");
    // var promptFight = "FIGHT";

    if (promptFight === "skip" || promptFight === "SKIP") {

      var confirmSkip = window.confirm("skip?");

      // if yes.subtract money, leave fight
      if (confirmSkip) {
        playerInfo.money = playerInfo.money - 10;
        console.log("[ " + playerInfo.name + promptFight + " | (" + playerInfo.money + "g remaining). ]");
        break;
      }
    }

    console.log("[  " + playerInfo.name + " chooses to " + promptFight + "  ]");

    // logic.fight
    // logic.player attacks
    var damage = randomNumber(playerInfo.attack - 10, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(playerInfo.name + " attacks " + enemy.name + " w/ " + damage + "ap.");

    // logic.check enemy health
    if (enemy.health <= 0) {
      console.log(enemy.name + " is dead (" + enemy.health + "hp).");
      break;
    } else {
      console.log(enemy.name + " has " + enemy.health + "hp remaining.");
    }

    // logic.enemy attacks
    var damage = randomNumber(enemy.attack - 5, enemy.attack);
    
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    
    console.log(enemy.name + " attacks " + playerInfo.name + " w/ " + damage + "ap.");

    // logic.check player health
    if (playerInfo.health <= 0) {
      console.log(playerInfo.name + " is dead (" + playerInfo.health + "hp).");
      break;
    } else {
      console.log(playerInfo.name + " has " + playerInfo.health + "hp remaining.");
    }
  }
};

var startGame = function() {
  // reset.player
  playerInfo.reset();
  console.log(playerInfo.reset);

  // logic.loop through enemyInfo[].
  for(var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      console.log("====== ROBOT GLADIATORS ROUND " + (i + 1) + " =======");

      var pickedEnemyObj = enemyInfo[i];
      // reset.health
      pickedEnemyObj.health = randomNumber(40, 60);
      console.log(pickedEnemyObj.name + " has " + pickedEnemyObj.health + "hp.");

      // passs enemy.name variable's value into fight(). it assumes value of enemy.name paramater
      fight(pickedEnemyObj);
      // if health above 0 && not last [array] index
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        var storeConfirm = window.confirm("fight over, visit shop?")
        // if yes, invoke shop();
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      console.log("[  game over, you died ]");
      break;
    }
  }
  
  // logic.if loop(0hp || enemyNames[i]).ends, run endGame logic
  if (playerInfo.health > 0) {
    console.log("[  game won, score is " + playerInfo.money + " ]");
  } else {
    console.log("[  game over, you died. ]");
  }

  var playAgainConfirm = window.confirm("play again?");

  if  (playAgainConfirm) {
    startGame();
  } else {
    console.log("[[ game end  ]]");
  }
};

var shop = function() {
  var shopOptionPrompt = window.prompt("REFILL hp, UPGRADE ap, or LEAVE?");

  // switch case. multiple choices
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      playerInfo.refillHealth();
      break;

    case "UPGRADE": 
    case "upgrade": 
      playerInfo.upgradeAttack();
      break;

    case "LEAVE": 
    case "leave":
      console.log("leaves store() via break.")
      break;

    default:
      console.log("pick valid option, try again.");
      shop();
      break;
  }
};

// STATS
var getPlayerName = function() {
  var name = "";
  while (name === "" || name === null) {
    name = prompt("enter name")
  };

  console.log("your name is " + name);
  return name;
};

var playerInfo = {
  name: getPlayerName(),
  // name: "Player",
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.attack = 10;
    this.money = 10;
  },
  refillHealth: function() {
    if (this.money >= 7) {
      this.health += 20;
      this.money -= 7;
      console.log("| health refill | +" + this.health + "hp | -" + this.money + "g.");
    } else {
      console.log("| upgrade denied (not enough money) |");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      this.attack += 6;
      this.money -= 7;
      console.log("| attack upgrade | +" + this.attack + "ap | -" + this.money + "g.");
    } else {
      console.log("| upgrade denied (not enough money) |");
    }
  }
};

var enemyInfo = [
  {
    name: "Bender",
    attack: randomNumber(10, 20)
  },
  {
    name: "Calculon",
    attack: randomNumber(8, 30)
  },
  {
    name: "Femputor",
    attack: randomNumber(10, 100)
  }
];

startGame();