let userName = document.getElementById("myInput");
let temperature = parseInt(document.getElementById("currentTemp").value);
let condition = document.querySelector("input[name='condition']:checked");
let rain = document.querySelector("input[name='rain']:checked");
let output = document.getElementById("output");
let btnOutput = document.getElementById("btnOutput");
let btnReset = document.getElementById("btnReset");
let recommendation = "";
let pastRec1 = document.getElementById("pastRec1");
let pastRec2 = document.getElementById("pastRec2");
let pastRec3 = document.getElementById("pastRec3");
let pastRec4 = document.getElementById("pastRec4");
let pastRec5 = document.getElementById("pastRec5");

let pastRecommendations = [];

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

    if (temperature < 50) warmthLevel = "heavy";
    else if (temperature < 70) warmthLevel = "medium";
    else warmthLevel = "light";

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
    
    pastRecommendations = [];
    pastRec1.textContent = "_";
    pastRec2.textContent = "_";
    pastRec3.textContent = "_";
    pastRec4.textContent = "_";
    pastRec5.textContent = "_";

}

btnOutput.addEventListener("click", function() {
    temperature = parseInt(document.getElementById("currentTemp").value);
    condition = document.querySelector("input[name='condition']:checked");
    rain = document.querySelector("input[name='rain']:checked");
    const recommendation = getClothingRecommendation(temperature, clothing, rain);
    if (!userName.value) {
        output.textContent = "Please enter your name.";
        return;
    }
    if (isNaN(temperature)) {
        output.textContent = "Please enter a valid temperature.";
        return;
    }
    else{
        output.textContent = "Hi " + userName.value + "! We recommend you wear: " + recommendation;
        
        pastRecommendations.push({temp: temperature, rec: recommendation});
        if (pastRecommendations.length > 3) {
            pastRecommendations.shift();
        }
        pastRec1.textContent = pastRecommendations[0] ? `Temp: ${pastRecommendations[0].temp}°F - ${pastRecommendations[0].rec}` : "_";
        pastRec2.textContent = pastRecommendations[1] ? `Temp: ${pastRecommendations[1].temp}°F - ${pastRecommendations[1].rec}` : "_";
        pastRec3.textContent = pastRecommendations[2] ? `Temp: ${pastRecommendations[2].temp}°F - ${pastRecommendations[2].rec}` : "_";
        pastRec4.textContent = pastRecommendations[3] || "_";
        pastRec5.textContent = pastRecommendations[4] || "_";
    }
});

btnReset.addEventListener("click", function() {
    reset();
});


