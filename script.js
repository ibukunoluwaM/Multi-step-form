const form = document.querySelector("form");
const stepOneNxtBtn= document.querySelector("#next1");
const stepOneInput = document.querySelectorAll(".steps-1 input");
const warningName = document.querySelector(".warningName");
const warningEmail = document.querySelector(".warningEmail");
const warningNum = document.querySelector(".warningNum");
const stepTwo = document.querySelector(".steps-2");
const spans = document.querySelectorAll(".side-bar span");
const checkBoxStepTwo = document.querySelector(".toggle-parent input");
const yearlyBox = document.querySelector(".yearly"); 
const monthlyBox = document.querySelector(".monthly"); 
const yearlyPlan =document.querySelector(".yearlyplan");
const monthlyPlan = document.querySelector(".monthlyplan");
const backBtns = document.querySelectorAll("#back");
const nextBtn = document.querySelectorAll("#next");
const plans = document.querySelectorAll(".plans");
// const yearlyPlans = document.querySelectorAll(".yearlyplan");
const stepTwoNxtBtn = document.querySelector("#next2");
const yearlyPrices = document.querySelectorAll(".yearlyprice");
const monthlyPrices = document.querySelectorAll(".monthlyprice");
const stepThree = document.querySelector(".stepsMonthly-3");
const checkBoxStepThree = document.querySelectorAll(".stepsMonthly-3 input");
const addOnParent = document.querySelectorAll(".add-onParent");
const stepThreeNxtBtn = document.querySelector("#next3");
const stepFour = document.querySelector(".stepsMonthly-4");
const change = document.querySelector(".change");
const planType = document.querySelector(".planType");
const planName = document.querySelector(".plan");
const planPrice = document.querySelector(".plan-price");
const chargesName = document.querySelector(".chargesName");
const otherCharges = document.querySelector(".otherCharges");
const warningPlan = document.querySelector(".warningplan");
const totalPrice = document.querySelector(".totalPrice");
const confirmBtn = document.querySelector("#confirm");
const stepFive = document.querySelector(".step5");



// for change of step number
function changeStepColor(y, x) {
spans.forEach(span=> {
    document.querySelector(y).classList.add("side-bar-background");
    document.querySelector(x).classList.remove("side-bar-background");
 })
}


// for the backbtn 
function goBack(step) {
    document.querySelector(`.step${step}`).style.display = "none";
    var newStep = step - 1;
    document.querySelector(`.step${newStep}`).style.display = "block";
    changeStepColor(`.span${newStep}`, `.span${step}`);
    if (step !== newStep) {
        document.querySelector(`.step${step}`).style.display = "none";
    }

}




// stepOne form
form.addEventListener("submit", function (e) {
    e.preventDefault();

        let name = stepOneInput[0].value;
        let email = stepOneInput[1].value;
        let number= stepOneInput[2].value;

        stepOneInput.forEach(input => {

            function clearWarning() {
                warningEmail.innerHTML = "";
                warningName.innerHTML = "";
                warningNum.innerHTML = "";
                input.style.border = "1px solid hsl(231, 11%, 63%)";
            }
            
            if (input.value == "" && input.classList.contains("border")) {
                warningName.innerHTML = "This field is required";
                input.style.border = "1px solid red";
                warningName.classList.add("red");            
                setTimeout(clearWarning, 2000);        
            } else if (input.value == "" && input.classList.contains("email")) {
                warningEmail.innerHTML = "This field is required";
                warningEmail.classList.add("red");     
                input.style.border = "1px solid red";
                setTimeout(clearWarning, 2000);               
            } else if(input.value == "" && input.classList.contains("num")) {
                warningNum.innerHTML = "This field is required";
                input.style.border = "1px solid red";
                warningNum.classList.add("red"); 
                setTimeout(clearWarning, 2000);        
            } else if(name!=="" && email!=="" && number!==""){
                form.style.display = "none";
                stepTwo.style.display = "block";
                changeStepColor(".two", ".one" );
                // nextStep(1);
            }
        })


})


