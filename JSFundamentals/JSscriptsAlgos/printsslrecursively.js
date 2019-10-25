function Node(value) {
    this.value = value;
    this.next = null;
}

function SLinkedList(node) {
    if (node) {
        this.head = node;
    } else {
        this.head = null;
    }
}

SLinkedList.prototype.prepend = function(node) {
    node.next = this.head;
    this.head = node;
};

SLinkedList.prototype.print = function() {
    var arr = [];
    var len = 1;
    var current = this.head;
    while (current !== null) {
        len++;
        arr.push(current.value);
        current = current.next;
    }
    console.log(arr.join(' '));
    console.log(len);
};

SLinkedList.prototype.reverse = function() {
    if (!this.head || !this.head.next) {
        return;
    }
    var first = this.head;
    var rest = new SLinkedList(this.head.next);
    rest.reverse();
    first.next.next = first;
    first.next = null;
    this.head = rest.head;
};

var list = new SLinkedList();
list.prepend(new Node(4));
list.prepend(new Node(3));
list.prepend(new Node(2));
list.prepend(new Node(1));
list.print();

list.reverse();
list.print();