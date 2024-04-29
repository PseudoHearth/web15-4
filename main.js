function checkNumber() {
    var number = parseInt(prompt("Please enter the number of month"));

    if (isNaN(number)) { 
        alert("That's not a number!");
    } else if (number === 3 || number === 4 || number === 5) {
        alert("Spring!");
    } else if (number === 6 || number === 7 || number === 8) {
        alert("Summer!");
    } else if (number === 9 || number === 10 || number === 11) {
        alert("Autumn!");
    } else if (number === 12 || number === 1 || number === 2) {
        alert("Winter!");
    } else if (number > 12 || number < 1) {
        alert("There is no such a month!");
    }
}