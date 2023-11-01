//If _ else 
let age: number = 15;

if (age < 15) {
    console.log("you can watch")
}
else {
    console.log("you can't watch")
}

// If_else if_else
let discount: number;
let itemCount = 11;

if ( itemCount > 0 && itemCount <=5){
    discount = 5;
} else if (itemCount > 5 && itemCount <=10){
    discount = 10;
} else {
    discount = 15;
}

console.log(`You got ${discount}% discount.`);