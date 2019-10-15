var flatten = function(head) {
    
  if(head == null){return null} // Return the null case as null
    
    var stack = []
    
    var current = head // Iterate using this variable as a reference
    var origin = current // Used to return the starting location
    
    while(current){
        if(current.child){
            if(current.next){
                stack.push(current.next)    
            }
            
            // Setup the next as the child
            current.next = current.child
            current.child.prev = current
            
            // Remove the child
            current.child = null
        }
             
        else if(current.next == null){ 
            if(stack.length > 0){
                current.next = stack.pop()
                current.next.prev = current
            }
        }    
        current = current.next
    }
    
    return origin  
};