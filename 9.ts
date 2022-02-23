function numberToArray(num: number) {
    return num.toString().split('');
}

function isPalindrome(num: number): boolean {
    const nums = numberToArray(num);
    const numsLength = nums.length;
    
    for (let i = 0; i <= numsLength / 2 - 1; i++) {
        if (nums[i] !== nums[numsLength - i - 1]) {
            return false;
        }
    }

    return true;
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))