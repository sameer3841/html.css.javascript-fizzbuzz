class IsBuzzTest {
    constructor() {
      this.fb = new FizzBuzz(3, 5);
    }

    test() {
        this.testMultipleOfBuzz();
        this.testNotMultipleOfBuzz();
        this.testMultipleOfBuzzWithBuzzGreaterThanFizz();
    }
  
    // Test case 1: Check if isBuzz returns true for multiple of buzz
    testMultipleOfBuzz() {
      test(true, this.fb, this.fb.isBuzz, 5);
    }
  
    // Test case 2: Check if isBuzz returns false for non-multiple of buzz
    testNotMultipleOfBuzz() {
        test(false, this.fb, this.fb.isBuzz, 7);
    }
  
    // Test case 3: Check if isBuzz returns true for multiple of buzz with buzz greater than fizz
    testMultipleOfBuzzWithBuzzGreaterThanFizz() {
        test(true, this.fb, this.fb.isBuzz, 15);
    }
  }
  