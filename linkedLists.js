import {Node} from "./node.js";

export class LinkedList {
    constructor(){
        this.firstNode = null
    }

    append(value){
        const n = new Node()
        n.value = value;

        if (this.firstNode == null){
            this.firstNode = n;
            return
        }

        let current = this.firstNode
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

        if (this.firstNode == null){
            this.firstNode = n;
            return
        }
        const prec = this.firstNode
        this.firstNode = n;
        this.firstNode.next = prec
    }

    size(){
        if (this.firstNode == null) return 0;
        let size = 0;
        let current = this.firstNode;
        while(current !== null){
            current = current.next;
            size++;
        }
        return size;
    }

    head(){
        return this.firstNode === null ? undefined : this.firstNode.value;
    }

    tail(){
        if (this.firstNode === null) return undefined;
        let current = this.firstNode;
        let tail = current;
        while(current.next !== null){
            current = current.next;
            tail = current
        }
        return tail.value
    }

    at(index){
        if (this.firstNode === null) return undefined;
        let current = this.firstNode;
        let i = 0;
        while(current !== null){
            if (i == index) return current.value;
            current = current.next;
            i++;
        }
    }

    pop(){
        if (this.firstNode === null) return undefined;
        const first = this.firstNode
        this.firstNode = this.firstNode.next;
        return first.value;
    }

    contains(value){
        let current = this.firstNode;
        while(current !== null){
            if (current.value === value) return true;
            current = current.next; 
        }
        return false;
    }   

    findIndex(value){
        let current = this.firstNode;
        let i = 0;
        while(current !== null){
            if (current.value === value) return i;
            current = current.next; 
            i++
        }
        return -1;
    }

    toString(){
        let s = "";
        let current = this.firstNode;
        while (current !== null){
            s += `( ${current.value} ) -> `
            current = current.next;
        }
        s += "null"
        return s;
    }
}
