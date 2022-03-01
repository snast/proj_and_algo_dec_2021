//dd Binary Search 
// Binary Search Tree

class BSTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    //Uses a stack with iteration or relies on recursion(stack)
    printPreOrder(curNode = this.root) {
        if(curNode !== null) {
            console.log(curNode.val);
            this.printPreOrder(curNode.left);
            this.printPreOrder(curNode.right);
        }
    }

    printInOrder(curNode = this.root) {
        if(curNode !== null) {
            this.printInOrder(curNode.left);
            console.log(curNode.val);
            this.printInOrder(curNode.right);
        }
    }

    printPostOrder(curNode = this.root) {
        if(curNode !== null) {
            this.printPostOrder(curNode.left);
            this.printPostOrder(curNode.right);
            console.log(curNode.val);
        }
    }

    // Uses a queue, FIFO
    printBreadthFirstSearch() {
        var nodeTracker = [];
        nodeTracker.push(this.root);
        var currNode;
        while(nodeTracker.length != 0) {
            currNode = nodeTracker.shift();
            console.log(currNode.val);
            if (currNode.left !== null) {
                nodeTracker.push(currNode.left);
            }
            if(currNode.right !== null) {
                nodeTracker.push(currNode.right);
            }
        }
    }
    // Using recursion, determine the size of the tree
    //myBST.size()
    size(curNode = this.root) {
        //base case, keep counting until the node is null
        if(curNode === null) {
            return 0;
        }

        return this.size(curNode.left) + this.size(curNode.right) +1;
    }

    add(val) {
        var newNode = new BSTNode(val);
        // If statement for the very first node to be inserted in the BST
        if(this.root === null) {
            this.root = newNode;
            return this;
        }

        // Traverse the BST, to find the proper place to put the value
        // We used a runner with SLL
        var curr = this.root;

        // if val is greater than curr.val, try to go right
        // if curr.right does not exist, curr.right = newNode
        // if curr.right DOES exist, curr = curr.right
        // if val is less than curr, try to go left
        // if curr.left does not exist, curr.left = newNode
        // if curr.left DOES exist, curr = curr.left
        //curr needs to keep changing, to avoid an infinite loop

        while(curr) {
            if(curr.val < val) {
                if(curr.right === null) {
                    curr.right = newNode;
                    return this;
                }
                curr = curr.right;
            } else {
                if(curr.left === null) {
                    curr.left = newNode;
                    return this;
                }
                curr = curr.left;
            }

        }

    }
}

var myBST = new BST();
myBST.add(11).add(16).add(7).add(2).add(10).add(200);
console.log("Printing using preorder traversal");
myBST.printPreOrder();
console.log("Printing using inorder traversal");
myBST.printInOrder();
console.log("Printing using postorder traversal");
myBST.printPostOrder();
console.log("Printing using depth first search traversal");
myBST.printDepthFirstSearch();
