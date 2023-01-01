function tribonacci(sign,n){
    for (i = 3; i < n; i++) {
      sign[i] = sign[i-1] + sign[i-2] + sign[i-3];
    }
    return sign.slice(0, n);
  }