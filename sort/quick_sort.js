var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]

function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr.slice(0)
  }
  var left = []
  var right = []
  var mid = [arr[0]]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < mid[0]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quick_sort(left).concat(mid).concat(quick_sort(right))
}

var res = quick_sort(arr)
console.log(res)