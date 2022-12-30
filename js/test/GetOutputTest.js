class GetOutputTest {
    constructor() {
      this.fb = new FizzBuzz(3, 5);
    }

    test() {
      this.testOutputForFizzBuzz();
      this.testOutputForFizz();
      this.testOutputForBuzz();
    }
  
    testOutputForFizzBuzz() {
      const expectedOutput = "FizzBuzz 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz ";
      test(expectedOutput, this.fb, this.fb.getOutput, 20);
    }
  
    testOutputForFizz() {
      const expectedOutput = "FizzBuzz 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 ";
      test(expectedOutput, this.fb, this.fb.getOutput, 19);
    }
  
    testOutputForBuzz() {
      const expectedOutput = "FizzBuzz 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz ";
      test(expectedOutput, this.fb, this.fb.getOutput, 18);
    }
  }
  