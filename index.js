console.log("Hellow word");

/** section 1 veriable section */
console.log("==============veriable======================");
var myname="my name is ankit";
//var _myname="helloo bro";     is valid
//var _1my__nam="helloo di";    is valid
//var 1myname="helloo pi";      not valid
//var $myname="helloo ji";      is valid
console.log(myname);

/** section 2 data type*/
console.log("=============data type============================");
var age=26;
console.log(age);
//typeof operator
console.log(typeof(age));

console.log(10+"20");
console.log(9-"5");
console.log("java "+"script");
console.log(" "+" ");
console.log(" "+0);
console.log("ankit"-"khavadiya");
console.log(true+true);
console.log(true+false);
console.log(false+true);
console.log(false-false);



/** 1. Interview Question */
// Difference between null vs undefined?

var iam = null;
console.log(iam);

var ank;
console.log(ank);


/** 2. Interview Question */
// what is nan ?

//nan is a property of the global object.
//IN other words, it is a variable in global scope.
//The initial value of nan is not-a-number

var myphonenumber = 9054430598;
var myname = "ankit";

console.log(isNaN(myname));
console.log(isNaN(myphonenumber));

//NaN practice

NaN  == NaN;
Number.NaN==NaN;
isNaN(NaN);
isNaN(Number.NaN);
Number.isNaN(NaN);

console.log(NaN  == NaN);
console.log(Number.NaN==NaN);
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(NaN));



/** section 5 expression and operator */
console.log("==================operator===================");
// operator

// 1 Assignment operator
//An assignment operator assigns a value to its left operand
//based on thwe value of its right operand.
//The simple assignment operator is equal(=)

var x=5;
var y=5;

console.log("is both the x and y are equal or not"+ x==y);
// i will tell you when we will see es6.
//console.log('is both the x and y are equal or not:$(x==y)');


// 2. Arithmetic operators
//An arithmetic operator takes numerical values
//(either literals or variables) as their operands and 
//returns a single numerical value.

console.log(3+3);
console.log(10-5);
console.log(20/5);
console.log(5*6);

console.log("Reminder operator" + 81%8);

// 3. Increment or decrement oper5ator
//operator: x++ or ++x,x-- or --x
//if used postfix, with operator after operand(for example, x++)
//the increment operator increment and returns the value before incrementing.

var num = 15;
var newnum = num++;
console.log(num);
console.log(newnum);

//Postfix increment operator means the expression is evaluated
//first using the original value of the variable and then the 
//variable is incremented(increased).

//if used prefix,with operator before operand (for example, ++x)
//the increment operator increments and returns the value after incrementing.

var num = 15;
var newnum = ++num;
console.log(num);
console.log(newnum);

//prefix increment operator means the variable is incremented first and then
//the expression is evaluated using the new value of the variable.



// 3. Comparison operators
//A comparison operator compares its operands and
//returns a logical value based on whether the comparison is true.

var a=30;
var b=10;

//equal(==);
console.log(a==b);

//not equal(!=);
console.log(a!=b)

//Grester then (>)
console.log(a>b);

//greater then or equal (>=)
console.log(a>=b);

//less then(<)
console.log(a<b);

//less then or equal(<=)
console.log(a<=b);



// 4. Logical operators
//Logical operator are typically used with boolean(logical)values;
//when they are, return a boolean value.

var a=30;
var b=-20;

//logical AND(&&)
//the logical AND (&&) operator (logical conjuction) for a set of 
//operands is true if and only if all of its operands are true.

console.log(a>b && b>-50 && b<0);

//logical OR(||)
//the logical OR (||) operator (logical disjunction) for a set of 
//operator is true if and only if one or omre of its operator is true.

console.log(a>b || b>0 || b<0);

//logical NOT(!)
//the logical NOT(!) operator (logical complement, negation)
//takes truth to falsity and vice versa.

console.log(!(a>b) || (b<0));
console.log(!true);



// 5. String concatenation (operators)
//The concatenation operator (+) concatenates two 

console.log("hellow word");
console.log("hellow " + "word");

// 4. Challlenge time

// what will be the output of 3**3
console.log(3**3); //3*3*3

//what wiil be the output,when we add a number and a string
console.log(23+"ankit");

