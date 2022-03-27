var playerName = window.prompt('what is your robot name?');
var playerHealth = 100;
var playerAttack = 10;

var enemyName = 'Roborto'
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert('welcome to robot gladiators');
  var promptFight = window.prompt('would you like to FIGHT or SKIP this battle?');
  if (promptFight === 'fight' || promptFight === 'FIGHT') {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' hp.'
    );
  
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died.');
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' hp left.');
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' hp.'
    );

    if (playerHealth <= 0) {
      window.alert(playerName + ' has died.');
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' hp left.');
    }
  } else if (promptFight === 'skip' || promptFight === 'SKIP') {
    window.alert(playerName + ' has chosen to skip the fight.');
  } else {
    window.alert('you need to chose a valid option.');
  }
};

fight()


// 5. game prompts player to choose either fight or skip round

// 6. if player skips:
  // -10 money points
  // game ends

// 7. if player fights
  // player attacks cpu: player ap - cpu hp
  // game displays cpu's remaining hp
  // cpu attacks player: cpu ap - player hp
  // game displays user's remaining hp

// 8. game ends.