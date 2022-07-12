//Problema 1 ==================================================================

const generatePrimeNrs = (n) => {
    let currentNr = 2;
    let primeNrs = [];

    while (primeNrs.length < n) {
        if (primeNrs.length < 1) {
            primeNrs.push(currentNr)
        } else {
            let temp = [];
            let count = 0;
            for (let i = 0; i < primeNrs.length; i++) {
                let prime = primeNrs[i];
                if (currentNr % prime !== 0) {
                    count++;
                }
                count === primeNrs.length ? temp.push(currentNr) : null;
            }
            primeNrs = primeNrs.concat(temp);
        }


        currentNr++
    }
    return primeNrs;
}

console.log('PrimeNrs -----------------------------------------')
console.log(generatePrimeNrs(3));
console.log(generatePrimeNrs(15))
generatePrimeNrs(7);
generatePrimeNrs(13);
generatePrimeNrs(15);

//Problema 2 ==================================================================

const calculateEvenElementsSum = (arr) => {
    return arr.filter(nr => nr % 2 === 0).reduce((a, b) => { return a + b });
}

console.log(calculateEvenElementsSum([0, 1, 2, 3, 4, 5, 6]));

//Problema 3 ==================================================================

const sortNumbers = (arr) => {
    return {
        nrNegative: arr.filter(nr => nr < 0),
        nrPozitive: arr.filter(nr => nr >= 0),
        nrImpare: arr.filter(nr => nr % 2 !== 0),
        nrPare: arr.filter(nr => nr % 2 === 0)
    }
}

console.log(sortNumbers([-3, -6, -932, 2, 15, 3, 0, 100, 101, -100, -3232]));

//Problema 4 ==================================================================

const calcAverage = (arr) => {
    return arr.reduce((a, b) => { return a + b }, 0) / arr.length;
}

console.log(calcAverage([0, 7, 13, 22, 28, 12]));

//Problema 5 ==================================================================

const filterZero = (arr) => {
    return arr.filter(nr => nr !== 0);
}

console.log(filterZero([0, 9, 0, 1, 2, 3, 0, 0, 0, 7]));

//Problema 6 ==================================================================

const findMainDiag = (matrix) => {
    let n = matrix.length;
    let comparison = '1'.repeat(n);
    let temp = []
    matrix.forEach((row, i) => {
        temp.push(row[i]);
    });
    if (temp.join('') === comparison) return true
    return false
}

console.log(findMainDiag([[1, 0, 0, 0, 1], [1, 1, 0, 1, 0], [1, 1, 1, 0, 0], [0, 0, 0, 1, 0], [0, 1, 0, 1, 1]]));

const findSecondDiag = (matrix) => {
    let n = matrix.length;
    let comparison = '1'.repeat(n);
    let temp = []
    matrix.reverse().forEach((row, i) => {
        temp.push(row[i]);
    });
    if (temp.join('') === comparison) return true
    return false
}

console.log(findSecondDiag([[1, 0, 0, 0, 1], [1, 1, 0, 1, 0], [1, 1, 1, 0, 0], [0, 1, 0, 1, 0], [1, 1, 0, 1, 1]]));