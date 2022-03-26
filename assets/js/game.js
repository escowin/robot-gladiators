var playerName = window.prompt('what is your robot name?');
var playerHealth = 100;
var playerAttack = 10;

var enemyName = 'Roborto'
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert('welcome to robot gladiators');

  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health."
  );

  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health."
  )
};

fight()

// var initials = window.prompt('your initials?');
// console.log(initials)


// 1. prompt player for robot name

// 2. starting stats (player):
  // 100 HP
  // 10 AP
  // 10 money points

// 3. starting stats (cpu, roborto):
  // 50 hp
  // 12 ap

// 4. game displays 'welcome to robot gladiators'

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