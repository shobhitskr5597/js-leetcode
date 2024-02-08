var groupAnagrams = function(strs) {
    let words = [];
    let groupArr = [];
    let k=0
    for (let i=0; i< strs.length; i++) {
        const index = strs[i].split('').sort().join()
        if (groupArr[index]) {
            console.log(groupArr[index])
            groupArr[k].push(strs[i])
        } else {
            groupArr[k] = strs[i]
            k++
        }
    }
    return Object.values(groupArr)
};

const list = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagrams(list));