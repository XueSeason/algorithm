var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]

function bubble_sort (arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        var temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

bubble_sort(arr)
console.log(arr)