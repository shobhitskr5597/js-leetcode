var reverseString = (s) => {
    let arr = s.split(" ");
    const arr1 = arr.map(el => el.split("").reverse().join(""));
    return arr1.join(" ")
}

const str1 = "How are you";
const str2 = "is you smmmellllll what the rock is cookin";

console.log(reverseString(str1));
console.log(reverseString(str2));