//write a program to swap tow numbers
var a=5;
var b=10;
var c=b; //c=10
b=a; //5
a=c; // a=10
console.log("a="+a);
console.log("b="+b);

//write a program to swap two number without using third variable
var x=5;
var y=10;

x=x+y; //15
y=x-y; //5
x=x-y; //10

console.log("x="+x);
console.log("y="+y);


// 3. Interview question
// what is the difference between == vs ===

var num1=5;
var num2='5';

console.log(typeof(num1));
console.log(typeof(num2));
console.log(num1==num2);
console.log(num1===num2);


/** section 6 control statement */
console.log("=================control statement====================");
// 1. IF...else
//The if statement executes a statement if a specified condition is truthy,
//if the condition is falsy, another statement can be executed.

var tom = 'sunny';

if(tom == 'rain')
{
    console.log('take a raincoat');
}
else
{
    console.log('no need take a raincoat');
}


// 5. challenge time
//write a program that works out whether if a given year is a leap year or not ?
//a normal year has 365 days, leap years have 365,with an extra day in february.

var year = 2020;

if(year % 4 === 0)
{
    if(year % 100 === 0)
    {
        if(year % 400 ===0)
        {
            console.log("this year is leap year");
        }else{
            console.log("this year is not leap year");    
        }

    }else{
        console.log("this year is leap year");
    }
}else{
    console.log("this year is not leap year");
}


//what is truthy and falsy values in javascript?
//we have total 5 falsy values in javascript
// 0,"",undefined,null,NaN,false** is false anyway

if(true)
{
    console.log("OMG,we loss the game");
}
else
{
    console.log("Yay,we won the game");
 
}


// 2. Conditional (ternary) operator
//the conditional (ternary) operator is the only javascript operator 
//that takes three operands

var age = 17;
console.log((age >= 18)? "you can vote" : "you can't vote");


// 3. switch statement
//evaluates an expression, matching the expression's value to a
//case clause, and executes statements associated with that case.

//1st without breaK statment
//find the area of circle, triangle and rectangle?

var area = "circle";
var pi=3.142,l=5,b=4,r=3;

if(area =="circle")
{
    console.log("Area of circle " + pi*r**2); 

}
else if(area =="triangle")
{
    console.log("Area of triangle " + (l*b)/2); 

}
else if(area =="rectangle")
{
    console.log("Area of rectangle " + l*b); 

}
else
{
    console.log("please enter valid data "); 

}

//break 
//Terminates the current loop,switch,or label
//statement and transfers
//prgram control to the statement following the terminated statement.

switch(area)
{
    case 'circle':console.log("Area of circle " + pi*r**2); 
    break;

    case 'triangle': console.log("Area of triangle " + (l*b)/2); 
    break;

    case 'rectangle':console.log("Area of rectangle " + l*b); 
    break;

    default: console.log("please enter valid data "); 

}



// 4. while loop statement
//the while statement creates a loop executes a specified statement
//as long as the test condition eveluates to true.
// it is first check condition
var i=1;
//block scope
while(i<=10)
{
    console.log(i);
    i++;
}



// 5. Do while loop statement
// it is same to while loop but it is first execute statement and 
// then check condition.

var num=1;
do
{
    console.log(num);
    num++;
}while(num<=10);



// 6. For loop statement
//for loop work like a while loop.it's also first exexute statement
//syntex: for(initializer;condtion;iteration)
//          {
//           }

for(var num=1;num<=10;num++)
{
    debugger;
    console.log(num);
}


// 6. challenge time
//Javascript program to print table for given number(8)?
//8*1=8
for(var num=1;num<=10;num++)
{
    var tableof = 8;
    console.log(tableof + "  " + num + " " + tableof * num);
  //console.log(' ${tableof} * ${num} = ${tableof * num}');
}





/****     section 5 Function in javascript     ****/
console.log("=========================Function=================================");
//A javascript function is a block os code designed to perform a particular task.

// 1. Function definition
//before we use a function, we need to define it.

//A function definition (also called a function declaration,or function statement)
//consists of the function keyword,followed by:

//The name of the function.
//A list of parameters to the function, enclosed in parentheses and separated by commas,
//The javascript statements that define the function enclosed in curly brackets,(...).

//syntax: function functionName()
//          {    //statement               }

