// Reference to BUTTON
var btnTranslate = document.querySelector("#btn-translate");
// console.log(btnTranslate);

// function clickHandler(){
//     console.log("clicked");
// }
// btnTranslate.addEventListener("click",clickHandler);

// btnTranslate.addEventListener("click", function clickHandler(){
//     console.log("clicked");
// })

// Reference to TEXTAREA "INPUT"
var txtInput = document.querySelector("#txt-Input");

// console.log(txtInput);
// console.log(txtInput.value);  // Read Value of tag/txt-Input

// Reference to DIV OUTPUT
var outputDiv = document.querySelector("#output");

// btnTranslate.addEventListener("click", function clickHandler(){

//     outputDiv.innerText = "asdjlas " + txtInput.value;
// })


// server url for network call
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){

    return serverURL + "?" + "text=" + input
    //This function will return complete url with text
}

function errorHandler(error) {

    //error handling 
    console.log("error occured", error);
    alert("Something wrong with server! Try again after some time");
}

function clickHandler(){

    var userInput = txtInput.value;  // Taking input

    fetch(getTranslationURL(userInput))    // calling server for processing
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;   // output
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click",clickHandler);



