 function checkNumber() {
      let num = prompt("Enter a number:");
      num = Number(num);  // convert input to number

      if (isNaN(num)) //this NaN is stand for Not a Number
        {
        alert("Please enter a valid number.");
      } else if (num > 0) {
        alert("Positive number.");
      } else if (num < 0) {
        alert("Negative number.");
      } else {
        alert("Zero.");
      }
    }