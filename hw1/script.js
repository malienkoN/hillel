//task 1
function evenOrOdd (a, b) {
    if (a % 2 === 0) {
        return a * b;
    } else {
        return a + b;
    }
}

console.log(evenOrOdd(3, 2));


//task 2
function findQuarter(x, y) {
    let quarter = '';

    if (x > 0 && y > 0) {
        quarter = 'I';
    } else if (x < 0 && y > 0) {
        quarter = 'II';
    } else if (x < 0 && y < 0) {
        quarter = 'III';
    } else if (x > 0 && y < 0) {
        quarter = 'IV';
    } else if (x !== 0 && y === 0) {
        quarter = 'x-axis';
    } else if (x === 0 && y !== 0) {
        quarter = 'y-axis';
    } else {
        quarter = 'center';
    }

    return quarter;
}

console.log(findQuarter(-5, 2));

//task 3
function sumOfPositive (n1, n2, n3) {
    let sum = 0;
    if (n1 > 0) {
        sum = sum + n1;
    }
    if (n2 > 0) {
        sum = sum + n2;
    }
    if (n3 > 0) {
        sum = sum + n3;
    }

    return sum;
}

console.log(sumOfPositive(-3, 0, 2));

//task 4
function calcMax(a, b, c) {
    const sum = a + b + c;
    const mult = a * b * c;

    if (sum > mult) {
        return sum + 3;
    } else {
        return mult + 3;
    }
}

console.log(calcMax(1, 0, 3));

//task 5
function determineTheGrade(r) {
    let grade = '';

    if (r >= 0 && r <= 19) {
        grade = 'F';
    } else if (r >= 20 && r <= 39) {
        grade = 'E';
    } else if (r >= 40 && r <= 59) {
        grade = 'D';
    } else if (r >= 60 && r <= 74) {
        grade = 'C';
    } else if (r >= 75 && r <= 89) {
        grade = 'B';
    } else if (r >= 90 && r <= 100) {
        grade = 'A';
    } else {
        grade = 'enter correct value';
    }

    return grade;
}

console.log(determineTheGrade(74));