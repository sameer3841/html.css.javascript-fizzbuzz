# Fancy Fizz Buzz

* **Purpose** - To gain familiarity the `if` and `else` statements

### Description
 * The objective of this JavaScript assignment is to create a class called `FizzBuzz` with four methods: `constructor`, `isFizz`, `isBuzz`, and `getOutput`. The constructor takes in two arguments `fizz` and `buzz`, which are assigned to `this.fizz` and `this.buzz`, respectively. 
 * The `isFizz` method takes in a number `num` and returns `true` if `num` is divisible by `this.fizz`, otherwise it returns `false`. Similarly, the `isBuzz` method takes in a number `num` and returns `true` if `num` is divisible by `this.buzz`, otherwise it returns `false`. 
 * The `isFizzBuzz` method takes in a number `num` and returns `true` if `num` is divisible by both `this.fizz` and `this.buzz`, otherwise it returns `false`.
 * The `getOutput` method takes in a number `num` and returns a string based on the following conditions:
  - If `num` is divisible by both `this.fizz` and `this.buzz`, return "FizzBuzz"
  - If `num` is only divisible by `this.fizz`, return "Fizz"
  - If `num` is only divisible by `this.buzz`, return "Buzz"
  - Otherwise, return the string representation of `num`.
 * Overall, the objective of this assignment is to implement the FizzBuzz algorithm using a class-based approach in JavaScript.

### Examples

```javascript
// Example 1
const fb1 = new FizzBuzz(3, 5);
console.log(fb1.isFizz(9)); // Output: true

// Example 2
const fb2 = new FizzBuzz(3, 5);
console.log(fb2.isFizz(10)); // Output: false

// Example 3
const fb3 = new FizzBuzz(7, 2);
console.log(fb3.isFizz(21)); // Output: true
```

* In the above examples, we create an instance of the `FizzBuzz` class with different `fizz` and buzz `values`. Then we call the `isFizz` method on that instance with different input values. Here are the corresponding outputs:
 * Example 1: In this example, `fb1` has fizz equal to 3. When we call `isFizz(9)`, which is divisible by 3, it returns `true`.
 * Example 2: In this example, `fb2` has fizz equal to 3. When we call `isFizz(10)`, which is not divisible by 3, it returns `false`.
 * Example 3: In this example, `fb3` has fizz equal to 7. When we call `isFizz(21)`, which is divisible by 7, it returns `true`.
* Note that since we haven't implemented the logic for `isFizz` in the `FizzBuzz` class yet, these examples all return `null`. We would need to implement the logic for `isFizz` to get correct outputs.




## Objective
* Ensure that all test cases pass




## How to Download

#### Part 1 - Forking the Project
* To _fork_ the project, click the `Fork` button located at the top right of the project.


#### Part 2 - Navigating to _forked_ Repository
* Navigate to your github profile to find the _newly forked repository_.
* Copy the URL of the project to the clipboard.

#### Part 3 - Cloning _forked_ repository
* Clone the repository from **your account** into the `~/dev` directory.
  * if you do not have a `~/dev` directory, make one by executing the following command:
    * `mkdir ~/dev`
  * navigate to the `~/dev` directory by executing the following command:
    * `cd ~/dev`
  * clone the project by executing the following command:
    * `git clone https://github.com/MYUSERNAME/NAMEOFPROJECT`

#### Part 4 - Check Build
* Ensure that the tests run upon opening the project.
    * You should see `Tests Failed: 99 of 99 tests`







## How to Submit

#### Part 1 -  _Pushing_ local changes to remote repository
* from a _terminal_ navigate to the root directory of the _cloned_ project.
* from the root directory of the project, execute the following commands:
    * add all changes
      * `git add .`
    * commit changes to be pushed
      * `git commit -m 'I have added changes'`
    * push changes to your repository
      * `git push -u origin master`

#### Part 2 - Submitting assignment
* from the browser, navigate to the _forked_ project from **your** github account.
* click the `Pull Requests` tab.
* select `New Pull Request`
