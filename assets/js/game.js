// redux | bonus.build out .html via js

// user input
// var playerName = window.prompt("enter bot name");
var playerName = "Player";
var playerHealth = 111;
var playerAttack = 50;
var playerMoney = 10;

var enemyNames = ["Roborto", "Android Amy", "Robo Trumble"];
var enemyHealth = 20;
var enemyAttack = 20;

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
  // var promptFight = window.prompt("SKIP or FIGHT?");
  var promptFight = "fight";

  console.log("[ " + playerName + " chooses to " + promptFight + "! ]");
  // player chooses to FIGHT or SKIP. invalid input also adressed.
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // player attacks
    enemyHealth = enemyHealth - playerAttack;
    console.log("====== FIGHT! =======");
    console.log(playerName + " attacks " + enemyName + ". " + enemyName + " down to " + enemyHealth + "hp.");

    // checks enemy health
    if (enemyHealth <= 0) {
      console.log(enemyName + " has died bc he has " + enemyHealth + "hp.");
    } else {
      console.log(enemyName + " not dead. " + enemyHealth + "hp remaining.");
    }

    // enemy attacks
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacks " + playerName + ". " + playerName + " down to " + playerHealth + "hp.");

    // checks player health
    if (playerHealth <= 0) {
      console.log(playerName + " has died bc he has " + playerHealth + "hp.");
    } else {
      console.log(playerName + " not dead. " + playerHealth + "hp remaining.");
    }

  // player chooses skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {

    var confirmSkip = window.confirm("skip?");

    // if yes, leave fight
    if (confirmSkip) {
      console.log("[ " + playerName + " skips round. ]")
      playerMoney = playerMoney - 2;
      console.log("[ " + playerName + " has " + playerMoney + "g remaining. ]");
    } else {
      fight();
    }

  } else {
    console.log("invalid input. try again.");
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}