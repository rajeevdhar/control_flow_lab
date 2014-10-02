/* 
Excercise 1: If / else.
Create an array of foods. 
Then create an if/else statement that prints 
"You have no food" if the array is empty, 
"You have one food" if there is exactly 1 item in the list, 
or "You have lots of food" otherwise.
*/


// Version 1:

var food = ["Yogurt", "Oatmeal", "Meat", "Poultry"];
if (food.length === 0) {
	console.log("You have no food");
} else if (food.length === 1) {
	console.log("You have one food");
} else {
	console.log("You have lots of food");
}


/*
Excercise 2: While
Use a while loop to play the 99 bottles of beer

Have your program print the lyrics as they go from:

"99 bottles of beer on the wall, 99 bottles of beer.
Take one down, pass it around, 98 bottles of beer on the wall..."

to

"1 bottles of beer on the wall, 1 bottles of beer.
Take one down, pass it around, 0 bottles of beer on the wall..."

Make sure your loop stops at 0, or else you'll get stuck in an
infinite loop! Forever! (Hit Ctrl-c if this happens).

Bonus: Get the pluralization correct.  "1 bottle of beer" instead of
"1 bottles of beer."
*/


// Version 1: ends "undefined"

var x = 100;
while (x >= 0) {
	if (x === 0) {
		console.log(x + " bottles of beer on the wall, " + x + " bottles of beer. Take one down, pass it around, ");
		break;
	} 
	else if (x===1) {
		console.log(x + " bottle of beer on the wall, " + x + " bottle of beer. Take one down, pass it around, ");
	} 
	else {
		console.log(x + " bottles of beer on the wall, " + x + " bottles of beer. Take one down, pass it around, ");
	}
	x--;
}


// Version 2: ends "0"

var x = 100;
while (x >= 0) {
	if (x===1) {
		console.log(x + " bottle of beer on the wall, " + x + " bottle of beer. Take one down, pass it around, ");
	} 
	else {
		console.log(x + " bottles of beer on the wall, " + x + " bottles of beer. Take one down, pass it around, ");
	}
	x--;
}


/*
Excercise 3: For loop

Create an array of some of your favorite people. 
Use a "for" loop to say hello to each person with console.log(). For example, your output may look like the following:
```
"Hello, Timmy!"
"Hello, Tommy!"
"Hello, Tammy!"
```
Bonus: Have the previous person say hello to the current person.
```
"Hello, Timmy!"
"Timmy says Hello, Tommy!"
"Tommy says Hello, Tammy!"
```
*/

var people = ["Matt", "Robert", "Singh", "Jonny"];
for (var x = 0; x < people.length; x++) {
	console.log("Hello, " + people[x] + "!");
}


var people = ["Matt", "Robert", "Singh", "Jonny"];
for (var x = 0; x < people.length; x++) {
	// need an if at index 0 to say hi to the person in index 0
	// if were past index 0 run the next line
	console.log("AT POSITION" + x + " WE SAY THIS " + people[x] + " says Hello, " + people[x+1])
	// once I'm at the last index (3)...shut this bad boy down
	
}