function suma()
{
    var a = 10 , b = 20;
    var total= a + b;
    console.log(total);
}


// 2. Calling function
//defining a function does not execute it.
//A javasrcipt function is executed "something invokes it (calls it).

suma();


// 7. challenge time
// What is the difference between function parameter vs function arguments.
// Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.


function sum(a,b) // a or b parameter
{
    var total= a + b;
    console.log(total);
}

sum(20,30); // 20 or 30 arguments
sum(100,30);



/** 4. interview question */

// why function ?

// You can reuse code: define the code once,and use it many times.
// You can use the same code many times with different arguments,
// to produce different results.

// OR

// A function  is a group of reusable code which can be called anywhere
// in your program. This eliminates the need of writing the same code 
// again and again.


// 4. function expressions

// "Function expressions simply means
// create a function and put it into the variable"


function sumb(a,b) {
    var total= a + b;
    console.log(total);
}

var exp=sumb(20,30);


// 5. Return keyword
// When javascript reaches a return statement,
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned back to the "caller"

function sumc(a,b)
{

    return total=a+b;
}
var exp=sumc(20,30);
console.log(exp);


// 6. Anonymous function 

// A function expression is similar to and has the same syntax
// as a function declaratoin one can define "named"
// function expression (where the name of the expression might
// be used in the call stack for example)
// or "anonymous" function expressions.



var funx= function(a,b)
{

    return total=a+b;
}
var sum1=funx(20,100);

console.log(sum1);









/********      NoW IT'S TIME FOR MODERN JAVASCRIPT   ********/
console.log("================ NoW IT'S TIME FOR MODERN JAVASCRIPT===============");

// Features of ECMAScript 2015 also known as ES6

// LET vs CONST vs VAR

var number=20;
console.log(number);

// let number=30;
// console.log(number); //it is only one time defind variable

// const number=20
// console.log(number); // it is only one time defind and one time give value


// var > Function scope
//let and const > block scope


// 2. Template literals(Template string)
// javascript program to print table for given nuimber (8)?
// 6*1=8

for(var num2=1;num2<=10;num2++)
{
    var tableof = 8;
 //console.log(tableof + "  " + num2+ " " + tableof * num2);
    console.log(` ${tableof} * ${num2} = ${tableof * num2}`);
}


// 3. default parameters
//Default function parameters allow named parameters to be
//initiakized with default values if no value or undefined is passed.

function multi(a,b=5)
{
    return a*b;
}
console.log(multi(2));


// 6. Fat Arror Function.

// Normal way of writing function

console.log(sum3());

function sum3()
{
    let a = 5; b=6;
    let sum = a+b;
    return `the sum of the two number is ${sum}`;
}

// How to convert in into fat arror function

const sum4 = (a,b) =>  `the sum of the two number is ${a+b}`;

console.log(sum4(4,6));





/**   Section 7 Arrays in javascript  ***/
console.log("=================Array==========================");

// When we use var, we can stored only one value at a time.
// When we feel like storing multiple values in one variable then
// instead of var, we will use an array.

// In javascript, we have an array class, and
// arrays are the prototype of this class.
//                              0            1      2
//syntax: var name=[ 'lower index/boundary','','upper index' ];
//example

//var arr=['ankit','chetan','abhishek'];


// 1. Traversl of an Array

//navigate to through an array

// if we want to get the single data at a time and also
// if we want to change the data

var arr=['ankit','chetan','abhishek','mihir'];
console.log(arr[arr.length-1]);


// if we want to check the length of data

console.log(arr.length);

// we use for loop to navidate

var arr=['ankit','chetan','abhishek','mihir'];

for(var arr1=0;arr1<arr.length;arr1++)
{

    console.log(arr[arr1]);
}


// After ES6 we have for..in and for..of loop too


var arr=['ankit','chetan','abhishek','mihir'];

for(var elements in arr)
{
    console.log(elements);
}


for(var elements of arr)
{
    console.log(elements);
}


// After.prototype.forEch()
//calls a function for each element in the array.


var arr=['ankit','chetan','abhishek','mihir'];

arr.forEach(function(element, index, array)
{
    console.log(element + "index :" + index + " " + array);
    
});

arr.forEach((element, index, array) =>
{
    console.log(element + "index :" + index + " " + array);

});



