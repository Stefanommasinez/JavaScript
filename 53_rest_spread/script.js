function sum(...num) {
    return num.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1, 2, 3, 4, 5));