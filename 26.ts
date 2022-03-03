function removeDuplicates(nums: number[]): number {
    let prevNum = null;
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (prevNum === num) {
            continue;
        }

        nums[k] = num;
        prevNum = num;
        k++;
    }

    return k;
}
