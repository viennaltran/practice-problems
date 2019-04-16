function getFileExtension(i) {

    // i will be a string, but it may not have a file extension.
    // return the file extension (with no period) if it has one, otherwise false

    // If there is no period in the string, it's not a filename so we can return false
    if (i.indexOf(".") < 0) {
        return false;
    }

    // Otherwise, we need to grab and return the extension
    var filenameParts = i.split(".");
    return filenameParts[filenameParts.length-1];
}