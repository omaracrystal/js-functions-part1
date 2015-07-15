console.log("Hello World");
function test(str) {
  return "test" + str
}

console.log(test("ing"))

//1. Define a function called sum that takes two numbers as arguments and returns their sum.
function sum(a,b) {
  return a+ b;
}

console.log(sum(2,6))

//2. Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

console.log(isEqual(4,4));

//3. Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.
function discountPercentage(original,discount) {
  if (discount > 100 || discount < 0) {
      return "Error: Discount % must be within 0 and 100";
  }
  discountPercent = discount/100;
  discAmount = original * discountPercent;
  return "$" + discAmount.toFixed(2);
}

console.log(discountPercentage(50, 15));


//4. Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual work is separated by only one space.
function stringCapitalize(string) {
  var words = string.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(stringCapitalize("I am a just trying to capitalize all the words in this sentence... no big deal no big deal."));

// 5. Define a function called evenNumbers that takes a random integer, from 0 to 100, and outputs all the even integers from 0 to that random number.
function evenNumber(n) {
  even = [];
  for (i=0; i<=n; i++) {
    if (i % 2 == 0) {
      even.push(i);
    }
  }
return even;
}

console.log(evenNumber(40));


// 6. Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.
function isDivisble(a,b) {
  if (a % b == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisble(12,4))


// Bonus: Write a function called oddNumbers that takes a random integer, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.

function oddNumbers(num) {
  var odd = [];
  if (num>100 || num<0) {
    return "Error: Number must be between 0 and 100";
  }
  if (num <= 40) {
    for (var i = 0; i <= num; i++) {
        if (i%2 == 1) {
          odd.push(i);
        }
      }
    } else {
      for (var j = 40; j <= num; j++) {
        if (j%2 ==1) {
          odd.push(j);
        }
      }
    }
  return odd;
}

console.log(oddNumbers(68));
