// получение минимального элемента массива
exports.min = function min(array) {
    var min = array[0]; // берем первый элемент массива
    for (var i = 0; i < array.length; i++) { // перебор массива
        if (min > array[i]) min = array[i]
    }
    return min;
}
// получение максимального элемента массива
exports.max = function max(array) {
    var max = array[0]; // берем первый элемент массива
    for (var i = 0; i < array.length; i++) { // перебор массива
        if (max < array[i]) max = array[i]
    }
    return max;
}
// получение среднего арифметического
exports.avg = function avg(array) {
    // var arr = [];
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    result = sum / array.length;
    return result
}
