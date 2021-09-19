const year = 2296;
let remainder = year % 4;
if (remainder == 0) {
    console.log("Your year is a LeapYear");
}else{
    console.log("Your year is not LeapYear");
}


// finding multiple value 
function isLeapYear(year) {
    const remainder = year % 4;
    if(remainder == 0){
        return true;
    }else{
        return false;
    }
}

const checkYear = isLeapYear(2000);
console.log(checkYear);

const check = isLeapYear(2005)
console.log(check);



// ----------------------
function checkLeapYear(years) {
    const remainders = years % 4;
    if (remainders == 0) {
        console.log(years + "is a LeapYear");
    }else{
        console.log(years + "is not LeapYear");
    }

}
const years =  prompt("Enter a Year :");
checkLeapYear(years);