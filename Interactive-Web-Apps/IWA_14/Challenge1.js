const firstName = 'John';
const age = 35;
const hobbyChoice = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function hobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobbyChoice}!`)
}

hobby()