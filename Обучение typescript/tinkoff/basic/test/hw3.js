var appendFun = function (arrayOne, arrayTwo) {
    var res = [];
    arrayOne.forEach(function (item, index) {
        if (typeof item == typeof arrayTwo[index]) {
            res.push(item);
        }
    });
    return res;
};
appendFun([1, "Кря", true], [1, "Муу", false]);
var combineArray = function (arrayValues, arrayString) {
    var res = [];
    var res2 = [];
    var res3 = [];
    res = arrayValues.sort();
    res2 = arrayString.sort();
    res3 = res.concat(res2);
    console.log(res3);
    return res3;
};
combineArray([1, 4, 2, 5, 3], ["Ю", "A", "M"]);
