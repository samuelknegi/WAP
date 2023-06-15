
Array.prototype.odd = function () {
    return this.filter(n => n % 2 !== 0);

}
Array.prototype.even = function () {
    return this.filter(n => n % 2 == 0);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let temp = arr.even();
console.log(temp);
arr1 = [2, 3, 7, 4, 6, 8, 9, 10, 11, 13, 21, 32];
temp = arr1.odd();
console.log(temp);