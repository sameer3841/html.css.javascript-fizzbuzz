class FizzBuzz {
    constructor(fizz, buzz) {
      this.fizz = fizz;
      this.buzz = buzz;
    }
  
    isFizz(num) {
      return num % this.fizz === 0;
    }
  
    isBuzz(num) {
      return num % this.buzz === 0;
    }
  
    isFizzBuzz(num) {
      return this.isFizz(num) && this.isBuzz(num);
    }
  
    getOutput(num) {
      let output = "";
      for (let i = 0; i <= num; i++) {
        if (this.isFizzBuzz(i)) output += "FizzBuzz";
        else if (this.isFizz(i)) output += "Fizz";
        else if (this.isBuzz(i)) output += "Buzz";
        else output += i;
        output += " ";
      }
      return output;
    }
  }
  