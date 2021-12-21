// Binary Search 
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
console.log(myBST);
console.log(myBST.size());