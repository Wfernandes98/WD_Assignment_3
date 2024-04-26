/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const monday=document.getElementById("monday")
const tuesday=document.getElementById("tuesday");
const wednesday=document.getElementById('wednesday');
const thursday=document.getElementById("thursday");
const friday=document.getElementById('friday');

let CostPerDay=35;
let NumberOfDays=0;
let TotalCost=0;

let clear=document.getElementById("clear-button");
let HalfDay=document.getElementById("half");
let FullDay=document.getElementById("full");
let costLabel=document.getElementById("calculated-cost");






/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.addEventListener('click', function(){
    if (monday.classList.contains("clicked")) {
        monday.classList.remove('clicked');
        NumberOfDays= NumberOfDays-1;
    } else {
        monday.classList.toggle('clicked');
        NumberOfDays=NumberOfDays+1;
    }
    calculate();
});
tuesday.addEventListener('click', function(){
    if (tuesday.classList.contains("clicked")) {
        tuesday.classList.remove('clicked');
        NumberOfDays= NumberOfDays-1;
    } else {
        tuesday.classList.toggle('clicked');
        NumberOfDays=NumberOfDays+1;
    }
    calculate();
});
wednesday.addEventListener('click', function(){
    if (wednesday.classList.contains("clicked")) {
        wednesday.classList.remove('clicked');
        NumberOfDays= NumberOfDays-1;
    } else {
        wednesday.classList.toggle('clicked');
        NumberOfDays=NumberOfDays+1;
    }
    calculate();
});
thursday.addEventListener('click', function(){
    if (thursday.classList.contains("clicked")) {
        thursday.classList.remove('clicked');
        NumberOfDays= NumberOfDays-1;
    } else {
        thursday.classList.toggle('clicked');
        NumberOfDays=NumberOfDays+1;
    }
    calculate();
});
friday.addEventListener('click', function(){
    if (friday.classList.contains("clicked")) {
        friday.classList.remove('clicked');
        NumberOfDays= NumberOfDays-1;
    } else {
        friday.classList.toggle('clicked');
        NumberOfDays=NumberOfDays+1;
    }
    calculate();
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clear.addEventListener('click',function(){
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');

    NumberOfDays=0;
    TotalCost=0;
    costLabel.innerHTML=0;
});




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

HalfDay.addEventListener('click', function() {
    CostPerDay= 20;
    HalfDay.classList.add('clicked');
    FullDay.classList.remove('clicked');
    costLabel.innerHTML=TotalCost;

    calculate()
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

FullDay.addEventListener('click', function() {
    CostPerDay= 35;
    HalfDay.classList.remove('clicked');
    FullDay.classList.add('clicked');
    costLabel.innerHTML=TotalCost;

    calculate()
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    TotalCost=NumberOfDays*CostPerDay;
    costLabel.innerHTML=TotalCost
}
