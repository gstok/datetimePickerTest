



function getMonths (year) {
    return Array(12).fill(0).map((item, index) => index + 1);
}

function getDays (year, month) {
    
}


let date = new Date(2005, 12, 0);
console.log(date.getDate());

console.log(getMonths(1992));