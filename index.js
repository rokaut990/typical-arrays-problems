
exports.min = function min (array) {
    if (array == undefined || array.length == 0) {
        return 0
    }
    array.sort(function(a, b) {
    return a - b;
    });
    return array.shift();
}

exports.max = function max (array) {
    if (array == undefined || array.length == 0) {
        return 0
    }  
  array.sort(function(a,b) {
      return a - b;
  })
  return array[array.length - 1]
}   

exports.avg = function avg (array) {
    if (array == undefined || array.length == 0) {
        return 0
    }
var total = array.reduce(function(a, b){
   return a + b;
});
   return total/array.length;
}
