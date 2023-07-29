  
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("buttonID").addEventListener("click", function(){
        generateNumbers();    
    });

    document.getElementById("Add").addEventListener("click", function(){
        addTheSelectedNumbers();
    });
    document.getElementById("Mul").addEventListener("click", function(){
        multiplyTheSelectedNumbers();
    });

    //close the alert - max 10 number selecting 
    var closeBtn = document.getElementById('closeButtonID');    
    closeBtn.addEventListener('click', function() {
        var alertWindow = document.getElementById("alertBoxID");
        alertWindow.style.visibility = "hidden";    
        document.getElementById("containerID").classList.toggle("blurry");

    });
});

var selectedCellsArray = [];

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


    // generate 50 random numbers
    if (gapBetween >= 49){
        document.getElementById("showResults").innerHTML ="";
        document.getElementById("showResultsInstructionsID").style.visibility="visible";
        document.getElementById("containerID").style.overflow="visible";

        var largerNumber;
        var smallerNumber;

        if(validatedFrom>validatedTo){  
            largerNumber = validatedFrom;
            smallerNumber = validatedTo;
        }
        else{
            largerNumber = validatedTo;
            smallerNumber = validatedFrom;
        }            

    // Generate 50 random numbers and display them in the table 
        var tableBody = document.querySelector("#resultsTableID tbody");
        selectedCellsArray = [];
        document.getElementById("addOutputID").style.color = "transparent";
        document.getElementById("mulOutputID").style.color = "transparent";
        tableBody.innerHTML = "";

        var numberOfRows = 5;
        var numberOfColumns = 10;
        var numberOfGeneratedNumbers = 0;
        numberArray = [];

        while(numberOfGeneratedNumbers<50){
            var randomNum = Math.floor(Math.random() * (largerNumber - smallerNumber + 1) + smallerNumber);

            //check if the generated number is already available
            if(!numberArray.includes(randomNum)){
                numberArray.push(randomNum);
                numberOfGeneratedNumbers++;
            }
        } 

        for(var row=0; row<numberOfRows; row++){
            var newRow = document.createElement("tr");

            for(var col=0; col<numberOfColumns; col++){

                var cell = document.createElement("td");
                cell.textContent = numberArray[row*numberOfColumns+col];   
                newRow.appendChild(cell);
                
                //assigning cell IDs and put selected 10 numbers to an array
                const cellID = row.toString() + col.toString();
                cell.setAttribute('id', cellID);

                var selectedNumberCount = 0;

                cell.addEventListener('click', selectNumbers.bind(null, cellID));

                function selectNumbers(cellID) {
                    var selectedCell = document.getElementById(cellID);

                    if(selectedNumberCount < 10){

                        if(!selectedCellsArray.includes(selectedCell.textContent)){
                            selectedCell.classList.toggle('selected');                                                 
                            selectedCellsArray.push(selectedCell.textContent);
                            selectedNumberCount++ ;
                        }else{
                            selectedCell.classList.toggle('selected'); 
                            selectedCellsArray.splice(
                                selectedCellsArray.indexOf(selectedCell.textContent), 1
                              );
                            selectedNumberCount -- ;                            
                        }
                    }
                    else{  
                        if(selectedCellsArray.includes(selectedCell.textContent)){
                            selectedCell.classList.toggle('selected'); 
                            selectedCellsArray.splice(
                                selectedCellsArray.indexOf(selectedCell.textContent), 1
                              );
                            selectedNumberCount -- ;
                        }
                        else{
                            function showAlert(message){
                                var alertWindow = document.getElementById("alertBoxID");
                                alertWindow.style.visibility = "visible";
                                var alertMessage = document.getElementById("alertMessageID");
                                alertMessage.textContent = message;
    
                                document.getElementById("containerID").classList.toggle("blurry");
    
                            }        
                            showAlert("You have already selected 10 numbers.");          
                        }                       
                    }
                }                               
            }
        tableBody.appendChild(newRow);   
        }      
        document.getElementById("calculationSection").style.visibility = "visible" ; 

    } 

    //if the user input values are invalid
    else if(gapBetween < 50){
        resetResults();
        document.getElementById("showResults").innerHTML ="Oops, can not process. Please be sure that there is a gap of at least 50 between the given numbers(inclusive).";
    }
    else{
        resetResults();
        document.getElementById("showResults").innerHTML ="Looks like you have entired an invalid input. Please chack again.";   
    }

    //reseting the unsaved results when the user input invalid values
    function resetResults(){
        var tableBody = document.querySelector("#resultsTableID tbody");       
        tableBody.innerHTML = "";

        document.getElementById("addOutputID").value="";
        document.getElementById("mulOutputID").value="";
        document.getElementById("calculationSection").style.visibility = "hidden" ;

        document.getElementById("showResults").style.color = "rgb(190, 73, 52)";
        document.getElementById("showResultsInstructionsID").style.visibility="hidden";

        document.getElementById("containerID").style.overflow="hidden";

    };

}

//calculations - Add the Selected Numbers
function addTheSelectedNumbers(){
    var addValue = 0;
    document.getElementById("addOutputID").style.color = "black";

    for(var arrayindex=0; arrayindex<selectedCellsArray.length; arrayindex++){
        addValue += parseInt(selectedCellsArray[arrayindex]);
        document.getElementById("addOutputID").value = addValue;
    }
}
//calculations - Multiply the Selected Numbers
function multiplyTheSelectedNumbers(){
    var mulValue = 1;
    document.getElementById("mulOutputID").style.color = "black";

    for(var arrayindex=0; arrayindex<selectedCellsArray.length; arrayindex++){
        mulValue *= parseInt(selectedCellsArray[arrayindex]);
        document.getElementById("mulOutputID").value = mulValue;
    }
}

//send the results to the database
function saveTheResults(){

}