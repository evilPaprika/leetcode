class TNode {
    value: string;
    children: TNode[] = [];
    isEndOfWord: boolean = false;

    constructor(_value: string = "") {
        this.value = _value;
    }

    addChild(child: TNode) {
        this.children.push(child);
    }
}

class Trie {
    root: TNode;
    constructor() {
        this.root = new TNode();
    }

    insert(word: string): void {
        let treePointer: TNode = this.root;
        for (let i = 1; i <= word.length; i++) {
            const prefix = word.slice(0, i)

            const existingPrefix = treePointer.children.find((child) => {
                return child.value === prefix;
            })

            if (existingPrefix) {
                treePointer = existingPrefix;
                continue;
            }

            const node = new TNode(prefix)
            treePointer.addChild(node)
            treePointer = node;
        }

        treePointer.isEndOfWord = true;
    }

    search(word: string): boolean {
        return !!this.findNodeByWord(word)?.isEndOfWord
    }

    startsWith(word: string): boolean {
        return !!this.findNodeByWord(word)
    }

    private findNodeByWord(word: string): TNode {
        let treePointer: TNode = this.root;

        for (let i = 1; i <= word.length; i++) {
            const prefix = word.slice(0, i)

            const nextNode = treePointer.children.find((child) => {
                return child.value === prefix;
            })

            if (!nextNode) {
                return null;
            }

            treePointer = nextNode;
        }

        return treePointer;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * const obj = new Trie()
 * obj.insert(word)
 * const param_2 = obj.search(word)
 * const param_3 = obj.startsWith(prefix)
 */

const obj = new Trie()
obj.insert("test")
// console.log(obj.root) 
// console.log(obj.root.children[0].children) 
console.log(obj.search("test")) 
console.log(obj.startsWith("te"))

obj.insert("team")
console.log(obj.search("test")) 
console.log(obj.search("team")) 
console.log(obj.search("tea")) 
console.log(obj.search("t")) 

console.log(obj.startsWith("tea")) 


