class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 === null || list2 === null) {
        return list1 || list2;
    }

    const [smallerListHead, biggerListHead] = list1.val < list2.val ? [list1, list2] : [list2, list1]

    let poiner1 = smallerListHead;
    let poiner2 = biggerListHead;


    while (true) {
        if (poiner2 === null) {
            return smallerListHead
        }
        if ((poiner1.next && poiner1.next.val < poiner2.val)) {
            poiner1 = poiner1.next;
        } else {
            const temp = poiner2.next;
            poiner2.next = poiner1.next;
            poiner1.next = poiner2;
            poiner2 = temp;
        }
    }
};
