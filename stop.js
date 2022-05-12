const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = 0;
function getNumber() {
  readline.question("Enter Number:", (number) => {
    if (number == "stop") {
      console.log("Sum:" + sum);
      readline.close();
    } else {
      sum += parseInt(number);
      getNumber();
    }
  });
}

getNumber();
