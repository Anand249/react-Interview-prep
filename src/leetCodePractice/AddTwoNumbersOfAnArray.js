let arr = [-4, 3, -9, 0, 4, 1]
let finalArray = []
let a = 0, b = 0, c = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        a++
    } else if (arr[i] < 0) {
        b++
    } else {
        c++
    }
}
let d = a / arr.length
console.log([a / arr.length, b / arr.length, c / arr.length])


