module.exports = function toReadable(number) {
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const unitTeens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundreds = [
        "",
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ];

    const arrNumber = number
        .toString()
        .split("")
        .map((el) => +el);
    let result = "";
    console.log(arrNumber);
    if (number < 10) {
        return units[number];
    }

    if (number > 9 && number < 20) {
        return unitTeens[number - 10];
    }

    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            result += tens[arrNumber[0]];
        } else {
            result += tens[arrNumber[0]] + " " + units[arrNumber[1]];
        }
        return result;
    }

    if (number >= 100 && number < 1000) {
        if (arrNumber[1] === 0 && arrNumber[2] === 0) {
            result += hundreds[arrNumber[0]];
        } else if (arrNumber[1] === 0) {
            result += hundreds[arrNumber[0]] + " " + units[arrNumber[2]];
        } else if (arrNumber[1] === 1) {
            result += hundreds[arrNumber[0]] + " " + unitTeens[arrNumber[2]];
        } else if (arrNumber[2] === 0) {
            if (arrNumber[1] === 1) {
                result += hundreds[arrNumber[0]] + " " + unitTeens[0];
            } else {
                result += hundreds[arrNumber[0]] + " " + tens[arrNumber[1]];
            }
        } else {
            result +=
                hundreds[arrNumber[0]] +
                " " +
                tens[arrNumber[1]] +
                " " +
                units[arrNumber[2]];
        }
        return result;
    }
};
