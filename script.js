const buttons = document.querySelectorAll("button");

let bill = document.getElementById("totalBill");
let people = document.getElementById("totalPeople");
let customTip = document.getElementById("custom_tip");

let tipPerPerson = '';
let total = '';



buttons.forEach(button => {
    button.addEventListener('click' , (e) =>{

        let value = e.target.textContent;

        console.log("CUSTOM TIP is: " + customTip)
        if (customTip.value > 0 ) {
            bill = document.getElementById("totalBill").value;
            people = document.getElementById("totalPeople").value;
            document.getElementById("NumofPeople").textContent = people + " people";
            document.getElementById("NumofPeople2").textContent = people + " people"; 
            value = "0" + "." + customTip.value;
            
            total = parseFloat(bill) * parseFloat(value);
            tipPerPerson = parseFloat(total) / parseFloat(people);
            document.getElementById("tipAmount").textContent = "$" + parseFloat(tipPerPerson).toFixed(2);
            document.getElementById("totalAmount").textContent ="$" + parseFloat(total).toFixed(2); 

        } else if (value === "RESET") { // Reset 
            document.getElementById("totalBill").value = null;
            document.getElementById("totalPeople").value = null;
            document.getElementById("tipAmount").textContent = "$0";
            document.getElementById("totalAmount").textContent = "$0";
            tipPerPerson = '';
            total = '';
            
        } else {
            bill = document.getElementById("totalBill").value;
            people = document.getElementById("totalPeople").value;

            document.getElementById("NumofPeople").textContent = people + " people";
            document.getElementById("NumofPeople2").textContent = people + " people"; 

            value = "0" + "." + value;
            total = parseFloat(bill) * parseFloat(value);
            tipPerPerson = parseFloat(total) / parseFloat(people)
            document.getElementById("tipAmount").textContent = "$" + parseFloat(tipPerPerson).toFixed(2);
            document.getElementById("totalAmount").textContent ="$" + parseFloat(total).toFixed(2); 
        // console.log("Bill: $" + bill);
            // console.log("People: " + people);
            // console.log("Percentage: " + value);
            // console.log("Total tip $" + total);
            // console.log("Tip per person $" + tipPerPerson);
        }
    });
});