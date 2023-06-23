// convert the string to Integers. and If not integer, output is NaN.

    var numberFromChecked = parseInt(userInputFrom);                       
    var numberToChecked = parseInt(userInputTo);








// check if the inputs are NaN s.

         if (!isNaN(numberFromChecked) && !isNaN(numberToChecked)){        
            document.getElementById("showResults").innerHTML ="Here are 50 random numbers within the range of " + numberFromChecked + " and " + numberToChecked ;
        }
        else{
            document.getElementById("showResults").innerHTML = "Oopos! Please check your input values again." ;
        }        







// one way to do that without changing the instructionText

    if ((userInputFrom.trim() !== null) && (userInputTo.trim() !== null)){      //remove the spaces and check if the user inputs are not null

        var regex = /^\d+$/ ;                                                   // regex variable is to use with test() to check if the user inputs only contain digits.
        var numberFromChecked = regex.test(userInputFrom);
        var numberToChecked = regex.test(userInputTo);

         if ((numberFromChecked !== false) && (numberToChecked !== false)){    

            var gapBetween;                                                    // check if there is a gap of at leat 50.

            if (userInputFrom>userInputTo){
                gapBetween = userInputFrom - userInputTo;
            }
            else {
                gapBetween = Math.abs(userInputTo - userInputFrom);           // convert minus value to positive
            }

            if (gapBetween < 50) {
                document.getElementById("showResults").innerHTML ="Oh, can not process. Please be sure that there is a gap of at least 50 between the given numbers."; 
            }
            else {
                document.getElementById("showResults").innerHTML ="Here are 50 random numbers within the range of " + userInputFrom + " and " + userInputTo + ".";
            }

            }

            else{
                document.getElementById("showResults").innerHTML = "Oops! Please check your numbers again! All the fileds must be filled and You can input only digits." ;
            } 
    }   
