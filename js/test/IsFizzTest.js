class IsFizzTest {
    test() {
        this.testFizzIsDivisible();
        this.testFizzIsNotDivisible();
        this.testFizzIsZero()
    }
    testFizzIsDivisible() {
      const fb = new FizzBuzz(3, 5);
      test(true, fb, fb.isFizz, 9);
    }
  
    testFizzIsNotDivisible() {
      const fb = new FizzBuzz(3, 5);
      test(false, fb, fb.isFizz, 7);
    }
  
    testFizzIsZero() {
      const fb = new FizzBuzz(0, 5);
      test(true, fb, fb.isFizz, 0);
    }
  }
  