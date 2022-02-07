// <!-----------------------------------------    Strings     ------------------------------------------------>

// <!--------------------------------------------------------------------------------------------------------------->

// 1. Write a js program to find length of a string.

let text = "Hello ";
console.log(text.length);

// <!--------------------------------------------------------------------------------------------------------------->

// 2. Write a js program to copy one string to another string.

let string1 = "To Copy";
let string2 = string1.slice(string1);
console.log(string2);

// <!--------------------------------------------------------------------------------------------------------------->

// 3. Write a js program to concatenate two strings.

let strin1 = "1st string";
let strin2 = "2nd String";
let conc_string = strin1.concat("   ", strin2);
console.log(conc_string);

// <!--------------------------------------------------------------------------------------------------------------->

// 4. Write a js program to compare two strings.

let string1 = "hi";
let string2 = "Abrar";
let compare_Strings = string1.localeCompare(string2);
console.log(compare_Strings);

// <!--------------------------------------------------------------------------------------------------------------->

// 5. Write a js program to convert lowercase string to uppercase.

let lower_Case_String = "hello Abrar enjoy coding";
let convert_To_Upeercase = lower_Case_String.toUpperCase(lower_Case_String);
console.log(convert_To_Upeercase);

// <!--------------------------------------------------------------------------------------------------------------->

// 6. Write a js program to convert uppercase string to lowercase.

let upper_Case_String = "hello Abrar enjoy coding";
let convert_To_Lowerrcase = upper_Case_String.toLowerCase(upper_Case_String);
console.log(convert_To_Lowerrcase);

// <!--------------------------------------------------------------------------------------------------------------->

// 7. Write a js program to toggle case of each character of a string.

// <!--------------------------------------------------------------------------------------------------------------->

// 8. Write a js program to find total number of alphabets, digits or special character in a string.

// <!--------------------------------------------------------------------------------------------------------------->

// 9. Write a js program to count total number of vowels and consonants in a string.

// <!--------------------------------------------------------------------------------------------------------------->

// 10. Write a js program to count total number of words in a string.

function WordCount(str) {
    return str.split(" ").length;
}

console.log(WordCount("hello world"));

// <!--------------------------------------------------------------------------------------------------------------->

// 11. Write a js program to find reverse of a string.

let string = "Abrar Why are you working at night?";
console.log(string);
var reve_strign = 0;
for (i = string.length - 1; i > -1; i--) {
    console.log(string[i]);
}

// <!--------------------------------------------------------------------------------------------------------------->

// 12. Write a js program to check whether a string is palindrome or not.

// <!--------------------------------------------------------------------------------------------------------------->

// 13. Write a js program to reverse order of words in a given string

// method 1:

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
let rev = reverseString("Abrar yes you can do it");
console.log(rev);

// method 2:

function reverseString(str) {
    return str.split("").reverse().join("");
}
let reverse = reverseString("Abrar");
console.log(reverse);

// <!--------------------------------------------------------------------------------------------------------------->

// 14. Write a js program to find first occurrence of a character in a given string.

let str = "Welcome Abrar";
const splitt = str.split("");
console.log(splitt);
var last = splitt.indexOf(prompt("1st"));
console.log(last);

// <!--------------------------------------------------------------------------------------------------------------->

// 15. Write a js program to find last occurrence of a character in a given string.

function findLastIndex(str, x) {
    let index = -1;
    for (let i = 0; i < str.length; i++)
        if (str[i] == x) index = i;
    return index;
}
let str = "geeksforgeeks";
let x = "e";
let index = findLastIndex(str, x);
console.log(index);

stri = "Welcome Abrar";
var last = stri.lastIndexOf(prompt("last"));
console.log(last);

// <!--------------------------------------------------------------------------------------------------------------->

// 16. Write a js program to search all occurrences of a character in given string.

