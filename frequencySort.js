var frequencySort = function(s) {
    let group = {};
    // const arr = s.split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
    for (let i=0; i<s.length;i++) {
        if (group[s[i]]) {
            group[s[i]]++
        } else {
            group[s[i]] = 1
        }
    }

    return Object.entries(group).sort((a,b)=> b[1]-a[1]).map(el => el[0].repeat(el[1])).join('')
};

const str1 = 'cccaaa';
const str2 = 'tree';
const str3 = 'Aabb';

console.log(frequencySort(str1));
console.log(frequencySort(str2));
console.log(frequencySort(str3));