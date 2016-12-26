var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]

function insertion_sort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var temp = arr[i]
    var j = i - 1
    for (; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }
  return arr
}

insertion_sort(arr)
console.log(arr)