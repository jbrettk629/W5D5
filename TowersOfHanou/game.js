const readline = require('readline');

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(towers = [[3,2,1],[],[]]) {
    this.towers = towers;
  }

  promptMove(callback){
    console.log(this.towers);
    reader.question('What tower do you want to move from?'

    });
  }
}
