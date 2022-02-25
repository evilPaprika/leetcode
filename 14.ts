function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0]
    for (const str of strs) {
        for (let i = 0; i < str.length || i < prefix.length; i++) {
            if (str[i] !== prefix[i]) {
                prefix = prefix.slice(0, i);
            }
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["ab","a"]));
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));