// 2. Searching and filter in an array

//Array.prototype.indexof()

//Returns the first (least) index of an element within the array equal
// to an element, or -1 if none is found. it search the element from the
//0th index number


var arr=['ankit','chetan','abhishek','mihir','chetan'];

console.log(arr.indexOf("chetan",3));


// Array.prototype.lastIndexof()
// Resturns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. it search the element last to first

var arr=['ankit','chetan','abhishek','mihir','chetan'];

console.log(arr.lastIndexOf("chetan",3));


// Array.prototype.includes()
//Determines whether the array contains a value,
// returning true or false as appropriate.

var arr=['ankit','chetan','abhishek','mihir'];

console.log(arr.includes("chetan",3));


// Array.prototype.find()

// arr.find(callback(element[,index[,array]])[,thisArg])

// Returns the foun element in the array, if some element in the 
// array stisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

const prices = [200,300,350,400,600,500];

// price >400

console.log( prices.find((currval) =>  currval >1400 ));

// Array.prototype.findindex()

//Returns the found in the array,if an element in the
// array satisfies the testing function ,or -1 if not foun.


console.log( prices.findIndex((currval) =>  currval > 1400 ));


// Array.prototype.filter()

// Returns a new array containing all elements of the calling
// array for which the provided filtering function returns true.


console.log( prices.filter((elem, index) =>  elem   < 400 ));

//price < 400


// 3. How to sort an array

// Array.prototype.sort()

// The sort() method sorts the element of an array in place and 
// retuens the sorted array. The default sort order is ascending, built
// upon converting the element into strings.
// then comparing their sequences of UTF-16 code units values.

 const month = ['March', 'Jan', 'feb', 'Dec', 'Nov' ];
 console.log(month.sort());

const array1=[1, 30, 4, 21, 10000, 99];
console.log(array1.sort());

//However, if number are sorted as strings.
//"25" is bigger than "100", because "2" is bigger an incorrect

// Because of this, thie sort() method will produce an incerrect
// result when sorting number


// 4. Perform CURD

// Array.prototype.push()
// The push() method adds one or more elements to the
// end of an array and returns the new length of the array.

const animals =  ['pigs', 'goats', 'sheep'];
const count = animals.push('chicken', 'cats');
console.log(animals);
console.log(count);


// Array.prototype.unshift()
// The unshift method adds one or more elements to the
// beginning  of an array and returns the nwe length of the array.

const animals1 =  ['pigs', 'goats', 'sheep'];
const count1 = animals1.unshift('chicken', 'cats');
console.log(animals1);
console.log(count1);


// 2nd example

const number1 = [1,2,3,5];
number1.unshift(4,6);
console.log(number1);


// Array.prototype.pop()
// The pop() method removes the last element from an array and returns
// that element. This method changes the length of the array.

const plants = ['broccoli', 'cauliflower', 'kale', 'lomato', 'cabbage'];

console.log(plants);
console.log(plants.pop());
console.log(plants);


// Array.prototype.shift()
// The shift() method removes the first element from an array and returns
// that removed element. This method changes the length of the array.

const plants1 =  ['broccoli', 'cauliflower', 'kale', 'lomato', 'cabbage'];

console.log(plants1);
console.log(plants1.shift());
console.log(plants1);




// 8. Challange time

// Array.prototype.splice()
// Adds and/or removes elements from an array.

// 1: Add Dec at the end of an array ?
// 2: What is the return value of splice method?
// 3: update march to March (update) ?
// 4: Delete  june from an array?

const months = ['Jan', 'march', 'April', 'June', 'July'];

// s1

const newmonth = months.splice(months.length,0,"Dec");
console.log(months);

// s2

console.log(newmonth);

// s3

const indexofmonth = months.indexOf('June');

if(indexofmonth != -1)
{
const updateMonth =  months.splice(indexofmonth,1,'june');
console.log(months);
}else{
    console.log('No such data found');
}

// s4

const indexofmonth1 = months.indexOf('june');

if(indexofmonth != -1)
{
const updateMonth =  months.splice(indexofmonth1,1);
console.log(months);
}else{
    console.log('No such data found');
}



// 5. Map and Reduce Method

// Array.prototype.map()

