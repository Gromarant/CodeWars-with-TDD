# CodeWars with TDD
A collection of Codewars exercises with differents programming lenguages and tools

## Javascript + Node.js - Jest

<details><summary>See exercise</summary>
<br>

- <details><summary>1. Remove String Spaces</summary>
  <p>

  #### Description:
  Simple, remove the spaces from the string, then return the resultant string.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/1-RemoveStringSpaces) | 
  [Go to Codewars](https://www.codewars.com/kata/57eae20f5500ad98e50002c5)
  </p>
  </details>

- <details><summary>2. Keep Hydrated!</summary>
  <p>

  #### Description:
  Nathan loves cycling.
  Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
  You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/2-KeepHydrated) | 
  [Go to Codewars](https://www.codewars.com/kata/582cb0224e56e068d800003c)

  ##### For example:
  ```
    time = 3 ----> litres = 1
    time = 6.7---> litres = 3
    time = 11.8--> litres = 5
  ```
  </p>
  </details>

- <details><summary>3. Convert a String to a Number!</summary>
  <p>

  #### Note:
  This kata is inspired by Convert a Number to a String!. Try that one too.

  #### Description:
  We need a function that can transform a string into a number. What ways of achieving this do you know?
  Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/3-stringToNumber) | 
  [Go to Codewars](https://www.codewars.com/kata/544675c6f971f7399a000e79)

  ##### For example:
  ```
  "1234" --> 1234
  "605"  --> 605
  "1405" --> 1405
  "-7" --> -7
  ```
  </p>
  </details>

- <details><summary>4. Find Maximum and Minimum Values of a List</summary>
  <p>

  #### Description:
  Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/4-findMaxAndMin) | 
  [Go to Codewars](https://www.codewars.com/kata/577a98a6ae28071780000989)

  ##### For example:
  ```
  * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
  * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
  * [42, 54, 65, 87, 0]             -> min = 0, max = 87
  * [5]                             -> min = 5, max = 5
  ```
  #### Note:
  You may consider that there will not be any empty arrays/vectors.
  </p>
  </details>

- <details><summary>5. Check same case</summary>
  <p>

  #### Description:
  Write a function that will check if two given characters are the same case.

  - If either of the characters is not a letter, return -1
  - If both characters are the same case, return 1
  - If both characters are letters, but not the same case, return 0

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/5-CheckSameCase) | 
  [Go to Codewars](https://www.codewars.com/kata/5dd462a573ee6d0014ce715b)

  ##### For example:
  ```
  'a' and 'g' returns 1
  'A' and 'C' returns 1
  'b' and 'G' returns 0
  'B' and 'g' returns 0
  '0' and '?' returns -1
  ```
  </p>
  </details>

- <details><summary>6. Count of positives / sum of negatives</summary>
  <p>

  #### Description:
  Given an array of integers.

  Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  If the input is an empty array or is null, return an empty array.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/6-countPositivesSumNegatives) | 
  [Go to Codewars](https://www.codewars.com/kata/576bb71bbbcf0951d5000044)

  ##### For example:
  ```
  For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]
  ```
  </p>
  </details>

- <details><summary>7. Beginner Series #1 School Paperwork</summary>
  <p>

  #### Description:
  Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
  Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/7-SchoolPaperwork) | 
  [Go to Codewars](https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd)

  ##### For example:
  ```
  n= 5, m=5: 25
  n=-5, m=5:  0
  ```
  </p>
  </details>

