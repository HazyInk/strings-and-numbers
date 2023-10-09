//string
string = 'How many oranges!'; //Displays 'How many oranges!'

  //Show the first character of your string
  document.querySelector("#first").innerHTML = string.charAt(0);
  string = "How many oranges";
  string.charAt(0); //Displays 'H'

  //Show the last character of your string;
  document.querySelector("#last").innerHTML = string.charAt(15);
  string.charAt(15); //Displays 's'

  //Show the number of characters in your string with String.length;
  document.querySelector("#length").innerHTML = string.length;
  console.log = string.length; //Displays '16'



//number
let oranges = 25; //Displays 25

  //Convert a number to a string with Number.toString();
  document.querySelector("#tostring").innerHTML = oranges.toString();
  oranges.toString() //Displays 25

  //Convert a number to exponential notation with Number.toExponential()
  document.querySelector("#toexponential").innerHTML = oranges.toExponential();
  oranges.toExponential(); //Displays 2.5e+1

  //Check if a “number” is actually a number with Number.isNaN()
  document.querySelector("#nan").innerHTML = Number.isNaN();
  Number.isNaN(); //Displays 'false'
