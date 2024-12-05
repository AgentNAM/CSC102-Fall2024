// function to add pizzas baked
function updateChefStats(){
    // get the number of new pizzas
    var newPizzas = parseInt(document.getElementById("numPizzas").value);
    // get the number of old pizzas
    var oldPizzas = parseInt(document.getElementById("spnTotalPizzas").textContent);

    console.log("newPizzas=" + newPizzas);
    console.log("oldPizzas=" + oldPizzas);

    // add old and new pizzas together
    var totalPizzas = newPizzas + oldPizzas;

    // update the pizza counter on the HTML page with our new value
    document.getElementById("spnTotalPizzas").textContent = totalPizzas;

    // var arrChefLevels = ["Beginner Chef", "Skilled Chef", "Expert Chef", "Master Chef"];
    // this variable will track the level of the chef, based on how many pizzas they have baked
    var chefLevel = "";

    // add some decision logic to check for the pizza chef level
    // if more than 500 pizzas baked
    if (totalPizzas > 500){
        chefLevel = "Master Chef";
    } // if more than 300 pizzas baked
    else if (totalPizzas > 300){
        chefLevel = "Expert Chef";
    } // if more than 100 pizzas baked
    else if (totalPizzas > 100){
        chefLevel = "Skilled Chef";
    } // otherwise, this catch-all else statement will run
    else{
        chefLevel = "Beginner Chef";
    }

    // update the chef level on the HTML page with our new value
    document.getElementById("spnLevel").textContent = chefLevel;
}

/*
// create some topping variables
var topping1 = "Pepperoni";
var topping2 = "Mushrooms";
var topping3 = "Olives";
var topping4 = "Sausages";
var topping5 = "Ham";
var topping6 = "Anchovies";
var topping7 = "Pineapple";
var topping8 = "Cinnamon";

document.getElementById("spnToppings").innerText = topping1 + ", " + topping2 + ", " + topping3 + ", " + topping4 + ", " + topping5 + ", " + topping6 + ", " + topping7 + ", " + topping8;
*/

// refactor the toppings code to use an array
var arrToppings = ["Pepperoni", "Mushrooms", "Olives", "Sausages", "Ham", "Anchovies", "Pineapple", "Cinnamon"];

// print out the toppings in the array using a loop
// when looping through an array, start off with the counter = 0
// keep looping until the counter == the number of elements in the array
// increase the counter by 1 each time the loop runs so you can work with each element in the array
for (var i = 0; i < arrToppings.length; i++){
    // document.getElementById("spnToppings").innerHTML += arrToppings[i] + ",&nbsp";
    
    document.getElementById("spnToppings").innerHTML += arrToppings[i];
    
    if (i < arrToppings.length - 1){
        document.getElementById("spnToppings").innerHTML += ",&nbsp";
    }
    
   
}