var palindrome = (s) => {
    let flag = 0;
    for (let i=0,j=s.length-1;i<s.length/2 && j>0;i++,j--) {
        if (s[i] !== s[j]) flag = 1;
    }

    return flag === 0? "It is a palindrome": "It is not a palindrome"
}

const str1 = "malayalam";
const str2 = "mulayam";

console.log(palindrome(str1));
console.log(palindrome(str2));