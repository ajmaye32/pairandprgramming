function compareAnagrams(x, y) {
    a = x.split('').sort();
    b = y.split('').sort();
    anagrams = true;
    for (i = 0; i < a.length && anagrams; i++) {
        console.log(i)
        if (a.length === b.length) {
            if (a[i] === b[i]) {
                console.log(`It matches`)
            } else {
                console.log(`It doesn't`)
                anagrams = false;
            }
        } else {
            console.log(`${a} The number of letters are different than what ${b} has`)
            anagrams = false;
        }
    }
    if (anagrams) {
        console.log(`They are Anagrams`)
    } else {
        console.log(`They are not Anagrams`)
    }
    return anagrams;
}
compareAnagrams('Latori', ' Treena');