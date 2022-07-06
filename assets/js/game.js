// redux | bonus.build out .html via js

// user input
// var playerName = window.prompt("enter bot name");
var playerName = "Player";
var playerHealth = 150;
var playerAttack = 20;
var playerMoney = 10;

var enemyNames = ["Roborto", "Android Amy", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 10;


// var wash = function(soapType) {
//   console.log("I wash with " + soapType);
//  };
//  wash("water");
// i wash with water

// game states
// WIN.player defeats all enemy bots
//    - fights all enemies
//    - defeats all enemies
// LOSE.player hp is 0 or less

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  
  return value;
};

var fight = function (enemyName) {  
  // repeat while current enemy is alive
  while(playerHealth > 0 && enemyHealth > 0) {
    // choice.fight or skip?
    var promptFight = window.prompt("SKIP or FIGHT?");
    // var promptFight = "FIGHT";

    console.log("[  " + playerName + " chooses to " + promptFight + "  ]");
    
    // logic.skip
    if (promptFight === "skip" || promptFight === "SKIP") {

      var confirmSkip = window.confirm("skip?");

      // if yes.subtract money, leave fight
      if (confirmSkip) {
        console.log("[ " + playerName + " skips round. ]")
        playerMoney = playerMoney - 10;
        console.log("[ " + playerName + " has " + playerMoney + "g remaining. ]");
        break;
      }
    }

    // logic.fight
    // logic.player attacks
    var damage = randomNumber(playerAttack - 10, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);

    console.log(playerName + " attacks " + enemyName + " w/ " + damage + "ap.");

    // logic.check enemy health
    if (enemyHealth <= 0) {
      console.log(enemyName + " is dead (" + enemyHealth + "hp).");
      break;
    } else {
      console.log(enemyName + " has " + enemyHealth + "hp remaining.");
    }

    // logic.enemy attacks
    var damage = randomNumber(enemyAttack - 5, enemyAttack);
    
    playerHealth = Math.max(0, playerHealth - damage);
    
    console.log(enemyName + " attacks " + playerName + " w/ " + damage + "ap.");

    // logic.check player health
    if (playerHealth <= 0) {
      console.log(playerName + " is dead (" + playerHealth + "hp).");
      break;
    } else {
      console.log(playerName + " has " + playerHealth + "hp remaining.");
    }
  }
};

var startGame = function() {
  // reset.player
  playerHealth = 100;
  playerAttack = 40;
  playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      console.log("====== ROBOT GLADIATORS ROUND " + (i + 1) + " =======");

      var pickedEnemyName = enemyNames[i];
      // reset.health
      enemyHealth = randomNumber(40, 60);
      console.log(pickedEnemyName + " has " + enemyHealth + "hp.");

      // passs pickedEnemyName variable's value into fight(). it assumes value of enemyName paramater
      fight(pickedEnemyName);
      // if health above 0 && not last [array] index
      if (playerHealth > 0 && i < enemyNames.length - 1) {
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
  
  // logic.loop(0hp || enemyNames[i]).ends, run endGame logic
  if (playerHealth > 0) {
    console.log("[  game won, score is " + playerMoney + " ]");
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
    // shopOptionPrompt.refill = increase hp, js math
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
        console.log("refill, -7g | " + playerHealth + "hp + 20.");

        playerHealth = playerHealth + 20;
        playerMoney = Math.max(0, playerMoney - 10);
      } else {
        console.log("not enough g");
      }
      break;

    // shopOptionPrompt.upgrade = increase ap, js math
    case "UPGRADE": 
    case "upgrade": 
      if (playerMoney >= 7) {
      console.log(
        "UPGRADING " + playerMoney + "g -30g | " + playerAttack + "ap + 6."
      );
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 30;
      } else {
        console.log("not enough g");
      }
      break;

    // shopOptionPrompt.leave = exit switch() via break;
    case "LEAVE": 
    case "leave":
      console.log("leaves store() via break.")
      break;
    default:
      console.log("pick valid option, try again.");
      // calls shop(), repeating the cycle
      shop();
      break;
  }
};

startGame();