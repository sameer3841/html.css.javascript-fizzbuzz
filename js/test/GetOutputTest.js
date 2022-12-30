class GetOutputTest {
    constructor() {
      this.fizzBuzz = new FizzBuzz(3, 5);
    }

    test() {
      this.testOutputForFizzBuzz();
      this.testOutputForFizz();
      this.testOutputForBuzz();
    }
  
    testOutputForFizzBuzz() {
      const expectedOutput = "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz";
      const actualOutput = this.fizzBuzz.getOutput(20);
      const pass = actualOutput === expectedOutput;
      console.log(`Test case 1: ${pass ? "PASS" : "FAIL"}`);
    }
  
    testOutputForFizz() {
      const expectedOutput = "1 2 Fizz 4 5 6 Fizz 8 9 10 Fizz 12 13 14 Fizz 16 17 18 Fizz 20";
      const actualOutput = this.fizzBuzz.getOutput(20);
      const pass = actualOutput === expectedOutput;
      console.log(`Test case 2: ${pass ? "PASS" : "FAIL"}`);
    }
  
    testOutputForBuzz() {
      const expectedOutput = "1 2 3 4 Buzz 6 7 8 9 Buzz 11 12 13 14 Buzz 16 17 18 19 Buzz";
      const actualOutput = this.fizzBuzz.getOutput(20);
      const pass = actualOutput === expectedOutput;
      console.log(`Test case 3: ${pass ? "PASS" : "FAIL"}`);
    }
  }
  