exports.min = function min(array) {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i]
    }
    return min;
}

exports.max = function max(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i]
    }
    return max;
}

exports.avg = function avg(array) {
    // var arr = [];
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    result = sum / array.length;
    return result
}