// let newArray = arr.map(callback(currentValue[, index[, array]]){
//      //return element for newArray, after executing something
// }[, thisArg]);

//Returns a new array containing the results of calling a 
// function on every element in this array.

 const array2 = [1, 4, 9, 16, 25];
//num > 9

let newarr = array2.map((curElem, index, arr) => 
    `Index no = ${index} and the value is ${curElem} belong to ${arr}`
 );
console.log(array2);
console.log(newarr);


// It return new array without muting the orignal array



// 9. Challenge Time

// 1: Find the square root of each element in an array ?
// 2: Multiply eaCh element by 2 and return only those
//    elements which are greater than 10 ?

// s1
let arr3 = [25, 36, 49, 64, 81];

let arrSqr = arr3.map((curElem) => Math.sqrt(curElem));
console.log(arr3);
console.log(arrSqr); 

// s2
let arr2 = [ 5, 6, 7, 8, 9 ];

let arrmul = arr2.map((curElem) => curElem * 2).filter((curElem) => curElem >10 ).reduce((accumulater, curElem, index, arr) => accumulater += curElem);
console.log(arrmul);

//we can use the chaining method



// Reduce method

// Flatten an array means to convert the 3d or 2d array into a
// single dimensional array

// the reduce() method executes a reducer function (that you provide)
// on each element of the array, resulting in single output value.

// The reducer function takes four arguments:

//Accumulator
//Current value
//Cuurent Index
//Source Array

let sumarr = [5, 6, 2];

let sumt = sumarr.reduce((accumulater, curElem, index, arr) => accumulater += curElem);

console.log(sumt);

     

// How to fatten an array
// converting 2d and 3d array into one dimensional array

const arr0 = [
    ['zone_1','zone_2'],
    ['zone_3','zone_4'],
    ['zone_5','zone_6'],
    ['zone_7','zone_8'],
];

let flatArr = arr0.reduce((accum, currval) => accum.concat(currval));
console.log(flatArr);








/***       section 8 String in javascript    ***/
console.log("===============string=================================");

// A javascript string is zero or more characters written inside quotes.

// Javascript string are used for storing and manipulating text.
// You can use single or double quotes.

// Strings can be created as primitives,
// from string literals, or as objects, using the String() constructor



let name1 = "ankit khavadiya";
let yt = "dajyu gaiming"   

// let ytname = new String("thapa technical");

console.log(name1);
console.log(yt);



// How to find the lenght of a string
//String.prototype.length
// Reflects the length of the string.

let myna = "ankit khavadiya";
console.log(myna.length);



// Escape Character

let any = "We are the so-called \"vikingds\" from the north.";
console.log(any);

// if you dont want to mess, simply use the alternate quotes

let any1 = ' We are the so-called "vikingds" from the north. ';
console.log(any1);



// Finding a String in a String

// String.prototype.indexOf(searchvalue[, fromIndex])

// The indexOf() method returns the index of (the position of) the first
// occurrence of a specified text in a string

const myBio = 'I am the Ankit khavadiya';
console.log(myBio.indexOf('Ankit')); 

// javascript count positions from zero.
// 0 is the first position in a string, 1 is the third.



// String.prototype.lastIndexOf(searchValue [, fromIndex])
// Returns the index within the calling String object of the
// last occurrence of searchValue, or -1 if not found.

const myBio1 = 'I am the Ankit khavadiya';
console.log(myBio1.lastIndexOf('Ankit')); 



// Searching or a string in a Sting

// String.prototype.serch(regexp)

// The search() method serches a string for a specified
// value and returns the position of the match


const myBio2 = 'I am the Ankit khavadiya';
let my = myBio2.search('Ankit');
console.log(my); 

// The search() method cannot take a second start position argunment.



// Extracting string parts

// There are 3 methods for extracting a part of a string:

// slice(Start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method
// Slice() extracts a part of a string and returns the extracted part
// in a new string.

// The method takes 2 parameters: the start position.
// and the end position (end not included).

var str = "Apple, Bananaa, Kiwi";

let res = str.slice(0,4);
console.log(res);
 
// The slice() method selectes the elements starting at the 
// given start argugment, and ends at, but does not include,  
// the given end argument.

// Note: The original array will not be changed.




