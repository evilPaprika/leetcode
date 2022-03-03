class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let nodeL1 = l1;
    let nodeL2 = l2;

    const resultHead = new ListNode();
    let resultNode = resultHead;

    let remainder = 0;

    for (let i = 0; nodeL1 || nodeL2; i++) {
        const sum = (nodeL1?.val || 0) + (nodeL2?.val || 0) + remainder;
        resultNode.val = sum % 10;
        remainder = (sum - (sum % 10)) / 10;

        nodeL1 = nodeL1?.next;
        nodeL2 = nodeL2?.next;
        resultNode.next =
            nodeL1 || nodeL2 || remainder ? new ListNode(remainder) : null;
        resultNode = resultNode.next;
    }

    return resultHead;
}
