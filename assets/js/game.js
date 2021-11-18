var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10

//You Can also log multiple values at once like this console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //subtract the value of 'playerAttack' from the balue of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    //log a resulting message to the console so we know that is worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "health remaining."
    );

    //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth'variable.
    playerHealth = playerHealth - enemyHealth;

    //log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "health remaining."
    );
};

fight();