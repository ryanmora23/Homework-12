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
    "use strict";
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

// 2. calculate the average of numbers
function averageForLoop() {
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []);
    var sum = 0;
    var average = 0;
    for (i = 0; i < args.length; i++) {
        sum += args[i];
    }
    average = sum / args.length;
    return average;

}

function averageForEach() {
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []);
    var sum = 0;
    var average = 0;
    args.forEach(function(num) {
        sum += num;
    })
    average = sum / args.length;
    return average;
}

function averageForEachCustom() {
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []);
    var sum = 0;
    var average = 0;
    forEach(args, function() {
        sum += arguments[0];
    })
    average = sum / args.length;
    return average;
}

// 3. find the largest number of the inputs
function largestNumberForLoop() {
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []);
    var storeNum = 0;
    for (var i = 0; i < args.length; i++) {
        if (args[i] > storeNum) {
            storeNum = args[i];
        }
    }
    return storeNum;
}

function largestNumberForEach() {
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []);
    var storeNum = 0;
    args.forEach(function(num) {
        if (num > storeNum) {
            storeNum = num;
        }
    })
    return storeNum;
}

function largestNumberForEachCustom() {
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []);
    var storeNum = 0;
    forEach(args, function() {
        if (arguments[0] > storeNum) {
            storeNum = arguments[0];
        }
    })
    return storeNum;
}

// 4. find the longest string of the inputs
function longestStringForLoop() {
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []);
    var storeString = "";
    for (var i = 0; i < args.length; i++) {
        if (args[i].length > storeString.length) {
            storeString = args[i];
        }
    }
    return storeString;
}

function longestStringForEach() {
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []);
    var storeString = "";
    args.forEach(function(str) {
        if (str.length > storeString.length) {
            storeString = str;
        }
    })
    return storeString;
}

function longestStringForEachCustom() {
        "use stirct";
        var args = Array.prototype.slice.apply(arguments, []);
        var storeString = "";
        forEach(args, function() {
            if (arguments[0].length > storeString.length) {
                storeString = arguments[0];
            }
        })
        return storeString;
    }
    // 5. given an array of Date() objects (Oct 4th 2014, Oct 3rd 2014, Sept 30th 2014, Sept 1st 2012, March 13th 2010), 
    // in that order, sort them chronologically.     
    // Use http://devdocs.io/javascript/global_objects/date for reference on creating Date() objects with a specific date.
var lesDays = [new Date(2014, 9, 4), new Date(2014, 9, 3), new Date(2014, 8, 30), new Date(2012, 8, 1), new Date(2010, 2, 13)];

function dateChronForLoop(dates) {

    //i wanted to change dates into miliseconds, sort the array of milliseconds, 
    //then change them back ----- but i cant change the miliseconds back to a date lol
    //might try to do this again
    "use strict";
    for (var i = 0; i < dates.length; i++) {
        for (var j = i + 1; j < dates.length; j++) {
            if (+dates[i] > +dates[j]) {
                temp = dates[i];
                dates[i] = dates[j];
                dates[j] = temp;
            }
        }
    }
    return dates;
}

function findLowestDateAndSwap(value, i, array) {
    "use strict";
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
        if (+array[i] > +array[i + 1]) {
            temp = array[i]
            array[i] = array[i + 1]
            array[i + 1] = temp;
        }
    }
}

function dateChronForEach(dates) {
    "use strict";
    dates.forEach(findLowestDateAndSwap)
    return dates;
}

function dateChronForEachCustom(dates) {
    "use strict";
    forEach(dates, findLowestDateAndSwap);
    return dates;
}

var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];
var customers = [{
    firstname: "Joe",
    lastname: "Blogs"
}, {
    firstname: "John",
    lastname: "Smith"
}, {
    firstname: "Dave",
    lastname: "Jones"
}, {
    firstname: "Jack",
    lastname: "White"
}];

console.log(customers);

var projections = customers.filter(function(c) {
    if (c.firstname.charAt(0) === "J") {
        return true;
    }
}).map(function(c) {
    return "name: " + c.firstname + " " + c.lastname;
}).sort(sortByName);

function sortByName(c1, c2) {
    "use strict";
    return;
}

console.log(projections);
