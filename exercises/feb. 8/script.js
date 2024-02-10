

const updateThermometer = () =>{
     const goal = 1000;
     const funds = document.getElementById(txt-funds).value;
     const errorSpan = document.getElementById("funds-error");
     errorSpan.innerHTML = "";
     const therm = document.getElementById("thermometer");

     /*Error */
     if(isNaN(funds)) {
        errorSpan.innerHTML = "Not a valid number";
     } else if (funds < 0) {
        errorSpan.innerHTML = "Negative number";
     }
};

document.getElementById.onclick = updateThermometer;