// IF Conditional statements / instructions are exectuted on d basis of d user's decision, results of previous calculations, or other information that d program will take into account.
// If statement is d 1st and simplest control flow instruction available in JS: it checks a given condition, and depending on d Boolean value, either executes a block of code, or skips it.
function testingIf(val) {
  if (val === 10) {
    return "Equal!";
  }
  return "Not Equal!";
}
console.log(testingIf("10"));
console.log(testingIf(10));

// if, else if, else. Order matters!
function testingIfElse(val) {
  if (val >= 10) {
    // if a boolean is needed...
    //     return true;
    // } else {
    //         return false;
    //     }
    return "greater than 10";
  } else if (val < 5) {
    return "smaller than 5";
  } else {
    return "between 5 and 10";
  }
}
console.log(testingIfElse(10));
console.log(testingIfElse(6));
console.log(testingIfElse(3));

// Instead of using chained else if statements. A Switch statement tests a value and can have many case statements which define various possible statements.
// Switch tests a precise value, while if else an imprecise value such as larger than or smaller than.
// If statements execute 1 branch, while Switch statements execute d entire code, from d 1st case that matches until d end of d Switch statement => pass-through! ==>> using break to execute only 1 branch!!!
// It's somewhat similar 2 nested if … else statements, but instead of evaluating different expressions, switch evaluates 1 conditional expression and then tries 2 match its value to 1 of d given cases.
function Switch(val) {
  var answer = "";
  switch (val) {
    case 1: // : is a strict equality operator
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default: // like else in an if else statement; it's a strict comparison operator ===
      answer = "anything else";
      break;
  }
  return answer;
}
console.log(Switch(1));
console.log(Switch(6));

// Where multiple inputs give d same output.
function mySwitch(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "alpha";
      break;
    case "b":
      answer = "beta";
      break;
    case "c":
      answer = "gamma";
      break;
    case "d":
      answer = "delta";
      break;
    case 5:
    case 6:
    case 7:
      answer = "mix";
      break;
    default:
      answer = "all d rest";
  }
  return answer;
}
console.log(mySwitch(7));
console.log(mySwitch(8));
console.log(mySwitch("a"));

// // Running d following code with node.js => ReferenceError: prompt is not defined. It must be run in a browser, making sure that d script is loaded by an HTML page.
// // When a more complex code is needed inside any given case, just place d code in separate code blocks by additionally surrounding them with curly brackets => adding readability + allowing for d declaration of variables ONLY in d given case scope.
// let gate = prompt("Choose gate: a, b, or c");
// let win = false;
// switch (gate) {
//     case "a": {
//         let message = "Gate A...empty m8! Try a different 1!!!";
//         console.log(message);
//         break;
//     }
//     case "b": {
//         let message = "Gate B...bad luck guv!";
//         console.log(message);
//         break;
//     }
//     case "c": {
//         let message = "Gate C...little cheeky b....u got it RIGHT! £10,000,000...Flying To Hawaii tomorrow!!!";
//         console.log(message);
//         break;
//     }
//     default:
//         console.log("No gate " + String(gate));
// };
// if (win) {
//     console.log("Winner!");
// };
