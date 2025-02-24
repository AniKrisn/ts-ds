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

const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.print();