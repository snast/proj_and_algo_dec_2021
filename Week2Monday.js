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
    // O(1) - constant
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
    // - Time Complexity - O(n) - linear
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
    

    // - Time Complexity - O(n)
    insertAt(val, index) {
        if(index < 0 || index > this.size) {
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

        return true;
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

//Big O Notation
// Worst case scenario, time complexity, measuring how efficient an algorithm is, space complexity
// O(1)

// function onlyOnce(arr) {
//    this work is only done once and is not affected by the num of elems

// }

//O(n)
// function OOfN(arr) {
//     for(var i = 0; i<arr.length; i++) {
//         console.log("Now this is O(n)");
//     }
// }

//O(n^2)
// function OOfNSquared(arr) {
// //     for(var i = 0; i<arr.length; i++) {
// //          for(var j = i+1; j<arr.length; j++) {
// // //              console.log("Now this is O(n)");
//           }
// //  }
// }