function countString(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

const string = prompt("Enter a string: ");
const letterToCheck = prompt("Enter a letter to check: ");
const result = countString(string, letterToCheck);
console.log(result);

// <!--------------------------------------------------------------------------------------------------------------->

// 17. Write a js program to count occurrences of a character in given string.

function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(char_count("w3resourceooooooo.com", "o"));

// <!--------------------------------------------------------------------------------------------------------------->

// 18. Write a js program to find highest frequency character in a string.

// // <!--------------------------------------------------------------------------------------------------------------->

// // 19. Write a js program to find lowest frequency character in a string.

// // <!--------------------------------------------------------------------------------------------------------------->

// 20. Write a js program to count frequency of each character in a string.

// <!--------------------------------------------------------------------------------------------------------------->

// 21. Write a js program to remove first occurrence of a character from string.

let string = "hello abrar";
let remove_First_Chr = string.slice(1, string.length);
console.log(remove_First_Chr);

// <!--------------------------------------------------------------------------------------------------------------->

// 22. Write a js program to remove last occurrence of a character from string.

let string1 = "hello Abrar";
let remove_last = string1.slice(0, string1.length - 1);
console.log(remove_last);

// <!--------------------------------------------------------------------------------------------------------------->

// 23. Write a js program to remove all occurrences of a character from string.

let dummy_String = "Javascript is popular language";
remove_all = dummy_String.slice(dummy_String.length);
console.log(remove_all);

// <!--------------------------------------------------------------------------------------------------------------->

// 24. Write a js program to remove all repeated characters from a given string.

function remove_duplicate_cchars(str) {
    var arr_char = str.split("");
    var result_arr = [];

    for (var i = 0; i < arr_char.length; i++) {
        if (str.indexOf(arr_char[i]) === str.lastIndexOf(arr_char[i]))
            result_arr.push(arr_char[i]);
    }

    return result_arr.join("");
}
console.log(remove_duplicate_cchars("aabbbccciou"));
console.log(remove_duplicate_cchars("python"));
console.log(remove_duplicate_cchars("abcabc"));
console.log(remove_duplicate_cchars("1365451"));

// <!--------------------------------------------------------------------------------------------------------------->

// 25. Write a js program to replace first occurrence of a character with another in a string.

let string = "Heloo my world where are you";
console.log(string);
let splitt = string.split("");
console.log(splitt);
let replace_first = string.replace("H", "U");
console.log(replace_first);

// <!--------------------------------------------------------------------------------------------------------------->

// 26. Write a js program to replace last occurrence of a character with another in a string.

let string = "Heloo my world where are you";
console.log(string);
let splitt = string.split("");
console.log(splitt);
let replace_last = string.replace("u", "i");
console.log(replace_last);

// <!--------------------------------------------------------------------------------------------------------------->

// 27. Write a js program to replace all occurrences of a character with another in a string.

// program to replace all occurrence of a string

const string = "Mr Red has a red house and a red car";
const regex = /red/gi;
const newText = string.replace(regex, prompt());
console.log(newText);

// <!--------------------------------------------------------------------------------------------------------------->

// 28. Write a js program to find first occurrence of a word in a given string.

let string = "Hyee welcome dear";
console.log(string);
let splitii = string.split(" ");
console.log(splitii);
let first_ocuurance = string.indexOf("Hyee");
console.log(first_ocuurance);

// <!--------------------------------------------------------------------------------------------------------------->

// 29. Write a js program to find last occurrence of a word in a given string.

function findLastIndex(str, x) {
    let index = -1;
    for (let i = 0; i < str.length; i++)
        if (str[i] == x) index = i;
    return index;
}
let str = "geeksforgeeks";
let x = "e";
let index = findLastIndex(str, x);
console.log(index);

stri = "Welcome Abrar";
var last = stri.lastIndexOf(prompt("last"));
console.log(last);

// <!--------------------------------------------------------------------------------------------------------------->

// 30. Write a js program to search all occurrences of a word in given string.

function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(char_count("w3resourceooooooo.com", "o"));

// <!--------------------------------------------------------------------------------------------------------------->

// 31. Write a js program to count occurrences of a word in a given string.

function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(char_count("w3resourceooooooo.com", "o"));

// <!--------------------------------------------------------------------------------------------------------------->

// 32. Write a js program to remove first occurrence of a word from string.

let string1 = "hello";
let spliti = string1.split(" ");
console.log(spliti);
let remove_First = spliti.slice(1);
console.log(remove_First);

// <!--------------------------------------------------------------------------------------------------------------->

// 33. Write a js program to remove last occurrence of a word in given string.

let string1 = "hello";
let spliti = string1.split(" ");
console.log(spliti);
let remove_last = spliti.slice(0, spliti.length - 1);
console.log(remove_last);

// <!--------------------------------------------------------------------------------------------------------------->

// 34. Write a js program to remove all occurrence of a word in given string.

let string1 = "hello";
let spliti = string1.split(" ");
console.log(spliti);
let remove_all = spliti.slice(spliti.length);
console.log(remove_all);

// <!--------------------------------------------------------------------------------------------------------------->

// 35. Write a js program to trim leading white space characters from given string.

let text = "       Hello World!";
let result = text.trim();
console.log(result);

// <!--------------------------------------------------------------------------------------------------------------->

// 36. Write a js program to trim trailing white space characters from given string.

let text1 = "Hello World!        ";
let result1 = text1.trim();
console.log(result1);

// <!--------------------------------------------------------------------------------------------------------------->

// 37. Write a js program to trim both leading and trailing white space characters from given string.

let text2 = "       Hello World!        ";
let result2 = text2.trim();
console.log(result2);

// <!--------------------------------------------------------------------------------------------------------------->

// 38. Write a js program to remove all extra blank spaces from given string.

var str = " helff  dfdovc sao";
console.log(str);
remove_spaces = str.replace(/\s/g, "");
console.log(remove_spaces);

// <!--------------------------------------------------------------------------------------------------------------->

//    <!---------------------------------   Objects ---------------------------------------------->

// <!--------------------------------------------------------------------------------------------------------------->

// 1. Write a JavaScript program to list the properties of a JavaScript object

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};

