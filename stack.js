class starTrek {
    constructor() {
        this.data = [];
        this.top = 0; 
    }

    push(item) {
        this.data[this.top] = item; 
        this.top = this.top + 1; 
        console.log(item)
    }

    pop() {
        if (this.isEmpty === false) {
            this.top = this.top - 1; 
            return this.data.pop(); //remove the last element
        }
    }

    //Allows you to look at the top of the stack w.o removing it 
    peek() {
        return this.data[this.top - 1];
    }

    //Allows you to check if the stack is empty or not
    isEmpty() {
        return this.top === 0; 
    }
}

let something = new starTrek()

something.push('Kirk')
something.push('Spock')
something.push('McCoy')
something.push('Scotty')
