var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

// fight each enemy-robot by looping over them and fighting them one at a time
var startGame = function() {
  // player stat reset
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert('welcome to robot gladiators. round ' + (i + 1));

      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);
      // if not at the last enemy in array & still alive
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // asks if player wants to use store before next round
        var storeConfirm = window.confirm("the fight is over, visit the store before next round?");
        // if yes, go to store()
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert('you have lost your robot in battle. game over.');
      break;
    }
  }
  // replay
  endGame();
};

var endGame = function() {
  // win = living player
  if (playerHealth > 0) {
    window.alert("great job, you've survived the game. you now have a score of " + playerMoney + ".");
  } else {
    window.alert("you've lost your robot in battle.");
  }

  // replay
  var playAgainConfirm = window.confirm("would you like to play again?");

  if (playAgainConfirm) {
    // restart game
    startGame();
  } else {
    window.alert("thank you for playing robot gladiators. come back soon.");
  }
};

// shop
var shop = function() {
  // asks player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "would you like to REFILL health, UPGRADE attack, or LEAVE store?"
  );

  // using switch to carry out actions
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
        window.alert("refill HP by 20 for $7");
        // +HP, -$$
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney -7;
      } else {
        window.alert("not enough money");
      }
      break;

    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("upgrade AP by 6 for $7");
        // +AP, -$$
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney -7;
      } else {
        window.alert("not enough money");
      }
      break;

    case "LEAVE":
    case "leave":
      window.alert("leaving store");
      
      // do nothing, function ends
      break;
    default:
      window.alert("did not pick valid option. try again");

      // call shop() again, forces player to pick valid option
      shop();
      break;
  }
};

startGame();
