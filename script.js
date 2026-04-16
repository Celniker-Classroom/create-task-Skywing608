//Make all the variables for the input boxes and buttons
let userName = document.getElementById("myInput");
let temperature = parseInt(document.getElementById("currentTemp").value);
let condition = document.querySelector("input[name='condition']:checked");
let rain = document.querySelector("input[name='rain']:checked");
let output = document.getElementById("output");
let btnOutput = document.getElementById("btnOutput");
let btnReset = document.getElementById("btnReset");
let recommendation = "";

//List of clothing recommendations based on weather conditions
let clothing = [
  {name: "A heavy jacket", warmth: "heavy"},
  {name: "A hoodie", warmth: "medium"},
  {name: "A t-shirt", warmth: "light"},
  {name: "long sleeve", warmth: "medium"},
  {name: "shorts", warmth: "light"},
  {name: "and pants", warmth: "medium"},
  {name: "and heavy pants", warmth: "heavy"},
  {name: "or light pants", warmth: "light"},
];

//Output function
function getClothingRecommendation(temperature, clothingList, rain) {
    let recommendation = "";
    if (isNaN(temperature)) {
        return "Please enter a valid temperature.";
    }
    else if (temperature < 50) {
        recommendation = clothingList.filter(item => item.warmth === "heavy").map(item => item.name).join(", ");
    }
    else if (temperature >= 50 && temperature < 70) {
        recommendation = clothingList.filter(item => item.warmth === "medium").map(item => item.name).join(", ");
    } 
    else {
        recommendation = clothingList.filter(item => item.warmth === "light").map(item => item.name).join(", ");
    }

    if (rain && rain.value === "Rainy") {
        recommendation += ", also, bring an umbrella";
    }
    
    return recommendation;
}


//reset function

function reset() {
    userName.value = "";
    document.getElementById("currentTemp").value = "";
    document.querySelectorAll("input[name='condition']").forEach(input => input.checked = false);
    document.querySelectorAll("input[name='rain']").forEach(input => input.checked = false);
    output.textContent = "";

}

//Add event listener to the output button
btnOutput.addEventListener("click", function() {
    temperature = parseInt(document.getElementById("currentTemp").value);
    condition = document.querySelector("input[name='condition']:checked");
    rain = document.querySelector("input[name='rain']:checked");
    const recommendation = getClothingRecommendation(temperature, clothing, rain);
    output.textContent = "Hi " + userName.value + "! We recommend you wear: " + recommendation;
});

//Add event listener to the reset button
btnReset.addEventListener("click", function() {
    reset();
});