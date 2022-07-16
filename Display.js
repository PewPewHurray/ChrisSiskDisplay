class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    addFront(val){
        let new_node = new Node(val);
        if(!this.head){
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    removeFront(){
        if(this.head){
            this.head = this.head.next;
            return this;
        }
        return this;
    }

    front(){
        if(this.head){
            return this.head.data;
        }
        return null;
    }

    display(){
        let runner = this.head;
        let arr = [];
        while(runner !== null){
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr.join(", ");
    }
}

SLL1 = new SLL();
console.log(SLL1.addFront(76));
console.log(SLL1.addFront(2));
console.log(SLL1.display());
console.log(SLL1.addFront(11.41));
console.log(SLL1.display());