// 10. Challenge time
// Dispaly only 280 characters of a string like the
// one used in twitter ?

let myTweet = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nulla asperiores. Minima rerum delectus pariatur repellat quisquam porro explicabo maiores vero. Quae sequi possimus tenetur vel voluptates! Aliquam, placeat nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nulla asperiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nulla asperiores'


let mya = myTweet.slice(0,280);

console.log(mya);
console.log(myTweet.length);




// The substring() method
// Substring() is similar to slice().

// The difference is that substring() cannot accept
// negative indexes.

var str1 = "Apple, Bananaa, Kiwi";
let res1 = str1.substring(0,4);
console.log(res1);

// If we give negative value then the characters are 
// counted from the 0th pos


// The substr() method
// substr() is similar to slice().

// the diffirence is that the second parameter specifies the
// length of the extracted part.

var str = "Apple, Bananaa, Kiwi";
let res3 = str.substr(0,4);
let res4 = str.substr(-10);
console.log(res3); 
console.log(res4); 




// Replacing String Content()

// String.prottotype.replace(searchfor, replaceWith)

// The replace() method replace a specified value
// with another value in a string.

 let mybio3 = 'I am ankit khavadiya dajyu ankit';

 let re = mybio3.replace('ankit','ANKIT');
console.log(re);

// Points to remember
// 1: The replace() method does not change the string
// it is called on. It returns a new string.
// 2: By default, the replace() method replaces only
// the first match




// Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(posotion)
// CharCodeAt(position)
// Property access[]


// The charAt() method
// The charAt() method returns the character at a
// specified index (posotion) in a string :

let ch = "HELLO WORLD";

console.log(ch.charAt(3));
 
// The charCodeAt() method
// The CharcodeAt() method returns the unicode of the 
// character at a specified index in a string:

// The method returns a UTF-16 code
// (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every
// character, no matter the platform, device, application,
// or language. UTF-8 is a popular Unicode encoding wich
// has 88-bit code units.

console.log(ch.charCodeAt(3));



// 12 : challenge Time

// Return the Unicode of the last character in a string

let ch1 = ch.length -1;
console.log(ch.charCodeAt(ch1));



// Property Access
// ECMAScript 5(2000) allows property access [] on strings

console.log(ch[1]);




// Other usful methods

let nameo = "Ankit khavadiya";

console.log(nameo.toUpperCase());
console.log(nameo.toLowerCase());




// The concat() method
// concat() join two or more strings

let fname = "Ankit";
let lname = "khaadiya";

console.log( fname + lname);
console.log(`${fname} ${lname}`);
console.log(fname.concat(lname));
console.log(fname.concat(" " + lname));




// String.trim()
// The trim() method removes whitespace form both side of string

var str = "        Helloe world     ";
console.log(str.trim());






// Converting a string  to in Array

// A string can be converted to an array with the
// split() method

var txt = "a,b,c,d,e";
console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split("|"));








/****       Section 8 Date and Time in javascript   *******/
console.log("===========Date and time============================");
// Javascript Date objects represent a single moment in time in a
// platform-independent format. Date objects a number
// that represents milliseconds since 1 january 1970 UTC.

// creating Date Objects
// There are 4 days to creaTe a new date object :

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section
// new Date(date string)




// new Date()
//Date objects are create with the new Date() constructor.

let currDate = new Date();
console.log(currDate);

console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString());




// Date.now()
//Returns the numeric value coorresponding to the current time-the number
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC


console.log(Date.now());

 

// new Date(year, month,...)
// 7 number specify year, month, day, hour, minute, second,
// and millisecond (in that order)
// Note: Javascript counts months from 0 to 11.

// January is 0. December is 11.


var d = new Date(2022,11,22,20,30,30,0);
console.log(d.toLocaleString());



// new Date(dateString)
// new Date(datestring) creates a new date object from a date string

var d = new Date("October 13, 2022 11:13:00");
console.log(d.toLocaleString());



// new Date(millisecond)
// new Date(millisecond) creates a new date object as zero time plus millisecond.

var d = new Date(0);
var d = new Date(1681357414297);
var d = new Date(86400000*2);
console.log(d.toLocaleString());




// Dates Method

const curdate1 = new Date();

