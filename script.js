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
  {name: "Heavy Jacket", warmth: "heavy"},
  {name: "Hoodie", warmth: "medium"},
  {name: "T-shirt", warmth: "light"},
  {name: "Long Sleeve", warmth: "medium"},
  {name: "and Shorts", warmth: "light"},
  {name: "and Pants", warmth: "medium"},
  {name: "and Heavy Pants", warmth: "heavy"}
];

//Output function
function getClothingRecommendation(temperature, condition, clothingList) {
    let recommendation = "";
    if (temperature < 50 && condition && condition.value === "Cloudy") {
        recommendation = clothingList.filter(item => item.warmth === "heavy").map(item => item.name).join(", ");
    }
    else if (temperature < 50 && condition && condition.value === "Sunny") {
        recommendation = clothingList.filter(item => item.warmth === "medium").map(item => item.name).join(", ");
    }
    else if (temperature >= 50 && temperature < 70 && condition && condition.value === "Cloudy") {
        recommendation = clothingList.filter(item => item.warmth === "medium").map(item => item.name).join(", ");
    } 
    else if (temperature >= 50 && temperature < 70 && condition && condition.value === "Sunny") {
        recommendation = clothingList.filter(item => item.warmth === "medium").map(item => item.name).join(", ");
    } 
    else {
        recommendation = clothingList.filter(item => item.warmth === "light").map(item => item.name).join(", ");
    }

    if (rain && rain.value === "Rainy") {
        recommendation += ", and bring an umbrella";
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
    const recommendation = getClothingRecommendation(temperature, condition, clothing);
    output.textContent = "Hi " + userName.value + "! We recommend you wear: " + recommendation;
});

//Add event listener to the reset button
btnReset.addEventListener("click", function() {
    reset();
});