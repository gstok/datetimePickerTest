



function getMonths (year) {
    return Array(12).fill(0).map((item, index) => index + 1);
}

function getDays (year, month) {
    let tmpDate = new Date(year, month, 0);
    return Array(tmpDate.getDate()).fill(0).map((item, index) => index + 1);
}

function getWeek (year, month, day) {
    let tmpDate = new Date(year, month, day);
    return tmpDate.getDay() + 1;
}

let days = getDays(2000, 2);
console.log(days);
