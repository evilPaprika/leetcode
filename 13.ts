const romanDigitToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanToInt(s: string): number {
    let totalSum = 0;

    for (let i = 1; i < s.length; i++) {
        const digit = romanDigitToInt[s[i - 1]];
        const nextDigit = romanDigitToInt[s[i]];

        if (digit < nextDigit) {
            totalSum = totalSum - digit;
            continue;
        }

        totalSum += digit;
    }

    return totalSum + romanDigitToInt[s[s.length - 1]];
}
