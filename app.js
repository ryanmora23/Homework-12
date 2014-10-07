// use EACH the iteration methods discussed in class today (for loop, Array.forEach, custom forEach)
//  for EACH of the following problems
// 1. calculate the sum of numbers (can be any number of arguments)
function sumForLoop() {
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []);
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;

}

function sumForEach() {
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []);
    var sum = 0;
    args.forEach(function(num) {
        sum += num;
    });
    return sum;
}

function sumForEachCustom() {
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []);
    var sum = 0;
    forEach(args, function() {
        sum += arguments[0];
    })
    return sum;
}

function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

// 2. calculate the average of numbers
function averageForLoop() {
    var args = Array.prototype.slice.apply(arguments, []);
    var sum = 0;
    var average = 0;

}


// 3. find the largest number of the inputs
// 4. find the longest string of the inputs
// 5. given an array of Date() objects (Oct 4th 2014, Oct 3rd 2014, Sept 30th 2014, Sept 1st 2012, March 13th 2010), in that order, sort them chronologically.
// Use http://devdocs.io/javascript/global_objects/date for reference on creating Date() objects with a specific date.
