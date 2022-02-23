function twoSum(nums: number[], target: number): number[] {
    const secondNumsToFind = new Set();
    for (const [index, num] of nums.entries()) {
        if (secondNumsToFind.has(num)) {
            const firstNum = target - num;
            const firstNumIndex = nums.findIndex((n) => firstNum === n);

            return [firstNumIndex, index];
        }
        secondNumsToFind.add(target - num);
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,2,4], 6));
