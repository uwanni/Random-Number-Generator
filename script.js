  
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("buttonID").addEventListener("click", function(){
        generateNumbers();    
});
});

function generateNumbers(){

    var userInputFrom = document.getElementById("numberFrom").value;
    var userInputTo = document.getElementById("numberTo").value;

    var validatedFrom;
    var validatedTo;


    // validating the from value
    if(userInputFrom.trim() !== ""){

        // regex variable is to use with test() to check if the user inputs only contain digits.
        var regex = /^\d+$/ ;                                                   
        var numberFromChecked = regex.test(userInputFrom);

        if(numberFromChecked !== true){
            document.getElementById("instructionTextFrom").innerHTML = "Enter digits only."
        }
        else {
            document.getElementById("instructionTextFrom").innerHTML = ""
            validatedFrom = parseInt(userInputFrom);                // convert user input to a int
        }
    }
    else {
        document.getElementById("instructionTextFrom").innerHTML = "Please enter number."
    }



    // validating the to value
    if(userInputTo.trim() !== ""){

        // regex variable is to use with test() to check if the user inputs only contain digits.
        var regex = /^\d+$/ ;                                                   
        var numberToChecked = regex.test(userInputTo);

        if(numberToChecked !== true){
            document.getElementById("instructionTextTo").innerHTML = "Enter digits only."
        }
        else {
            validatedTo = parseInt(userInputTo);    // convert user input to a int
            document.getElementById("instructionTextTo").innerHTML = ""
        }
    }
    else {
        document.getElementById("instructionTextTo").innerHTML = "Please enter number."  
    }


    // check if there is a gap of at least 50
    var gapBetween;

    if (validatedFrom > validatedTo) {
        gapBetween = validatedFrom - validatedTo;
    }
    else {
        gapBetween = Math.abs(validatedTo-validatedFrom);
    }


    if (gapBetween>50){
        document.getElementById("showResults").innerHTML ="Here are 50 random numbers within the range of " + validatedFrom + " and " + validatedTo + ".";
        document.getElementById("showResults").style.color = "black";       
    }
    else if(gapBetween<50){
        document.getElementById("showResults").innerHTML ="Oops, can not process. Please be sure that there is a gap of at least 50 between the given numbers.";
        document.getElementById("showResults").style.color = "rgb(190, 73, 52)";
    }
    else{
        document.getElementById("showResults").innerHTML ="Looks like you have entired an invalid input. Please chack again.";   
        document.getElementById("showResults").style.color = "rgb(190, 73, 52)";
    }


}
