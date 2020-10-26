/** * Choose Your Own Adventure
 *
 * I've made a function for each scene of my adventure book. When I call that
 * function, the description of the scene is printed out and the user is asked to
 * make a choice. Depending on the input, I call the function for the next scene.
 *
 * Good luck playing the game!
 */
let lives = 5;
let gotCheckpoint = false;
let correctDoor = Math.round(Math.random()*3) +1;
let playerName = prompt("what is your name?");

// If the player dies, show this scene
const death = function(cause) {
  // Print their cause of death, and then a final message
  console.log(cause);
  lives--;
  if (lives == 0)
  {
    gameOver();
    return;
  }

  //let the player know how many lives are left
  console.log("\nYou only have " + lives + " lives left!!!\npress Enter to continue");
  //wait for them to press enter
  prompt("");

  if (gotCheckpoint)//if the player got the checkpoint dont send them to the start.
  {
    return pickAPath();
  }
  //if they dont have the checkpoint, put them at the start
  return returnFromDeath();
};

//deletes the players checkpoint, gives them 5 lives, and tell them how to play again
const gameOver = function(){
  console.log("\n That was your last life lol\npress run to play again");
  getCheckpoint = false;
  lives = 5;
};


const finalRoom = function(){
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n There was a bomb at the top of that path, which you ignited with your fire flower, blowing up the wall and revealing the final room. Congratulations! You've made it to the final room. The room contains 100 coins. You currently have 27 coins. How many coins will you collect? Keep in mind that not choosing the correct number will not kill you.");
  const input = Number(prompt(""));
  if (input + 27 == 69)
  {
    console.log("nice, you chose correctly. Your total coin count is now 69");
  }
  else
  {
    console.log("That wasn't the correct number of coins but it's fine, you just missed out on some style points");
  }
  //the player has won the game
  console.log("There was a pipe at the end of the room that takes you to the ax. Congratulations " + playerName + ", you beat the level. Nice work!!!");

};

const powerupChoice = function(){
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe next room leaves you with(once again) another choice. To progress through the room you must travel upward, however you must choose to take, or not to take, a powerup with you. There is a very enticing fire flower to your right. Once you travel upwards, you can't come back down because of the one way gates. There could be something that requires a fire flower at the top, or there could be a one tile gap that requires you to be small(not have a powerup)");
  const choice = prompt("enter 1 for no powerup, enter 2 for powerup");
  if (choice == 1)
  {
    //you need the fire flower
    return death("There was a bomb at the top of the path, requiring a fireflower to ignite it to blow up a path to the next section")

  }
  else if (choice == 2)
  {
    return finalRoom();//go to the next room
  }
  else//the entered something they weren't supposed too
  {
    return death("You let the timer run out and you waste one of your lives");
  }
};

const getCheckpoint = function(){
  gotCheckpoint = true;//give them the checkpoint
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe next room has four doors leading to it, probably the four from the last room. Choosing the correct door awards you with a checkpoint, which is what you did!\n\nCongratulations, you got a checkpoint! Doesn't help out too much if you run out of lives though...");
  prompt("Press Enter to continue");

  return pickAPath();
};

const dontGetCheckpoint = function(){
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe next room has four doors leading to it, probably the four from the last room. Choosing the correct door awards you with a checkpoint, which is not the case this time\n\nAt least they didn't put you in the lava");
  prompt("Press Enter to continue");
  return pickAPath();
};

const pickADoor = function(){
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nYou are brought to a room with four doors. You can see three doors to your right that are directly above the lava. Your not certian, but you're prety sure that choosing the wrong door puts you in the lava. In your shock, you accidently drop the pow, and it explodes. Hopefully you dont need it...")

  const choice = prompt("Which door will you choose?");
  if (choice == correctDoor)
  {
    return getCheckpoint();
  }
  else if (choice < 5)//if they choose a number less than 5
  {
    return dontGetCheckpoint();
  }

  else//they entered something they weren't supposed too
  {
    return death("You spent the better part of 5 minutes looking for that door. You are unsuccessful, and the timer runs out, wasting one of your lives")
  }

};



