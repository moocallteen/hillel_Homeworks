// given a string "s", find the first non-repeating character in it and return its index. If it does not exist, return -1.

var firstUniqChar = (s) => {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    return -1;
}

console.log("EXAMPLE 1:");
console.log(firstUniqChar("leetcode")); // 0
console.log("EXAMPLE 2:");
console.log(firstUniqChar("loveleetcode")); // 2
console.log("EXAMPLE 3:");
console.log(firstUniqChar("aabb")); // -1


var customCharCount = (input) => {
    let map = {};
    for (let char of input) {
        if (map[char]) {
            map[char]++;
        } else {
            map[char] = 1;
        }
    }
    return map;
}

console.log("CUSTOM EXAMPLE:");
console.log(customCharCount("approximate"));

let map = {};
let str = "testing";

for (let char of str) {
    if (map[char]) {
        map[char]++;
    } else {
        map [char] = 1;
    }
}

console.log("CUSTOM EXAMPLE 4:");
console.log(str);
console.log(map);