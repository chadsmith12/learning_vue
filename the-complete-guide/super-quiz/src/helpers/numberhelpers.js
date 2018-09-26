function generateRandomNumber(min, max, except) { 
    min = Math.ceil(min);
    max = Math.floor(max);

    let number = Math.floor(Math.random() * (max - min + 1)) + min;

    if(number === except) {
        number = generateRandomNumber(min, max, except);
    }

    return number;
}

export {generateRandomNumber}