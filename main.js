// The test contains 10 questions.
// Make sure you write your code in the allocated spaces. No code should be written outside the allocated spaces
// Make sure your code looks clean (in formatting) and correct.
// you can use console.log() to verify your answers
// Success

// QUESTION 1

// You are a software engineer in a company and you are taskes to declare 2 variables.
// One variable will change while the other one will not.
// let the changing variable be called: tax_rate
// and the other be called: age

// TODO: write your code below this line
var tax_rate = 6.4;

function changetaxrate(){
    tax_rate = 10.3;
}
console.log(tax_rate +10.3 )

class staticvariable{
    static staticVariable = 'addition';
    // static variable definition
    static staticFunction(){
        return 'static function has been called.';

    }
}
    // static variable called
    console.log(staticvariable.staticVariable);
    // static method called
    console.log(staticvariable.staticFunction());


// TODO: write your code above this line

// QUESTION 2

// This test will involve you getting the sum of all values above 5.
// The values are in an array and the array will be provided for you

const myArray = [4, -2, 6, 9, 1, 12, 6, 2, 10];
// TODO: write your code below this line

for(let i =0; i < myArray; i++){
    let sum = 0;
    if (myArray[i] > 5){
        sum += myArray[i];

    }
}
console.log(sum);


// expected output: 43
// TODO: write your code below this line

// QUESTION 3

// this test will involve you using console.log to try and access a value in an object
// Print for me the value `Menengai Crater` in the object below

const information = {
    name: "John Doe",
    age: 35,
    occupation: "Software Engineer",
    interest: {
        outdoor: [ { "hiking": ["Mt. Kenya", "Mt. Everest", "Menengai Crater"] } ]
    }
}

// TODO: write your code below this line
console.log(information[0].outdoor[0].hiking[-1]);

// expected output: 'Menengai Crater'
// TODO: write your code above this line

// QUESTION 4

// write a function that takes in 2 string parameters and checks if the string are an anagram
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// TODO: write your code below this line

function anagramFunc(str1,str2){
    if(str1.length !== str2.length) return false;
    
    var a =str1.toLowerCase().split("").sort().join("");
    var b = str2.toLowerCase().split("").sort().join("");
    // check if each characters match before proceeding
    for(var i =0; i<str1.length; i++){
        if((str1.charAt(i)) !== (str2.charAt(i))){
            return false;
        }
    }
    // all characters match !
    return true;

     
}
// TODO: write your code above this line

// The lines of code below will be used for testing your function. don't change them
console.log(anagramFunc("cinema", "iceman")); // expected output: true
console.log(anagramFunc("jupiter", "jubiter")); // expected output: false

// QUESTION 5

// write a function that takes in a string parameters and checks if the string are a palindrome
// An anagram is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.

// TODO: write your code below this line
function palindromeFunc(string){
    // convert string to an array
    const Arrayvalues =string.split('');

    // reverse the array values
    const reversearrayValues = Arrayvalues.reverse();
    // convert array to string
    const reverseString =reversearrayValues.join('');
    
    if(string == reverseString){
        console.log('It is a plaindrome');

    }
    else{
        console.log('It is not a palindrome');

    }

}

// TODO: write your code above this line

// The lines of code below will be used for testing your function. don't change them
console.log(palindromeFunc("racecar")); // expected output: true
console.log(palindromeFunc("nurse run")); // expected output: false

// QUESTION 6

// Complete the getGrade(score) function in the editor. 
// It has one parameter: an integer, denoting the number of points Julia earned on an exam. 
// It must return the letter corresponding to her  according to the following rules:

/**
 * If 25 < score <= 30 then grade = A
 * If 20 < score <= 25 then grade = B
 * If 15 < score <= 20 then grade = C
 * If 10 < score <= 15 then grade = D
 * If 5 < score <= 10 then grade = E
 * If 0 < score <= 5 then grade = F
 */

// TODO: write your code below this line
function getGrade(score) {
    let grade = '';
    // Write your code here
    var score;
    
    
    if (score <= 30){
        grade = "A";

    }
    else if(score <= 25){
        grade ="B";

    }
    else if(score <=20){
        grade = "C";

    }
    else if(score <= 15){
        grade = "D";
    } 
    else if(score <=10){
        grade = "E";
    }
    else if(score <=5){
        grade = "F"
    }


    
    return grade;
}
// TODO: write your code above this line

// The line of code below will be used for testing your function. don't change it
console.log(getGrade(25)); // expected output: B 

// QUESTION 7

/**
 * Create a Polygon class that has the following properties:
 * A constructor that takes an array of integer values describing the lengths of the polygon's sides.
 * A perimeter() method that returns the polygon's perimeter.
 *
 * Note: The perimeter method must be lowercase and spelled correctly.
 */

