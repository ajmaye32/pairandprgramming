function isPrime(num) {

    if (num === 2) {
        return true;
    } else if (num > 1) {
        for (var i = 2; i < num; i++) {

            if (num % i !== 0) {
                return true;
            } else if (num === i * i) {
                return false
            } else {
                return false;
            }
        }
    } else {
        return false;
    }

}
function sortPrime(primeArray) {
    let prime = [];
    let notPrime = [];

    for (let number of primeArray) {
        if (isPrime(number)) {
            prime.push(number);

        } else {
            notPrime.push(number);
        }
    }
    // create an object with the prime and not prime array in it
    const returnObject = {
        notPrime,
        prime,
    };

    return returnObject;
}
console.log(sortPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sortPrime([10, 18, 19, 29, 33, 35, 47, 66, 83]));
