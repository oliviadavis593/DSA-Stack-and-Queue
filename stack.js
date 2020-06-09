
//Drill #1: Create a Stack class
//Then write a stack class with core functions (push, pop) from scratch

class startTrek {
    constructor() {
        this.top = null; 
    }

    push(data) {
        //if stacks empty - node will be the top of the stack 
        if (this.top === null) {
            this.top = new _Node(data, null)
        }

        //if stack already has something 
        //create new node, add data to new node & have pointer point to the top
        const node = new _Node(data, this.top);
        this.top = node; 
    }

    pop() {
        const node = this.top;
        this.top = node.next; 
        return node.data
    }
}