// for the step 2 toggle
function checkBoxFunction() {
    changeStepColor(".three", ".two");
    stepThree.style.display = "block";
    stepTwo.style.display = "none";
}

// step 2 plans
checkBoxStepTwo.addEventListener("click", function () {
            if(checkBoxStepTwo.checked == true) {
                yearlyBox.classList.add("monthly");
                monthlyBox.classList.remove("monthly");
                monthlyBox.classList.add("text-grey");

                monthlyPlan.classList.add("none");
                monthlyPlan.classList.remove("flex");
                yearlyPlan.classList.add("flex");
                planName.innerHTML = "(Yearly)";

                // moving to step 3
               stepTwoNxtBtn.addEventListener("click", checkBoxFunction);

                    monthlyPrices.forEach(price => {
                        price.classList.add("none");
                    })
                    yearlyPrices.forEach(price => {
                        price.classList.remove("none");
                        price.classList.add("block");
                    })
            } else {
                yearlyBox.classList.remove("monthly");
                monthlyBox.classList.add("monthly");
                yearlyBox.classList.add("text-grey");

                yearlyPlan.classList.remove("flex");
                yearlyPlan.classList.add("none");
                monthlyPlan.classList.add("flex");
                monthlyPlan.classList.remove("none");
                planName.innerHTML = "(Monthly)";


                // moving to step 
                stepTwoNxtBtn.addEventListener("click", checkBoxFunction);

                    monthlyPrices.forEach(price => {
                        price.classList.remove("none");
                        price.classList.add("block");
                    })
                    yearlyPrices.forEach(price => {
                        price.classList.remove("none");
                        price.classList.add("none");
                    })
                }

})

// so incase user doesnt click the button, the next btn still works
if(monthlyPlan.classList.contains("flex")){
    stepTwoNxtBtn.addEventListener("click", checkBoxFunction);

    monthlyPrices.forEach(price => {
        price.classList.remove("none");
        price.classList.add("block");
        planName.innerHTML = "(Monthly)";

    })
    yearlyPrices.forEach(price => {
        price.classList.add("none");
    })
}

