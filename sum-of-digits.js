function digital_root(n) {
    if (n < 10)
      return n;
  
    for (sum = 0, i = 0, n = String(n); i < n.length; i++)
      sum += Number(n[i]);
     
    return digital_root(sum);
  }