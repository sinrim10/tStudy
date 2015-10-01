/**
 * Created by skplanet on 2015-10-01.
 * Reduce..¿¹Á¦
 */
var arr = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
    return previousValue + currentValue;
});

console.log(arr);
