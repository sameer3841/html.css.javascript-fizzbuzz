class IsBuzzTest {
    constructor() {
      this.fizzBuzz = new FizzBuzz(3, 5);
    }

    test() {
        this.testMultipleOfBuzz();
        this.testNotMultipleOfBuzz();
        this.testMultipleOfBuzzWithBuzzGreaterThanFizz();
    }
  
    // Test case 1: Check if isBuzz returns true for multiple of buzz
    testMultipleOfBuzz() {
      const expectedOutput = true;
      const input = 5;
      const output = this.fizzBuzz.isBuzz(input);
      const pass = output === expectedOutput;
      console.log(`Test case 1: ${pass ? "PASS" : "FAIL"}`);
    }
  
    // Test case 2: Check if isBuzz returns false for non-multiple of buzz
    testNotMultipleOfBuzz() {
      const expectedOutput = false;
      const input = 7;
      const output = this.fizzBuzz.isBuzz(input);
      const pass = output === expectedOutput;
      console.log(`Test case 2: ${pass ? "PASS" : "FAIL"}`);
    }
  
    // Test case 3: Check if isBuzz returns true for multiple of buzz with buzz greater than fizz
    testMultipleOfBuzzWithBuzzGreaterThanFizz() {
      const expectedOutput = true;
      const input = 15;
      const output = this.fizzBuzz.isBuzz(input);
      const pass = output === expectedOutput;
      console.log(`Test case 3: ${pass ? "PASS" : "FAIL"}`);
    }
  }
  