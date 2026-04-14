//Make all the variables for the input boxes and buttons
let userName = document.getElementById("myInput");
let temperature = parseInt(document.getElementById("currentTemp").value);
let condition = document.querySelector("input[name='condition']:checked");
let rain = document.getElementById("rain");
let output = document.getElementById("output");
let btnOutput = document.getElementById("btnOutput");
let btnReset = document.getElementById("btnReset");
let recommendation = "";

//List of clothing recommendations based on weather conditions
let clothing = [
  {name: "Heavy Jacket", warmth: "heavy"},
  {name: "Hoodie", warmth: "medium"},
  {name: "T-shirt", warmth: "light"},
  {name: "Long Sleeve", warmth: "medium"},
  {name: "Shorts", warmth: "light"},
  {name: "Pants", warmth: "medium"},
  {name: "Heavy Pants", warmth: "heavy"}
];

//Output function
function getClothingRecommendation(temperature, condition, clothingList) {
    let recommendation = "";
    if (temperature < 50) {
        recommendation = clothingList.filter(item => item.warmth === "heavy").map(item => item.name).join(", ");
    } else if (temperature >= 50 && temperature < 70) {
        recommendation = clothingList.filter(item => item.warmth === "medium").map(item => item.name).join(", ");
    } else {
        recommendation = clothingList.filter(item => item.warmth === "light").map(item => item.name).join(", ");
    }

    if (condition && condition.value === "Rainy") {
        recommendation += ", Umbrella";
    }
    
    return recommendation;
}

//Add event listener to the output button
btnOutput.addEventListener("click", function() {
    temperature = parseInt(document.getElementById("currentTemp").value);
    condition = document.querySelector("input[name='condition']:checked");
    const recommendation = getClothingRecommendation(temperature, condition, clothing);
    output.textContent = "We recommend you wear: " + recommendation;
});

