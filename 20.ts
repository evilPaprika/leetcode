function isValid(s: string): boolean {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (")]}".includes(s[i])) {
            const stackHead = stack.pop();
            switch (stackHead) {
                case "(":
                    if (s[i] !== ")") {
                        return false;
                    }
                    break;
                case "[":
                    if (s[i] !== "]") {
                        return false;
                    }
                    break;
                case "{":
                    if (s[i] !== "}") {
                        return false;
                    }
                    break;
                default:
                    return false;
            }
        } else {
            stack.push(s[i])
        }
    }

    return !stack.length;
};

console.log(isValid("("));
console.log(isValid("()"));
console.log(isValid("[(])"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([))"));