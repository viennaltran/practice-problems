function longestString(i) {

    // i will be an array.
    // return the longest string in the array

    var longestLength = 0;
    var returnString = "";

    i.forEach(function(item) {
        if ((typeof item === 'string') && (item.length > longestLength)) {
            longestLength = item.length;
            returnString = item;
        }
    });

    return returnString;

}