class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function removeElements(_head: ListNode | null, val: number): ListNode | null {
    let head = _head;
    while (head !== null && head.val === val) {
        head = head.next;
    }

    if (head === null) {
        return null;
    }

    let prevNode = head;
    let currentNode = head.next;

    while (currentNode !== null) {
        if (currentNode.val === val) {
            prevNode.next = currentNode.next;
            currentNode = currentNode.next;
            continue;
        }

        prevNode = currentNode;
        currentNode = currentNode.next;
    }

    return head;
}
