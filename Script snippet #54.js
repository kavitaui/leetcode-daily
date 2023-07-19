 var deleteDuplicates = function(head) {
    if(!head) return null;
    var current = head.next;
    var prev = head;

    while(prev) {
        if(current === null) return head;
        if(prev.value === current.value) {
            prev.next = current.next;
        } else { 
            prev = current;
        }
        current = current.next
    }
};