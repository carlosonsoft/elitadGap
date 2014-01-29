function pepe()
{
    alert("pepe");
}

function createStats() {
    this.odd=0;
    this.even=0;
    this.maximuns=[];
    this.minimuns=[];

    //create numbers object and intializes to 0 ocurrences
    this.numbers = {};
    for (var i = 1; i < 11; i++) numbers[i] = 0;

    this.computeStats =computeStats;
    function computeStats(arrayOfRandoms) {

        for (var i = 0; i < arrayOfRandoms.length; i++) {

            numbers[arrayOfRandoms[i]]++;

            if (arrayOfRandoms[i] % 2)
                this.odd++;
            else
                this.even++;

            //console.log("elemento"+arrayOfRandoms[i].toString());
        }

        this.maximuns = calculateMaxMin(numbers, true);
        this.minimuns = calculateMaxMin(numbers, false);

        //console.log(maximuns.join(",") + "--" + minimuns.join(","));

    }

    /**
    Calculate the max or min properties of an object, object must contain only numeric properties.
    object: the object that contains the properties
    op: If op is thruly calcula the maximums otherwise compute the minimum
    returns an array with the names of the properties calculated
    **/

    this.calculateMaxMin = calculateMaxMin;
    function calculateMaxMin(object, op) {
        var properties = [];
        var value = null;

        for (var key in object) {
            if (value == null || object[key] == value) {
                properties.push(key);
                value = object[key]
            } else if (op == true && object[key] > value) {
                properties = [key];
                value = object[key];
            } else if (op != true && object[key] < value) {
                properties = [key];
                value = object[key];
            }
        }

        return properties;
    }


    return this;
}


function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


function generateRandomArray(nitems) {
    var elements = [];

    for (var i = 0; i < nitems; i++) {
        elements.push(Math.floor((Math.random() * 10) + 1));
        //console.log(elements[i]);
    }

    return elements;
}
