function enough(cap, on, wait) {
    const all = cap - on - wait;
    
    if (all >= 0) {
      return 0;
    }
    
    return (on + wait) - cap;
   }