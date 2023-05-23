document.write("<h2>Addition, Subtraction, Multiplication, Division, and Modulus</h2>");

// Addition
var num1 = 5;
var num2 = 10;
var sum = num1 + num2;
document.write("Sum: " + sum + "<br>");

// Subtraction
var difference = num1 - num2;
document.write("Difference: " + difference + "<br>");

// Multiplication
var product = num1 * num2;
document.write("Product: " + product + "<br>");

// Division
var quotient = num1 / num2;
document.write("Quotient: " + quotient + "<br>");

// Modulus
var remainder = num1 % num2;
document.write("Remainder: " + remainder + "<br>");

document.write("<h2>JS Mathematical Expressions</h2>");

// Declare a variable
var num;

// Show the value after variable declaration
document.write("Value after variable declaration is: " + num + "<br>");

// Initialize the variable with a number
num = 5;

// Show the initial value
document.write("Initial value: " + num + "<br>");

// Increment the variable
num++;

// Show the value after increment
document.write("Value after increment is: " + num + "<br>");

// Add 7 to the variable
num += 7;

// Show the value after addition
document.write("Value after addition is: " + num + "<br>");

// Decrement the variable
num--;

// Show the value after decrement
document.write("Value after decrement is: " + num + "<br>");

// Show the remainder after dividing the variable's value by 3
var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");

document.write("<h2>Cost of Movie Tickets</h2>");

// Cost of one movie ticket
var ticketPrice = 600;

// Calculate the cost of buying 5 tickets
var totalCost = ticketPrice * 5;

// Display the result
document.write("The cost of buying 5 tickets is: " + totalCost + " PKR<br>");

document.write("<h2>Multiplication Table</h2>");

// Number for multiplication table
var number = 5;

// Display the multiplication table
for (var i = 1; i <= 10; i++) {
  var result = number * i;
  document.write(number + " x " + i + " = " + result + "<br>");
}

document.write("<h2>Temperature Converter</h2>");

// Celsius temperature
var celsiusTemp = 25;

// Convert Celsius to Fahrenheit
var fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;

// Output the result
document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F<br>");

// Fahrenheit temperature
var fahrenheitTemp2 = 77;

// Convert Fahrenheit to Celsius
var celsiusTemp2 = ((fahrenheitTemp2 - 32) * 5) / 9;

// Output the result
document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C<br>");

document.write("<h2>Checkout Process of a Shopping Cart</h2>");

// Price of item 1
var priceItem1 = 200;

// Price of item 2
var priceItem2 = 300;

// Ordered quantity of item 1
var quantityItem1 = 2;

// Ordered quantity of item 2
var quantityItem2 = 3;

// Shipping charges
var shippingCharges = 50;

// Calculate the total cost
var totalCost = priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges;

// Display the receipt
document.write("Price of Item 1: " + priceItem1 + " PKR<br>");
document.write("Quantity of Item 1: " + quantityItem1 + "<br>");
document.write("Price of Item 2: " + priceItem2 + " PKR<br>");
document.write("Quantity of Item 2: " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");
document.write("Total cost: " + totalCost + " PKR<br>");

document.write("<h2>Total Marks and Percentage Calculation</h2>");

// Total marks
var totalMarks = 500;

// Marks obtained by the student
var marksObtained = 375;

// Compute the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");

document.write("<h2>Currency Conversion</h2>");

// Currency conversion rates
var usdToPkr = 104.80;
var sarToPkr = 28;

// Total US dollars
var totalUSD = 10;

// Total Saudi Riyals
var totalSAR = 25;

// Convert to Pakistani Rupees
var totalPKR = totalUSD * usdToPkr + totalSAR * sarToPkr;

// Display the result
document.write("Total currency in Pakistani Rupees: " + totalPKR + " PKR<br>");

document.write("<h2>Arithmetic Operations</h2>");

// Initialize the variable
var number = 10;

// Perform arithmetic operations
number = (number + 5) * 10 / 2;

// Display the result
document.write("Result: " + number + "<br>");

document.write("<h2>Age Calculator</h2>");

// Current year
var currentYear = 2023;

// Birth year
var birthYear = 1995;

// Calculate possible ages
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Output the result
document.write("They are either " + age1 + " or " + age2 + " years old.<br>");

document.write("<h2>The Geometrizer</h2>");

// Store the radius into a variable
var radius = 5;

// Calculate properties of a circle
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;

// Output the results
document.write("Radius: " + radius + "<br>");
document.write("Circumference: " + circumference + "<br>");
document.write("Area: " + area + "<br>");

document.write("<h2>The Lifetime Supply Calculator</h2>");

// Favorite snack
var favoriteSnack = "Chocolate";

// Current age
var currentAge = 30;

// Maximum age
var maximumAge = 80;

// Estimated amount per day
var amountPerDay = 2;

// Calculate the lifetime supply
var totalSnacks = (maximumAge - currentAge) * 365 * amountPerDay;

// Output the result
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".<br>");
