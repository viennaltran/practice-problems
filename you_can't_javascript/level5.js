function arraySum(i) {

    // i will be an array, containing integers, strings and/or arrays like itself.
    // Sum all the integers you find, anywhere in the nest of arrays.

    var sum = 0;
    function sumArray(i) {
        i.forEach(function(item) {
            if (typeof item === 'number') {
                sum = sum + item;
            }
            // Remember that everything is an object in JavaScript!!!
            if (item instanceof Array) {
                sum = sum + sumArray(item);
            }
        });
    return sum;
    }

    return sumArray(i);

}