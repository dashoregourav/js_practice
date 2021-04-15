const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const EvenNumbers = num.filter(getEvenNumbers);

function getEvenNumbers(items) {
    return items % 2 == 0;
};

console.log("Even Elements:", EvenNumbers);
const EvenNumberSquares = EvenNumbers.map(getSquare);
function getSquare(items) {
    return items * items;
};

console.log("Even Elements Squares=", EvenNumberSquares);
const result = EvenNumberSquares.reduce(getSum, 0);
function getSum(sum, items) {
    return sum += items;
};
console.log("Final Result=", result);