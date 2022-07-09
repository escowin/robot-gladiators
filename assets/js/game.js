// redux | bonus.build out .html via js
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  
  return value;
};

// GAME LOGIC
var fightOrSkip = function() {
  var promptFight = window.prompt("SKIP or FIGHT?");
  // var promptFight = "FIGHT";

  // if.invalid input, conditional recursion
  if (promptFight === "" || promptFight === null) {
    window.alert("enter valid response");
    return fightOrSkip();
  }

  // convert user input to lowercase
  promptFight = promptFight.toLowerCase();
  // if.skip, confirm
  if (promptFight === "skip") {
    var confirmSkip = window.confirm("skip?");

    // if.confirm, leave fight
    if (confirmSkip) {
      playerInfo.money = playerInfo.money - 10;
      console.log(
        "[ " + playerInfo.name + promptFight + " | (" + playerInfo.money + "g remaining). ]"
      );

      // return.true, if player leaves
      return true;
    }
  }
  return false;
};

var fight = function (enemy) {  
  // randomize fight order, player v cpu
  var isPlayerTurn = true;
  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }

  // repeat while current enemy is alive
  while(playerInfo.health > 0 && enemy.health > 0) {
    // if player turn, run fight or skip logic
    if (isPlayerTurn) {
      if (fightOrSkip()) {
        // fight or skip logic breaks loop
        break;
      }
      // player attacks first
      // - calculate player ap damage
      var damage = randomNumber(playerInfo.attack - 10, playerInfo.attack);

      // - logic.player attacks cpu with above damage
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(playerInfo.name + " attacks " + enemy.name + " w/ " + damage + "ap.");

      // logic.check enemy health
      if (enemy.health <= 0) {
        // cpu dead? player gets money, breaks out of while() loop
        playerInfo.money = playerInfo.money + 25;
        console.log(enemy.name + " is dead (" + enemy.health + "hp). " + playerInfo.name + " wins 20g.");
        break;
      } else {
        // cpu alive? run message
        console.log(enemy.name + " has " + enemy.health + "hp remaining.");
      }

    } else {
      // cpu attacks first
      // - calculate enemy ap damage
      var damage = randomNumber(playerInfo.attack - 10, playerInfo.attack);

      // - logic.new player health (old player hp - enemy damage)
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(enemy.name + " attacks " + playerInfo.name + " w/ " + damage + "ap.");
  
      // - logic.check player health
      if (playerInfo.health <= 0) {
        //  player dead? break while() loop
        console.log(playerInfo.name + " is dead (" + playerInfo.health + "hp).");
        break;
      } else {
        // player alive? run message
        console.log(playerInfo.name + " has " + playerInfo.health + "hp remaining.");
      }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
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
  var shopOptionPrompt = window.prompt("1. REFILL hp, 2. UPGRADE ap, or 3. LEAVE?");

  // convert string input to integer
  shopOptionPrompt = parseInt(shopOptionPrompt);
  // switch case. multiple choices
  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2: 
      playerInfo.upgradeAttack();
      break;
    case 3: 
      console.log("leaves store() via break.")
      break;
    default:
      console.log("pick valid option, try again.");
      shop();
      break;
  }
};

// GAME DATA
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