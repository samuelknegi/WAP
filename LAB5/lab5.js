/*  q1  */
function sum(arr) {

    return arr
        .filter(e => e > 20)
        .reduce((a, b) => a + b, 0)



}
const arr = [1, 2, 3, 4, 5, 45, 56, 56, 78, 9, 8];
const a = sum(arr)
console.log(a);//235

/*q2 */


function getArray(str) {
    return str.filter(e => e.length >= 5 && e.includes('a'))

}


let strarr = ['samisha', 'tedisha', 'Mekdisha', 'zele', 'mike', 'dan'];
let nw = getArray(strarr)
console.log(nw);


