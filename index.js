const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

async function start() {
  const welcomeMessage = `You find yourself infront of a strange door covering the entrince to a cave in the woods near your home, after some inspection you notice a welcome mat infront of the door as well what looks like a well worn lock on the door and a glint in the bushes next to it.`;
  let answer = await ask(welcomeMessage);
  console.log('Now write your code to make this work!');
  process.exit();
}