- <details><summary>8. Sentence Smash</summary>
  <p>

  #### Description:
  Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/8-sentenceSmash) | 
  [Go to Codewars](https://www.codewars.com/kata/53dc23c68a0c93699800041d)

  ##### For example:
  ```
  ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
  ```
  </p>
  </details>

- <details><summary>9. You Can't Code Under Pressure #1</summary>
  <p>

  #### Description:
  Code as fast as you can! You need to double the integer and return it.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/9-underPressure) | 
  [Go to Codewars](https://www.codewars.com/kata/53ee5429ba190077850011d4)

  </p>
  </details>

- <details><summary>10. Returning Strings</summary>
  <p>

  #### Description:
  Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

  [Make sure you type the exact thing I wrote or the program may not execute properly]

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/10-returningStrings) | 
  [Go to Codewars](https://www.codewars.com/kata/55a70521798b14d4750000a4)

  </p>
  </details>

- <details><summary>11. Total amount of points</summary>
  <p>

  #### Description:
  Our football team has finished the championship.

  Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/11-totalAmountOfPoints) | 
  [Go to Codewars](https://www.codewars.com/kata/5bb904724c47249b10000131)

  Points are awarded for each match as follows:
  ##### For example:
  ```
  if x > y: 3 points (win)
  if x < y: 0 points (loss)
  if x = y: 1 point (tie)
  ```
  We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

  #### Note:
  text
  our team always plays 10 matches in the championship
  0 <= x <= 4
  0 <= y <= 4

  </p>
  </details>

- <details><summary>12. Jaden Casing Strings</summary>
  <p>

  #### Description:
  Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

  Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/12-JadenCasingStrings) | 
  [Go to Codewars](https://www.codewars.com/kata/5390bac347d09b7da40006f6)

  ##### For example:
  ```
  Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
  Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
  ```
  </p>
  </details>

- <details><summary>13. String ends with?</summary>
  <p>

  #### Description:
  Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/13-stringEndsWith) | 
  [Go to Codewars](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d)

  ##### For example:
  ```
  solution('abc', 'bc') // returns true
  solution('abc', 'd') // returns false
  ```
  </p>
  </details>