const pickAPath = function() {
  // What does the scene look like?
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThis room has 3 paths. The top path has a row piranha plants, the middle path has a bunch of bumpers - round blocks that look like donuts and bounce you around, and the bottom path has a bowser jr in a clown car. There is also an arrow pointing to the top path. You can't see to the end of any paths and each path has a one way gate, meaning once you choose there's no going back! ");
  console.log("\n\nYou have three options:\n1)Top\n2)Middle\n3)Bottom\nplease reply with the number of your choice");

  // Ask for user input, then convert the answer to a number value
  const choice = Number(prompt("\nWhich path will you take?\n"));

  if (choice == 1)
  {
    // Stop this scene and send them to the death scene
    return death("The path leads to a dead end, you take a death to one of the plants");
  }
  else if (choice == 2)
  {
    return death("The path ends with a row of spikes!");

  }
  else if (choice == 3)
  {
    return powerupChoice();
  }
  else//they entered something they weren't supposed too
  return death("You let the timer run out and you waste one of your lives");

};



const thwompRoom = function() {
  //room description
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nYou spin jump on the thwomp and a door, on a platform at the top of the room is revealed");
  console.log("\nInstintlivly, you go through the door.");
  console.log("\nThe next room contains a POW block, two giant munchers stacked on top of eachother, and a door. The munchers are inbetween you and the door. You think you can jump over the munchers and save to pow block for the next room. You can also kill the munchers by throwing the POW block at them.");

  console.log("You appear to have two options\n1)Jump over the munchers wilst carrying the POW block\n2)Throw the POW at munchers and procceed to the door. ")
    // Ask for input
    const choice = prompt("");

    // choices
    if (choice == 2)
    {
      // bad choice!
      return death("The pow block triggers some stuff off screen and a crap ton of ghoombas fall on your head.");
    }
    else if (choice == 1)
    {
      return pickADoor();
    }
    else //they entered something they weren't supposed too
    {

      return death("You let the timer run out and you waste one of your lives");
    }
  };



// wrong door
const lavaTrap = function() {

  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nThe door spawns you on top a a pit of lava, with no floor beneath you.\nThis is the pinnacle of level design");


  // Stop this scene and send them to the death scene
  return death("You fall into the lava");
};

const returnFromDeath = function()
{
  //since they already got the intro, dont give it to them again
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nUnshaken, you return to the level\n\nYou appear the have 3 options:\n1)Go through the door\n2)Trigger the thwomp and spin jump on top of him\n3)skip the level\nplease type the number of your choice in the specified field")

  // Ask for input
  const choice = prompt("\nWhat will you choose?\n");

  // Checks their input against the possible choices
  if (choice == 2)
  {
    //correct, got to the next room
    return thwompRoom();
  }
  else if (choice == 1)
  {
    //incorrect, go to the bad room
    return lavaTrap();
  }
    else if (choice == 3)
    {
    return death("You can't bring yourself to do it, it's a no skip run lol. In your indecisiveness you let the timer run out and you lose one of your lives")
    }
    else //they entered something they weren't supposed too
    {
    return death("You let the timer run out and you lose one of your lives");
  }
};



// The player starts here
const start = function() {
  // the introduction, you only see this once
  console.log("You sit down at your wii u and launch the game \"Super mario maker\" and fire up a super expert no skip run.");

  console.log("The run consists of 6 levels and starts you off with 100 lives. You struggle through the first 5 levels, but you do eventually beat them. You are now on the final stage with only 5 of your lives remaining");

  console.log("\nThe level is a New Super Mario Bros style level, castle theme. The level title is some Japaneese characters you don't understand. There is a door to your left, and a thwomp above you and to the right. There is a wall seperating you from the rest of the level")

  console.log("\nYou appear the have 3 options:\n1)Go through the door\n2)Trigger the thwomp and spin jump on top of him\n3)skip the level\nplease type the number of your choice in the specified field. Responding with a non-numeric value will result in a death")

  // Ask for input
  const choice = prompt("\nWhat will you choose?\n");

  // Create branches for each choice
  if (choice == 2)
  {
    //correct
    return thwompRoom();
  }
  else if (choice == 1)
  {
    //incorrect
    return lavaTrap();
  }
    else if (choice == 3)
    {
      //also incorrect
      return death("You can't bring yourself to do it, it's a no skip run lol. In your indecisiveness you let the timer run out and you lose one of your lives")
    }
    else //they entered something they weren't supposed too
    {
      return death("You let the timer run out and you lose one of your lives");
  }
};


// Start The Game!
start();
