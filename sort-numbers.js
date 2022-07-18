function solution(nums){
    if(nums==null || nums.length===0){
          return nums=[];
  
      }
      let n,  aux;
      n = nums.length;
      for (k = 1; k < n; k++) {
          for (i = 0; i < (n - k); i++) {
              if (nums[i] > nums[i + 1]) {
                  aux = nums[i];
                  nums[i] = nums[i + 1];
                  nums[i + 1] = aux;
              }
          }
      }
    return nums;
  }