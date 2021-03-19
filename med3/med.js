function gdc_two_numbers(a, b) {
    var R;
    while ((a % b) > 0) {
        R = a % b;
        a = b;
        b = R;
    }
    return b;
}

console.log(gdc_two_numbers(336, 360));
console.log(gdc_two_numbers(78, 126));