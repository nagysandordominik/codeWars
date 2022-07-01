function diamond(n){
    if (n < 3 || n % 2 == 0)
      return null;
  
    let str = '';
    let middle = (n - 1) / 2;
    
    for (i = 0; i <= middle - 1; ++i) 
    {
    let spaces = ' '.repeat(middle - i);
    str += spaces + '*'.repeat(i * 2 + 1) + '\n';
    }
    
    str += '*'.repeat(n) + '\n';
    
    for (i = middle + 1; i<n; ++i) {

    let spaces = ' '.repeat(i-middle);
    str += spaces + '*'.repeat(n - (i - middle) * 2) + '\n';
    }
    
    return str;
  }
  