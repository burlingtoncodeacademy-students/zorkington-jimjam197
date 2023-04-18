const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
let defaultText = "\033[39m";//defalt story text
let greenText = "\033[32m";//result of action
let yellowText = "\033[0;33m";//usually a sign of item interaction
let redText = "\033[91m";//any talking/self responces
let blueText = "\033[94m";//interaction of enviorment
let grayText = "\033[90m";//probally the writing in the note/s
start();

async function start() {
  const welcomeMessage = `You find yourself infront of a strange door covering the entrince to a cave in the woods near your home, after some inspection you notice a welcome mat infront of the door `+ blueText +`as well what looks like a pinpad with a `+yellowText+`note taped on it.`+ defaultText;
  let answer = await ask(welcomeMessage);
  console.log('Now write your code to make this work!');
  process.exit();
}
