
function hideCookieMessage(){
    var element = document.getElementById('cookieMessage')
    element.style.visibility = 'hidden'
}

function  showAlert(){
    alert('This page says \r Loading weather report')
}

var myCTempArray = [['today',23.9, 18.3],['tomorrow',26.7,18.9],['friday',20.6,16.1], ['saturday',25.6, 21.1]]
var myFTempArray = [['today',75, 65],['tomorrow',80,66],['friday',69,61],['saturday',78,70]]

function showCelcius(){
    document.querySelectorAll('div.tempsFahrenheit').visibility = 'hidden'
}

function setTemps(divID, tempType){
    // use query selecter to find the div that has the ID equal to the name passed into the function
    // get the high value html in order to access the innerHtml for updating
    var theHighTemp = document.querySelector('div#' + divID)
    theHighTemp = theHighTemp.querySelector("div.temps")
    theHighTemp = theHighTemp.querySelector("div.high") 
    // theHighTemp.innerHTML = myFTempArray[0][1]

    // get the low value html in order to access the innerHtml for updating
    var theLowTemp = document.querySelector('div#' + divID)
    theLowTemp = theLowTemp.querySelector("div.temps")
    theLowTemp = theLowTemp.querySelector("div.low") 
    // theLowTemp.innerHTML = myFTempArray[0][2]

    if (tempType === 'F')  //if fahrenheit is chosen process the values for it.
    {
        for (var i = 0; i < myFTempArray.length; i++){
            // compare the day the value is working on in order to pull the correct value sets from the arrays
            if (myFTempArray[i][0] === divID){
                // if the current day query matches the array day, assign the low values to the low side and so on. 
                theHighTemp.innerHTML = myFTempArray[i][1] + "&deg;"
                theLowTemp.innerHTML = myFTempArray[i][2] + "&deg;"
            }
        }
    }
    else  // otherwise process the celcius values
    {
        for (var i = 0; i < myFTempArray.length; i++){
            if (myCTempArray[i][0] === divID){
                theHighTemp.innerHTML = myCTempArray[i][1] + "&deg;"
                theLowTemp.innerHTML = myCTempArray[i][2] + "&deg;"
            }
        }
    }
}


function showTemperatures(tempType){
    if (tempType === 'F'){
        setTemps('today', 'F')
        setTemps('tomorrow', 'F')
        setTemps('friday', 'F')
        setTemps('saturday', 'F')
    }
    else
    {
        setTemps('today', 'C')
        setTemps('tomorrow', 'C')
        setTemps('friday', 'C')
        setTemps('saturday', 'C') 
    }
    
}

showTemperatures('C')
//showFahrenheit()