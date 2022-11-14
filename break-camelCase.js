function solution(string) {
    return string.split('').map(function(l) {
    
    return l === l.toUpperCase() ? (" " + l) : l
    }).join('')
  }