// choose plans
var addOnPrice = 1;
var addOnAddition;
var priceValue = 9;
var planTypeName;
var addOnName;
plans.forEach(plan => {
    plan.addEventListener("click", function (e) {

    let arcade1 = plans[0];
    let advanced1 = plans[1];
    let pro1 = plans[2];
    let arcade2 = plans[3];
    let advanced2 = plans[4];
    let pro2 = plans[5];


    if(e.target.classList.contains("arcademonth") || e.target.classList.contains("arcadeyear")){
        planTypeName = "Arcade";
        arcade1.classList.add("purple-border", "grey-background", "text-grey");
        arcade2.classList.add("purple-border", "grey-background", "text-grey");
        pro1.classList.remove("purple-border", "grey-background", "text-grey");
        pro2.classList.remove("purple-border", "grey-background", "text-grey");
        advanced1.classList.remove("purple-border", "grey-background", "text-grey");
        advanced2.classList.remove("purple-border", "grey-background", "text-grey");

    } else if (e.target.classList.contains("advancedmonth") || e.target.classList.contains("advancedyear")) {
        priceValue = 12;
        planTypeName = "Advanced";
        advanced1.classList.add("purple-border", "grey-background", "text-grey");
        advanced2.classList.add("purple-border", "grey-background", "text-grey");
        arcade1.classList.remove("purple-border", "grey-background", "text-grey");
        arcade2.classList.remove("purple-border", "grey-background", "text-grey");
        pro1.classList.remove("purple-border", "grey-background", "text-grey");
        pro2.classList.remove("purple-border", "grey-background", "text-grey");

    } else {
        priceValue = 15;
        planTypeName = "Pro";
        pro1.classList.add("purple-border", "grey-background", "text-grey");
        pro2.classList.add("purple-border", "grey-background", "text-grey");
        advanced1.classList.remove("purple-border", "grey-background", "text-grey");
        advanced2.classList.remove("purple-border", "grey-background", "text-grey");
        arcade1.classList.remove("purple-border", "grey-background", "text-grey");
        arcade2.classList.remove("purple-border", "grey-background", "text-grey");
    }

  


    checkBoxStepThree.forEach(check => {
    
        check.addEventListener("click", function (e) {
        let addOn = e.target.parentElement;
        let checkBoxOne = checkBoxStepThree[0];
        let checkBoxTwo = checkBoxStepThree[1];
        let checkBoxThree = checkBoxStepThree[2];

        addOnName = e.target.nextElementSibling.children[0].innerHTML

        if(e.target.checked) {
            addOn.classList.add("grey-background", "purple-border");
        } else {
            addOn.classList.remove("grey-background", "purple-border");
        }
        
        
        if(checkBoxOne.checked && addOnName == "Online service") {
            addOnPrice = 1;
            addOnAddition = 1;
            if(checkBoxOne.checked && checkBoxTwo.checked) {
                addOnAddition = 3;
            } else if(checkBoxOne.checked && checkBoxThree.checked) {
                addOnAddition = 3;
            }
        } else if (checkBoxTwo.checked && addOnName == "Larger storage") {
            addOnPrice = 2;
            addOnAddition = 2;
            if(checkBoxTwo.checked && checkBoxThree.checked) {
                addOnAddition = 4;
            } else if(checkBoxTwo.checked && checkBoxThree.checked && checkBoxOne.checked) {
                addOnAddition = 5;
            }
        } else if (checkBoxThree.checked && addOnName == "Customizable Profile") {
           addOnPrice = 2;
           addOnAddition = 2;
        }

        if(yearlyPlan.classList.contains("flex")) {
            if(checkBoxOne.checked && addOnName == "Online service") {
                addOnPrice = 10;
                addOnAddition = 10;
                if(checkBoxOne.checked && checkBoxTwo.checked) {
                    addOnAddition = 30;
                } else if(checkBoxOne.checked && checkBoxThree.checked) {
                    addOnAddition = 30;
                }
            } else if (checkBoxTwo.checked && addOnName == "Larger storage") {
                addOnPrice = 20;
                addOnAddition = 20;
                if(checkBoxTwo.checked && checkBoxThree.checked) {
                    addOnAddition = 40;
                } else if(checkBoxTwo.checked && checkBoxThree.checked && checkBoxOne.checked) {
                    addOnAddition = 50;
                }
            } else if (checkBoxThree.checked && addOnName == "Customizable Profile") {
               addOnPrice = 20;
               addOnAddition = 20;
            }

            
            planPrice.innerHTML = `$${priceValue}/yr`;
            let planInfo = document.createElement("div");
            planInfo.classList.add("flexClass");
            planInfo.innerHTML = `
            <p class="chargesName">${addOnName}</p>
            <p class="chargesPrices">$${addOnPrice}/yr</p>
            `
            otherCharges.appendChild(planInfo);
            totalPrice.innerHTML = `$${priceValue + addOnAddition}/yr`;
        }

        planPrice.innerHTML = `$${priceValue}/mo`;
        let planInfo = document.createElement("div");
        planInfo.classList.add("flexClass");
        planInfo.innerHTML = `
        <p class="chargesName">${addOnName}</p>
        <p class="chargesPrices">$${addOnPrice}/mo</p>
        `
        otherCharges.appendChild(planInfo);
        totalPrice.innerHTML = `$${priceValue + addOnAddition}/mo`;
        })
      

    })


    stepThreeNxtBtn.addEventListener("click", function() {
        changeStepColor(".four", ".three");
        stepThree.style.display = "none";
        stepFour.style.display = "block";
        planType.innerHTML = planTypeName;

       
 
        // chargesName.innerHTML = addOnName;

    })
})
})


// change plans
change.addEventListener("click", function () {
    stepFour.style.display = "none"
    stepTwo.classList.add("block");
    stepTwo.classList.remove("none");
})


confirmBtn.addEventListener("click", function() {
    stepFour.style.display = "none";
    stepFive.style.display = "block";
})