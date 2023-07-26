class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addList(value) {
       const node1 = new Node(value);
        if (this.head === null) {
            this.head = node1;
        } else {
            var curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
           curr.next = node1;
        }
        
    }

    printNodeVaue(){
       let temp = this.head;
       while(temp !=null){
          console.log(temp.value);
          temp = temp.next;
       }
    }
}