function hello() {
    let name = prompt("What is your name?");
    if (name) {
        document.getElementById("greeting").innerHTML = `hey yawl, ${name}!`;
    }
}

function conditional() {
    let currentHour = new Date().getHours();
    if (currentHour < 10) {
        alert("Good morning!");
    }   else if (currentHour < 18) {
            alert("Good day!")
    }   else {
        alert("Good evening!");
    };
}

function evalNumber() {

    let inputValue = parseInt(prompt("Enter any five-digit number without commas"));
    if ( inputValue > 99999 || inputValue < 10000 ) {
        alert(inputValue + "is not a valid 5-digit number. Please try again")
    } else if (inputValue % 2 === 0) {
        alert(`${inputValue} is an even number.`)                                  `)
    } else {
        alert(`${inputValue} is an odd number`)
    };
};