- <details><summary>14. Transportation on vacation</summary>
  <p>

  #### Description:
  After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

  You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
  Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

  Write a code that gives out the total amount for different days(d).

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/14-transportationOnVacation) | 
  [Go to Codewars](https://www.codewars.com/kata/568d0dd208ee69389d000016)

  </p>
  </details>

- <details><summary>15. Calculate BMI</summary>
  <p>

  #### Description:
  Write function bmi that calculates body mass index (bmi = weight / height2).

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/15-calculateBMI) | 
  [Go to Codewars](https://www.codewars.com/kata/57a429e253ba3381850000fb)

  ##### For example:
  ```
  if bmi <= 18.5 return "Underweight"
  if bmi <= 25.0 return "Normal"
  if bmi <= 30.0 return "Overweight"
  if bmi > 30 return "Obese"
  ```
  </p>
  </details>

- <details><summary>16 + 17. Sum Arrays</summary>
  <p>

  #### Description:
  Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

  [Go to exercise 16 repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/16-sumArrays) | 
  [Go to exercise 17 repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/17-sumArrays2) | 
  [Go to Codewars](https://www.codewars.com/kata/53dc54212259ed3d4f00071c)

  ##### For example:
  ```
  Input: [1, 5.2, 4, 0, -1]
  Output: 9.2

  Input: []
  Output: 0

  Input: [-2.398]
  Output: -2.398
  ```
  #### Note:
  You can assume that you are only given numbers.
  You cannot assume the size of the array.
  You can assume that you do get an array and if the array is empty, return 0.

  </p>
  </details>

- <details><summary>18. Number of People in the Bus</summary>
  <p>

  #### Description:
  There is a bus moving in the city, and it takes and drop some people in each bus stop.

  You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

  Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
  Take a look on the test cases.
  Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
  The second value in the first integer array is 0, since the bus is empty in the first bus stop.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/18-numberOfPeopleInTheBus) | 
  [Go to Codewars](https://www.codewars.com/kata/5648b12ce68d9daa6b000099)

  </p>
  </details>

- <details><summary>19. Opposite number</summary>
  <p>

  #### Description:
  Very simple, given an integer or a floating-point number, find its opposite.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/19-oppositNumber) | 
  [Go to Codewars](https://www.codewars.com/kata/56dec885c54a926dcd001095)

  ##### For example:
  ```
  1: -1
  14: -14
  -34: 34
  ```
  </p>
  </details>

- <details><summary>20. You only need one - Beginner</summary>
  <p>

  #### Description:
  You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
  Array can contain numbers or strings. X can be either.
  Return true if the array contains the value, false if not.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/20-youOnlyNeedOneBeginner) | 
  [Go to Codewars](https://www.codewars.com/kata/57cc975ed542d3148f00015b)

  </p>
  </details>

  <details><summary>21. Testing 1-2-3</summary>
  <p>

  #### Description:
  Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
  Write a function which takes a list of strings and returns each line prepended by the correct number.
  The numbering starts at 1. The format is n: string. Notice the colon and space in between.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/21-testing1-2-3) | 
  [Go to Codewars](https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9)

  ##### For example:
  ```
  [] --> []
  ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
  ```
  </p>
  </details>

- <details><summary>22. Opposites Attract</summary>
  <p>

  #### Description:
  Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

  Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/22-oppositesAttract) | 
  [Go to Codewars](https://www.codewars.com/kata/555086d53eac039a2a000083)

  </p>
  </details>

- <details><summary>23. The highest profit wins!</summary>
  <p>

  #### Story:
  Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

  #### Task:
  Write a function that returns both the minimum and maximum number of the given list/array.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/23-theHighestProfitWins) | 
  [Go to Codewars](https://www.codewars.com/kata/559590633066759614000063)

  ##### For example:
  ```
  [1,2,3,4,5] --> [1,5]
  [2334454,5] --> [5,2334454]
  [1]         --> [1,1]
  ```
  #### Notes:
  All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

  </p>
  </details>

- <details><summary>24. Count the divisors of a number</summary>
  <p>

  #### Description:
  Count the number of divisors of a positive integer n.

  Random tests go up to n = 500000.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/24-countTheDivisorsOfANumber) | 
  [Go to Codewars](https://www.codewars.com/kata/542c0f198e077084c0000c2e)

  ##### For example:
  ```
  4 --> 3 (1, 2, 4)
  5 --> 2 (1, 5)
  12 --> 6 (1, 2, 3, 4, 6, 12)
  30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
  ```
  #### Note:
  you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

  </p>
  </details>

- <details><summary>25. Grasshopper - Check for factor</summary>
  <p>

  #### Note:
  base is a non-negative number, factor is a positive number.

  #### Description:
  This function should test if the factor is a factor of base.

  Return true if it is a factor or false if it is not.

  #### About factors
  Factors are numbers you can multiply together to get another number.

  2 and 3 are factors of 6 because: 2 * 3 = 6

  You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
  You can use the mod operator (%) in most languages to check for a remainder

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/25-grassHopper-CheckForFactor) | 
  [Go to Codewars](https://www.codewars.com/kata/55cbc3586671f6aa070000fb)

  ##### For example:
  ```
  2 is not a factor of 7 because: 7 % 2 = 1
  ```
  </p>
  </details>

- <details><summary>26. Grasshopper - Messi goals function</summary>
  <p>

  #### Description:
  Messi is a soccer player with goals in three leagues:

  - LaLiga
  - Copa del Rey
  - Champions
  Complete the function to return his total number of goals in all three leagues.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/26-grassHopper-MessiGoalsFunction) | 
  [Go to Codewars](https://www.codewars.com/kata/55f73be6e12baaa5900000d4)

  #### Note:
  the input will always be valid.

  ##### For example:
  ```
  5, 10, 2  -->  17
  ```
  </p>
  </details>

- <details><summary>27. Highest and Lowest</summary>
  <p>

  #### Description:
  In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/27-highest-and-lowest) | 
  [Go to Codewars](https://www.codewars.com/kata/554b4ac871d6813a03000035)

  ##### For example:
  ```
  highAndLow("1 2 3 4 5");  // return "5 1"
  highAndLow("1 2 -3 4 5"); // return "5 -3"
  highAndLow("1 9 3 4 -5"); // return "9 -5"
  ```
  #### Note:
  - All numbers are valid Int32, no need to validate them.
  - There will always be at least one number in the input string.
  - Output string must be two numbers separated by a single space, and highest number is first.
  </p>
  </details>

- <details><summary>28. Is it a palindrome?</summary>
  <p>

  #### Description:
  Write a function that checks if a given string (case insensitive) is a palindrome.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/28-is-it-a-palindrome) | 
  [Go to Codewars](https://www.codewars.com/kata/57a1fd2ce298a731b20006a4)

  </p>
  </details>

- <details><summary>29. Sort and Star</summary>
  <p>

  #### Description:
  You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

  The returned value must be a string, and have "***" between each of its letters.
  You should not remove or add elements from/to the array.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/29-sort-and-start) | 
  [Go to Codewars](https://www.codewars.com/kata/57cfdf34902f6ba3d300001e)

  </p>
  </details>

- <details><summary>30. Parse nice int from char problem</summary>
  <p>

  #### Description:
  You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

  Write a program that returns the girl's age (0-9) as an integer.

  Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

  [Go to exercise repo](https://github.com/Gromarant/CodeWars-with-TDD/tree/main/Javascript%2BNode.js-Jest/30-Parse-nice-int-from-char-problem) | 
  [Go to Codewars](https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1)

  </p>
  </details>
</details>