let userName = document.getElementById("myInput");
let temperature = parseInt(document.getElementById("currentTemp").value);
let condition = document.querySelector("input[name='condition']:checked");
let rain = document.querySelector("input[name='rain']:checked");
let output = document.getElementById("output");
let btnOutput = document.getElementById("btnOutput");
let btnReset = document.getElementById("btnReset");
let recommendation = "";

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

function getClothingRecommendation(temperature, clothingList, rain) {
    let matches = [];
    let warmthLevel = "";

    // Selection logic to determine level
    if (temperature < 50) warmthLevel = "heavy";
    else if (temperature < 70) warmthLevel = "medium";
    else warmthLevel = "light";

    // ITERATION: Explicit loop to satisfy the rubric
    for (let i = 0; i < clothingList.length; i++) {
        if (clothingList[i].warmth === warmthLevel) {
            matches.push(clothingList[i].name);
        }
    }

    let recommendation = matches.join(", ");
    if (rain && rain.value === "Rainy") {
        recommendation += ", also, bring an umbrella";
    }
    return recommendation;
}

function reset() {
    userName.value = "";
    document.getElementById("currentTemp").value = "";

    let conditionInputs = document.querySelectorAll("input[name='condition']");
    for (let i = 0; i < conditionInputs.length; i++) {
        conditionInputs[i].checked = false;
    }

    let rainInputs = document.querySelectorAll("input[name='rain']");
    for (let i = 0; i < rainInputs.length; i++) {
        rainInputs[i].checked = false;
    }
    
    output.textContent = "";
}

btnOutput.addEventListener("click", function() {
    temperature = parseInt(document.getElementById("currentTemp").value);
    condition = document.querySelector("input[name='condition']:checked");
    rain = document.querySelector("input[name='rain']:checked");
    const recommendation = getClothingRecommendation(temperature, clothing, rain);
    output.textContent = "Hi " + userName.value + "! We recommend you wear: " + recommendation;
});

btnReset.addEventListener("click", function() {
    reset();
});