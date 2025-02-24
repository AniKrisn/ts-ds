// Singly Linked List
class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null; // this is read as (ListNode<T> | null) = null, i.e. declare property next, of either type ListNode<T> or null, and initialise this property as null

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    head: ListNode<T> | null = null;

    append(value: T): void {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
        } else {    
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    print(): void {
        let current = this.head;
        const values: T[] = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }
}


// Trie (Prefix Tree)
class TrieNode {
    children: Map<string, TrieNode>;
    isEndofWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndofWord = false;
    }
}

class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.isEndofWord = true;
    }

    search(word: string): boolean {
        let node = this.root;
        for (const char of word) {
            if(!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char)!;
        }
        return node.isEndofWord;
    }

    startsWith(prefix: string): boolean {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char)!;
        }
        return true;
    }
}