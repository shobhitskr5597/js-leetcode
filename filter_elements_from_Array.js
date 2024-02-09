var filter = function(arr, fn) {
    let newArr = [];
    for (let i=0; i<arr.length;i++) {
        if (fn(arr[i],i)) newArr.push(arr[i])
    }
    return newArr
};

const arr1 = [0,10,20,30]
const fn1 = function greaterThan10(n) { return n > 10; }

console.log(filter(arr1,fn1));