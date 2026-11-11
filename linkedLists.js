import {Node} from "./node.js";

export class LinkedList {
    constructor(){
        this.head = null
    }

    append(value){
        const n = new Node()
        n.value = value;

        if (this.head == null){
            this.head = n;
            return
        }

        let current = this.head
        while(current.next !== null){
            //move to next element until we have an empty one
            current = current.next
        }
        //so we will append the last element 
        current.next = n
    }

    prepend(value){
        const n = new Node()
        n.value = value;

        if (this.head == null){
            this.head = n;
            return
        }
        const prec = this.head
        this.head = n;
        this.head.next = prec
    }
}
