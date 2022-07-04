// redux | bonus.build out .html via js

// user input
// var playerName = window.prompt("enter bot name");
var playerName = "Player";
var playerHealth = 150;
var playerAttack = 110;
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

var fight = function (enemyName) {  

  // repeat while current enemy is alive
  while(playerHealth > 0 && enemyHealth > 0) {
    // choice.fight or skip?
    // var promptFight = window.prompt("SKIP or FIGHT?");
    var promptFight = "FIGHT";

    console.log("[  " + playerName + " chooses to " + promptFight + "  ]");
    
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

    // logic.fight (default action)
    // logic.player attacks
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacks " + enemyName + " w/ " + playerAttack + "ap.");

    // logic.check enemy health
    if (enemyHealth <= 0) {
      console.log(enemyName + " is dead (" + enemyHealth + "hp).");
      /*
      storePrompt = window.prompt("REFILL hp, UPGRADE ap, or LEAVE store?");
      if (storePrompt === REFILL || storePrompt === refill) {
        playerHealth = playerHealth + playerMoney;
        fight();
      } else if (storePrompt === UPGRADE || storePrompt === upgrade) {
        playerAttack = playerAttack + playerMoney;
        fight();
      } else {
        fight();
      }
      */
      break;
    } else {
      console.log(enemyName + " has " + enemyHealth + "hp remaining.");
    }
    
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacks " + playerName + " w/ " + enemyAttack + "ap.");

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
  playerAttack = 100;
  playerMoney = 100;

  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      console.log("====== ROBOT GLADIATORS ROUND " + ( i + 1) + " =======");

      var pickedEnemyName = enemyNames[i];
      // reset.health
      enemyHealth = 50;

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
  endGame();
};

var endGame = function() {
  if (playerHealth > 0) {
    console.log("[  game won, score is " + playerMoney + " ]");
  } else {
    console.log("[  game over, you died. ]");
  }

  var playAgainConfirm = window.confirm("play again?");

  if (playAgainConfirm) {
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
        playerMoney = playerMoney - 7;
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