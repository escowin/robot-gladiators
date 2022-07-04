// redux | bonus.build out .html via js

// user input
// var playerName = window.prompt("enter bot name");
var playerName = "Player";
var playerHealth = 50;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Android Amy", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 10;

// var wash = function(soapType) {
//   console.log("I wash with " + soapType);
//  };
//  wash("water");

// game states
// WIN.player defeats all enemy bots
//    - fights all enemies
//    - defeats all enemies
// LOSE.player hp is 0 or less

console.log("====== welcome =======");

var fight = function (enemyName) {  

  // repeat while current enemy is alive
  while(playerHealth > 0 && enemyHealth > 0) {
    // choice.fight or skip?
    var promptFight = window.prompt("SKIP or FIGHT?");
    // var promptFight = "skip";
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
      break;
    } else {
      console.log(enemyName + " has " + enemyHealth + "hp remaining.");
    }
    
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacks " + playerName + " w/ " + enemyAttack + "ap.");

    // logic.check player health
    if (playerHealth <= 0) {
      console.log("[  " + playerName + " is dead (" + playerHealth + "hp). game over.  ]");
      break;
    } else {
      console.log(playerName + " has " + playerHealth + "hp remaining.");
    }
  } //  end.while() loop
}; // end.fight()

for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}