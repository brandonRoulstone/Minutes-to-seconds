let inpOne = document.getElementById("inputOne");
let inpTwo = document.getElementById("inputTwo");


function MinutesToSeconds(){
    let finalResult = (parseFloat(inpOne.value) * 60)
    inpTwo.value = parseFloat(finalResult.toFixed(0))
}
MinutesToSeconds();

inpOne.addEventListener("input", MinutesToSeconds)