console.log(student.name, student.sclass, student.rollno);
Output: name, sclass, rollno

// <!--------------------------------------------------------------------------------------------------------------->

// 2. Write a JavaScript program to delete the rollno property from the following object.
//  Also print the object before or after deleting the property.

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};

console.log(student);
delete student.rollno;
console.log(student);
console.log(student.rollno);

// <!--------------------------------------------------------------------------------------------------------------->

// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};
console.log(Object.keys(student));

// <!--------------------------------------------------------------------------------------------------------------->

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [{
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true,
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true,
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    },
];

for (var i = 0; i < library.length; i++) {
    var book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
    if (library[i].readingStatus) {
        console.log("Already read " + book);
    } else {
        console.log("You still need to read " + book);
    }
}

// <!--------------------------------------------------------------------------------------------------------------->

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

// <!--------------------------------------------------------------------------------------------------------------->
// <!--------------------------------------------------------------------------------------------------------------->
// <!--------------------------------------------------------------------------------------------------------------->
// <!--------------------------------------------------------------------------------------------------------------->
// <!--------------------------------------------------------------------------------------------------------------->
// <!--------------------------------------------------------------------------------------------------------------->
// <!--------------------------------------------------------------------------------------------------------------->
// <!--------------------------------------------------------------------------------------------------------------->
// <!--------------------------------------------------------------------------------------------------------------->

//           <!---------------------------------- conditional operators programming exercises------------>

// <!--------------------------------------------------------------------------------------------------------------->

// 1. Write a js program to find maximum between two numbers using conditional operator.

var a = prompt();
var b = prompt();
let maxnumber = a > b ? "a is greater " : "b is greater";
console.log(maxnumber);

// <!--------------------------------------------------------------------------------------------------------------->

// 2. Write a js program to find maximum between three numbers using conditional operator.

var n1 = prompt();
var n2 = prompt();
var n3 = prompt();

let largestnum = n1 > n2 ? (n1 > n3 ? n1 : n3) : n2 > n3 ? n2 : n3;
console.log(n1, n2, n3);
console.log(largestnum);

