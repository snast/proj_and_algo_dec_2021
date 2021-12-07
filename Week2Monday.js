class SLLNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addToFront(value) {
        // When head == null, the list is empty.  The new value should be updated to head
        if (this.head === null) {
            this.head = new SLLNode(value);
            console.log("Added node to empty SLL");
        } else {
            // When head is not null
            // Store old head in a variable
            // Set head to new value
            // set new node.next to old head
            let oldHead = this.head;
            this.head = new SLLNode(value);
            this.head.next = oldHead;
            console.log("Added node to non empty SLL");

        }
        this.size++;
    }
    //Add the value to the end of the list
    addToEnd(value) {
        if (this.head === null) {
            this.head = new SLLNode(value);
            console.log("Added node to empty SLL");
        } else {
            var currNode = this.head;
            while(currNode.next !== null) {
                currNode = currNode.next;
            }
            currNode.next = new SLLNode(value);
        }
        this.size++;
        


    }

    insertAt(val, index) {
        if(index < 0 && index > this.size) {
            return false;
        }
        var newNode = new SLLNode(val);
        var currNode = this.head;
        var prevNode;
        if(index === 0) {
            //this.addToFront(val);
            newNode.next = currNode;
            this.head = newNode;
        } else {
            var currIndex = 0;
            while(currIndex!==index) {
                prevNode = currNode;
                currNode = currNode.next;
                currIndex++;
            }

            //we found where we need to be

            newNode.next = currNode;
            prevNode.next = newNode;

            

        }

        this.size++

        
    }




    printValues() {
        var currNode = this.head;
        console.log("This is the start of the list!");
        while(currNode !== null) {
            console.log(currNode.val);
            currNode = currNode.next;
        }
    }

}
var mySLL = new SLL();
mySLL.addToFront(3);
mySLL.printValues();
mySLL.addToFront(2);
mySLL.addToFront(1);
mySLL.addToEnd(4);
mySLL.printValues();
mySLL.addToEnd(5);
mySLL.printValues();
mySLL.insertAt(-1,0);
mySLL.printValues();
mySLL.insertAt(21,3);
mySLL.printValues();
mySLL.insertAt(891,7);
mySLL.printValues();


