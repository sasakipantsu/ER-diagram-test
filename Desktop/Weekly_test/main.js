// 問題 1

const array = [2, 4, 7, 5, 4, 3, 8];

const newArray = array.filter((x, i, self) => {
    return self.indexOf(x) === i;
});

console.log(newArray);


// 問題 2

function leapYear(a) {
    if (a % 4 === 0 && a % 100 !== 0) {
        return "うるう年です";
    } else if (a % 400 === 0) {
        return "うるう年です";
    } else {
        return "うるう年ではありません";
    }
};

console.log(leapYear(2020));
console.log(leapYear(2021));