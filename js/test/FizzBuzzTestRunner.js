class FizzBuzzTestRunner {
    runTests() {
      new GetOutputTest().test();
    //   new IsBuzzTest().test();
    //   new IsFizzTest().test();
    //   new IsFizzBuzzTest().test();
    }
  }
  const testRunner = new FizzBuzzTestRunner();
  testRunner.runTests();
  