// <!--------------------------------------------------------------------------------------------------------------->

// 3. Write a js program to check whether a number is even or odd using conditional operator.

var numm = prompt();
let even_Odd = numm % 2 == 0 ? "Number is even" : "Number is odd";
console.log(numm);
console.log(even_Odd);

// <!--------------------------------------------------------------------------------------------------------------->

// 4. Write a js program to check whether year is leap year or not using conditional operator.

// A year is a leap year if the following conditions are satisfied:
// The year is a multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.

var year = prompt();
let check_Leap =
    (0 == year % 4 && 0 != year % 100) || 0 == year % 400 ?
    "year is leap " :
    "year is not leap";
console.log(check_Leap);

// <!--------------------------------------------------------------------------------------------------------------->

// 5. Write a js program to check whether character is an alphabet or not using conditional operator.

var character = prompt();
var check_char =
    (character >= "a" && character <= "z") ||
    (character >= "A" && character <= "Z") ?
    "Is character " :
    " Not a character ";
console.log(check_char);

// <!--------------------------------------------------------------------------------------------------------------->

//          <!-------------------- List of switch case programming exercises------------------------->

// <!--------------------------------------------------------------------------------------------------------------->

// 1. Write a js program to print day of week name using switch case.

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log("Days is ", day);

// <!--------------------------------------------------------------------------------------------------------------->

// 2. Write a js program print total number of days in a month using switch case.
var month = 12;
var days;
switch (month) {
    case 1:
        days = 31;
        break;
    case 2:
        days = "28 or 29";
        break;
    case 3:
        days = 30;
    case 4:
        days = 30;
        break;
    case 5:
        days = 30;
        break;
    case 6:
        days = 31;
        break;
    case 7:
        days = 30;
        break;
    case 8:
        days = 31;
        break;
    case 9:
        days = 30;
        break;
    case 10:
        days = 31;
        break;
    case 11:
        days = 30;
        break;
    case 12:
        days = 31;
        break;
}
console.log("Days in this month of", month, "is", days);

// <!--------------------------------------------------------------------------------------------------------------->

// 3. Write a js program to check whether an alphabet is vowel or consonant using switch case.

var alphabet = prompt();
switch (alphabet) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        alphabet = "vowel";
        break;

    default:
        alphabet = "constant";
        break;
}
console.log(alphabet);

// <!--------------------------------------------------------------------------------------------------------------->

// 4. Write a js program to find maximum between two numbers using switch case.

var num1 = prompt("enter num 1");
var num2 = prompt("enter num 2");
switch (num1 > num2) {
    case true:
        console.log("greater number is num1 =", num1);
        break;
    case false:
        console.log("greater number is num2 =", num2);
        break;
}

// <!--------------------------------------------------------------------------------------------------------------->

// 5. Write a js program to check whether a number is even or odd using switch case.

var number = prompt(parseInt());
switch (number % 2 == 0) {
    case true:
        console.log("Entered number is even", number);
        break;

    case false:
        console.log("Entered number is odd", number);
        break;
}

// <!--------------------------------------------------------------------------------------------------------------->

// 6. Write a js program to check whether a number is positive, negative or zero using switch case.

var num = prompt("enter number to check");
switch (num > 0) {
    case true:
        console.log("+ve");
        break;
    case false:
        console.log("-ve");
        break;
    default:
        console.log("0");
}

// <!--------------------------------------------------------------------------------------------------------------->

// 7. Write a js program to find roots of a quadratic equation using switch case.

let root1, root2;

let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

let discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// <!--------------------------------------------------------------------------------------------------------------->

// 8. Write a js program to create Simple Calculator using switch case.

let result;

const operator = prompt("Enter operator ( either +, -, * or / ): ");

const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

switch (operator) {
    case "+":
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case "-":
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case "*":
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case "/":
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log("Invalid operator");
        break;
}

// <!--------------------------------------------------------------------------------------------------------------->