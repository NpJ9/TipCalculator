const buttons = document.querySelectorAll("button");
let bill = document.getElementById("totalBill");
let people = document.getElementById("totalPeople");
let customTip = document.getElementById("custom_tip");


let tipPercentage = '';
let tipPerPerson = '';
let total = '';



// On button click get input data

let getTipPercentage = () => {
    buttons.forEach(button => {
         button.addEventListener('click' , (e) =>{
            bill = document.getElementById("totalBill").value;911
            people = document.getElementById("totalPeople").value;
            let value = e.target.textContent;
                if (value === '10%' || value === '15%' || value === '25%' || value === '50%') {
                    tipPercentage = "0" + "." + value;
                    } else if (value === '5%'){
                        tipPercentage = "0" + "." + "0" + value;
                    }  else if (value ==="CALCULATE"){
                        calculate(bill, people, tipPercentage);
                    } else { // Get custom tip percentage
                        tipPercentage = document.getElementById("custom_tip").value 
                                if (tipPercentage >= 10) {
                                    tipPercentage = "0" + "." + tipPercentage;
                                } else {
                                    tipPercentage = "0" + "." + "0" + tipPercentage;
                                }
                            }
         }
    )})
};

// Calculate input data and change display

let calculate = (bill, people, tipPercentage ) => {

    if (bill >= '0' && people >= '0' &&  tipPercentage >='0'){
    total = parseFloat(bill) * parseFloat(tipPercentage); 
    tipPerPerson = parseFloat(total) / parseFloat(people);
    document.getElementById("tipAmount").textContent = "$" + parseFloat(tipPerPerson).toFixed(2);
    document.getElementById("totalAmount").textContent ="$" + parseFloat(total).toFixed(2); 
    document.getElementById("NumofPeople").textContent = people + " people";
    document.getElementById("NumofPeople2").textContent = people + " people";     
    } else {

        // TO DO  check each input
        // if input is not greater than 0
        // add Error style to that input 
        // if its correct return it to default (Remove error)
        console.log("FILL IN INPUTS")
        document.getElementById("totalBill").classList.add("error");
        
 

    }

}

getTipPercentage();

// buttons.forEach(button => {
//     button.addEventListener('click' , (e) =>{
//         let value = e.target.textContent;
//         if (customTip.value > 0 ) {
//             bill = document.getElementById("totalBill").value;
//             people = document.getElementById("totalPeople").value;
//             document.getElementById("NumofPeople").textContent = people + " people";
//             document.getElementById("NumofPeople2").textContent = people + " people"; 
//             value = "0" + "." + customTip.value;
//             // Calculate

//             total = parseFloat(bill) * parseFloat(value); 
//             tipPerPerson = parseFloat(total) / parseFloat(people);
//             document.getElementById("tipAmount").textContent = "$" + parseFloat(tipPerPerson).toFixed(2);
//             document.getElementById("totalAmount").textContent ="$" + parseFloat(total).toFixed(2); 
//             customTip =
        
//         } else if (value === "RESET") { // Reset values
//             document.getElementById("totalBill").value = null;
//             document.getElementById("totalPeople").value = null;
//             document.getElementById("tipAmount").textContent = "$0";
//             document.getElementById("totalAmount").textContent = "$0";
//             document.getElementById("custom_tip").value = ""
//             people = document.getElementById("totalPeople").value;
//             document.getElementById("NumofPeople").textContent =  "0 people";
//             document.getElementById("NumofPeople2").textContent =  "0 people"; 
//             tipPerPerson = '';
//             total = '';
//             customTip = '';
//         } else  if (value === '5%' || value === '10%' || value === '15%' || value === '25%' || value === '50%'){ 
//             bill = document.getElementById("totalBill").value;
//             people = document.getElementById("totalPeople").value;
//             console.log("This is the bill: " + bill + " This is the people: " + people);

//             if (bill > 0 && people > 0 ) { // Checks if inputs filled
//                 document.getElementById("NumofPeople").textContent = people + " people";
//                 document.getElementById("NumofPeople2").textContent = people + " people"; 
//                 value = "0" + "." + value;

//                 // Calculate
//                 total = parseFloat(bill) * parseFloat(value);
//                 tipPerPerson = parseFloat(total) / parseFloat(people)
//                 document.getElementById("tipAmount").textContent = "$" + parseFloat(tipPerPerson).toFixed(2);
//                 document.getElementById("totalAmount").textContent ="$" + parseFloat(total).toFixed(2); 

//             } else { // If no Bill/People throw error
//                 document.getElementById("tipAmount").textContent = "$0";
//                 document.getElementById("totalAmount").textContent = "$0";
//                 console.log("FILL IN THE BILL AND PEOPLE CANT CALCULATE")
//             }
     
//         }
//     });
// });