// how to get the indivisual date
console.log(curdate1.toLocaleString());
console.log(curdate1.getFullYear());
console.log(curdate1.getMonth());
console.log(curdate1.getDate());
console.log(curdate1.getDay());


// how to st the indivisual date
console.log(curdate1.toLocaleString(2022));
// The setFullyear() method can optionally set month and day
console.log(curdate1.getFullYear(2022,10,5));
console.log(curdate1.getMonth(10));
console.log(curdate1.getDate(10));
console.log(curdate1.getDay(5));



// Time Method

const curTime =  new Date();

// how to get the indivisual Time

console.log(curTime.getTime());

// The gettime() method returns the number of millisecond 
// since Jannuary 1, 1970.
console.log(curTime.getHours());
// The getHours() method returns the hours of a date as a 
// number (0 - 23)
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());




// hoe to set the individual Time

var curTime1 = new Date();
//console.log(curTime1.setTime());
console.log(curTime1.setHours(5));
console.log(curTime1.setMinutes(5));
console.log(curTime1.setSeconds(5));
console.log(curTime1.setMilliseconds(5));





// 13. Challenge time

new Date().toLocaleTimeString();  // only Time

new Date().toLocaleDateString(); // only date

new Date().toLocaleString(); // Time and date











/****     Section 9 Math object in Javascript  ********/
console.log("=====================Math object===========================");
// The javascript Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI);
console.log(Math.PI);


// Math.round()
// returns the value of x rounded to its nearest integer

var r = 25.545
console.log(Math.round(r));
var rp = 25.445
console.log(Math.round(rp));


// math.pow()
// Math.pow(x, y) returns the value of x to the power of y

console.log(Math.pow(2,3));
console.log(2**3);


// Math.sqrt()
// Math.sqrt(x) returns the square root of x

console.log(Math.sqrt(25));
console.log(Math.sqrt(81));
console.log(Math.sqrt(66));


// Math.abs()
// Math.abs(x) returns the basolute (positiv3e) value of x

console.log(Math.abs(-55));
console.log(Math.abs(-45.44));
console.log(Math.abs(-625));
console.log(Math.abs(4-6));


// Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integer

console.log(Math.ceil(4.4));
console.log(Math.ceil(99.1));


// Math.floor()
// Math.flooer(x) returns the value of x rounded down to its mearest integer

console.log(Math.floor( 4.7));
console.log(Math.floor(99.1));


// Math.min()
// Math.min(x) can be used to find the lowest value in a list of argument

console.log(Math.min(0, 150, 30, 20, -8, -200));


// Math.max()
// Math.max(x) can be used find the highest value in a list of argument

console.log(Math.max(0, 150, 30, 20, -8, -200));


// Math.random()
// Math.random() returns a random number between 0(inclusive), and 1

console.log(Math.random());
console.log(Math.floor(Math.random()*10));


// Msth.trunc()
// The trunc() method returns the integer part of a number

console.log(Math.trunc(4.6));
console.log(Math.trunc(-99.1));



// Practice Time

// if the argument is a positive number, Math.trunc() is equivalent to
// Math.floor().
// Otherwis Math.trunc() is equivalent to Math.ceil().















/**********    Section 10 DOM in javascript       ************/
console.log("=======================DOM=================================");

// Window is the main container or we can say the
// global object and any operations related to entire
// browser window can be a part of window object.

// for ex the history or to find the url etc.

// whereas the DOM is the child of window object


// All the members like objects, methods or properties.
// If they are the part of window object then we not refer
// the window object. Since window is the global object
// so you do not have to write down window.



/*****   DOM VS BOM    ******/

// The DOM is the document object model, which deals with the document,
// the HTML elements themselves, e.g. doucument and all traversal you
// would do in it, events, etc.

// for ex: 
// change the background color to red
// document.body.style.background = "red";


// the DOM is the browser object model, which deals with browser components
// aside from the document, like history, location, navigator and screen
// (as well as some others that vary by browser). OR
// in simple meaning all the window operation which comes under BOM are performed
// using BOM




// Let's see more practical on History object

// Functio alert/confirm/ prompt are also a part of BOM:
// they are directly not related to the document,
// but represent pure browser methods of communicating with the user/

// alert(location.href);
// if (confirm("i am ankit")){
//     location.href ="";
// }


















































































































































































































































































