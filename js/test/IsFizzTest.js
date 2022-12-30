class IsFizzTest {
    test() {
        this.testFizzIsDivisible();
        this.testFizzIsNotDivisible();
        this.testFizzIsZero()
    }
    testFizzIsDivisible() {
      const fb = new FizzBuzz(3, 5);
      const output = fb.isFizz(9);
      const expectedOutput = true;
      test(expectedOutput, output);
    }
  
    testFizzIsNotDivisible() {
      const fb = new FizzBuzz(3, 5);
      const output = fb.isFizz(7);
      const expectedOutput = false;
      test(expectedOutput, output);
    }
  
    testFizzIsZero() {
      const fb = new FizzBuzz(0, 5);
      const output = fb.isFizz(0);
      const expectedOutput = true;
      test(expectedOutput, output);
    }
  }
  