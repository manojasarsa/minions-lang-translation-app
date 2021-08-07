// Reference to BUTTON

var btnTranslate = document.querySelector("#btn-translate");

// console.log(btnTranslate);

// function clickHandler(){
//     console.log("clicked");
// }

// btnTranslate.addEventListener("click",clickHandler);

btnTranslate.addEventListener("click", function clickHandler(){
    console.log("clicked");
})

// Reference to TEXTAREA "INPUT"

var txtInput = document.querySelector("#txt-Input");

console.log(txtInput);
console.log(txtInput.value);  // Read Value of tag/txt-Input

// Reference to DIV OUTPUT

var outputDiv = document.querySelector("#output");

btnTranslate.addEventListener("click", function clickHandler(){

    outputDiv.innerText = "asdjlas " + txtInput.value;
})

// function clickHandler(){
//     outputDiv.innerText = "asfsfasf " + txtInput.value;
// };

// btnTranslate.addEventListener("click", clickHandler);



