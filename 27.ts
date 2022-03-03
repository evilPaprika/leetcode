function removeElement(nums: number[], val: number): number {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (val === nums[i]) {
            continue;
        }

        nums[k] = nums[i];
        k++;
    }

    return k;
}
