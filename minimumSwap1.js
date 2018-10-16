

function minimumSwaps (n, arr) {
    let swaps = 0
    for (let i = 0, l = Math.max(...arr); i < l; i++) {
        while (arr[i] !== i + 1) {
            arr[i] = [arr[arr[i]-1], arr[arr[i]-1] = arr[i]][0]
            if (!arr[i]) break
            swaps++
        }
    }
    return swaps
}

var arrs = [7, 1, 3, 2, 4, 5, 6];
var n = arrs.length;

var result = minimumSwaps(n, arrs)
console.log(result)