// TODO: write your code below this line
class Polygon{
    constructor(noofsides){
        this.noofsides = noofsides;

        }
    perimeter(){
        var per =0;
        for(var i = 0; i < this.noofsides.length;i++){
            per +=this.noofsides[i];

        }
        return per;       
    }
}
    




// TODO: write your code above this line

// QUESTION 8

/**
 * Create an object for the above Class
 */

// TODO: write your code below this line

let obj = new Polygon();
obj.perimeter();
// TODO: write your code above this line

// The line of code below will be used for testing your function. don't change it
console.log(obj.perimeter([45, 56, 67])); // expected output: 168

// QUESTION 9 

/**
 * Write a function to illustrate on the fizz buzz game.
 * The following are the rules
 * if the value passed to the function is divisible by 3 then return fizz
 * if the value passed to the function is divisible by 5 then return buzz
 * if the value is divisible by both 3 and 5 the return fizzbuzz
 * if the value is not divisible by 3 and 5 return the value.
 */

// TODO: write your code below this line
const fizzBuzz = () => {
    var val = Math.floor((Math.random() * 22) +1);
    for(let i = 0; i <= 21; i++) {
        var val ="";
        if(val %3==0){
            val += "fizz";
        
        }
        else if(val %5==0){
            val += "buzz";
        }
        else if(val %3==0 && val %5==0){
            val +="fizzbuzz";
        }
        else{
            return val;
        }


    }
}

// TODO: write your code above this line

// The line of code below will be used for testing your function. don't change it
console.log(fizzBuzz()); 

// QUESTION 10

/**
 * You're now a baseball game point recorder.
 * Given a list of strings and numbers:
 * Integer (one round's score): Directly represents the number of points you get in this round.
 * "+" (one round's score): Represents that the points you get in this round are the sum of the last two valid round's points.
 * "D" (one round's score): Represents that the points you get in this round are the doubled data of the last valid round's points.
 * "C" (an operation, which isn't a round's score): Represents the last valid round's points you get were invalid and should be removed.
 * Each round's operation is permanent and could have an impact on the round before and the round after.
 * You need to return the sum of the points you could get in all the rounds.
 * 
 * NOTE: THE FIRST 2 NUMBERS WILL ALWAYS BE PROVIDED YOU DON'T NEED TO HAVE A CHECK FOR THEM.
 * 
 * EXAMPLE 1:
 * 
 * Input: [5, 2,"C","D","+"]
 * Output: 30
 * Explanation: 
 * Round 1: You could get 5 points. The sum is: 5.
 * Round 2: You could get 2 points. The sum is: 7.
 * Operation 1: The round 2's data was invalid. The sum is: 5.  
 * Round 3: You could get 10 points (the round 2's data has been removed). The sum is: 15.
 * Round 4: You could get 5 + 10 = 15 points. The sum is: 30.
 * 
 * 
 * EXAMPLE 2:
 * Input: [5, -2, 4, "C", "D", 9, "+", "+"]
 * Output: 27
 * Explanation: 
 * Round 1: You could get 5 points. The sum is: 5.
 * Round 2: You could get -2 points. The sum is: 3.
 * Round 3: You could get 4 points. The sum is: 7.
 * Operation 1: The round 3's data is invalid. The sum is: 3.  
 * Round 4: You could get -4 points (the round 3's data has been removed). The sum is: -1.
 * Round 5: You could get 9 points. The sum is: 8.
 * Round 6: You could get -4 + 9 = 5 points. The sum is 13.
 * Round 7: You could get 9 + 5 = 14 points. The sum is 27.
 */


// Write a javascript function that can evaluate the above behaviour
// PLEASE NOTE TAKE YOUR TIME TO UNDERSTAND THE QUESTION.
// I put this one here to tease up your brain for a few minutes.

// TODO: write your code below this line
function baseBallPointer(operations){
    
    var result = 0;
    let score =[];
    for( let i= 0; i< operations.length;i++){
       
        if(!NaN(operations[i])){
            score.push(parseInt(operations[i]));   
        }
        else if(operations[i] == "+"){
            score.push(parseInt(score[score.length - 2]) + parseInt([score.length -1]));
        
        }
        else if(operations[i] == "D"){
            score.push(2 * parseInt(score[score.length - 1]));
        }
        else if(operations[i] == "C"){
            score.pop();
        }
    }
    result = score.reduce((a,b) => a+b,0);
    return result;
}

var operations = readline().split("");


// TODO: write your code above this line

// The lines of code below will be used for testing your function. don't change them
console.log(baseBallPointer([5, 2,"C","D","+"]));
console.log(baseBallPointer([5, -2, 4, "C", "D", 9, "+", "+"])); 