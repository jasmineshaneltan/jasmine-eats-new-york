

let today = new Date().getDay();
console.log(today);

let message = " ";

if(today === 1){
message = "It's Monday — let's eat something new."

}
else if(today === 2){

message = "It's Tuesday — maybe a sweet treat later?"

}
else if(today === 3){

message = "It's Wednesday — have you ever tried Thai food? "

}
else if(today === 4){

message = "It's Thursday — time to try a new restaurant"

}
else if(today === 5){

message = "It's Friday — eat that craving !!! "

}
else if(today === 6){

message = "It's Saturday — NYC has so many cute cafés!"

}
else if(today === 0){

message = "It's Sunday — something healthy sounds nice."

}
document.getElementById('output').innerHTML = message;




let ratingMessage = document.getElementById("book-message");
let buttons = document.querySelectorAll(".interactive-btn");


let ratingCriteria = [
	"Taste — how the food actually was",
	"Ambiance — vibe/atmosphere",
	"Value — worth the price?",
	"Service — how was the staff?",
	"Presentation - portion size and menu"
];


let criteriaIndex = 0;

function showCriteria() {
    ratingMessage.textContent = ratingCriteria[criteriaIndex];
    criteriaIndex++;
    if(criteriaIndex >= ratingCriteria.length){
        criteriaIndex = 0;
    }
}



for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(event){
        if(event.target.id === "fact-button"){
            showCriteria();
        }
    });
}
