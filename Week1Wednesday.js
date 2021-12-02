/*
    Python Class
    
    class User:
        def __init__(self, name, age):
            self.name = name;
            self.age = age;

        def greeting():
            print(f"My name is {name} and I am {age} years old")



    Java Class 
    public class User {
        String name;
        int age;

        public User(String name, int age) {
            this.name = name;
            this.age = age
        }

        public void greeting() {
            System.out.println("My name is " + this.name + " and I am " + this.age + " years old");
        }

    }

*/

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greeting() {
//         console.log("My name is " + this.name + " and I am " + this.age + " years old");
//     }

//     changeName(name) {
//         this.name = name;
//     }
// }

// var myUser = new User("Sal", "29");
// // myUser = { name: sal, :age: 29}
// myUser.greeting();
// myUser.changeName("Sallehhuddin");
// myUser.greeting();
//Node
// Value
// Next
class SLLNode {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
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
    }

    printValues() {
        var currNode = this.head;
        while(currNode !== null) {
            console.log(currNode.val);
            currNode = currNode.next;
        }
    }

}
var mySLL = new SLL();
console.log(mySLL);

mySLL.addToFront(3);
console.log(mySLL);
mySLL.addToFront(2);
console.log(mySLL);
mySLL.addToFront(1);
console.log(mySLL);
mySLL.printValues();
