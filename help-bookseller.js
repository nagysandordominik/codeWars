function stockList(listOfArt, listOfCat){
    if(!listOfCat.length || !listOfArt.length) return '';
    
    let count = 0, result = [];
    
    for (i = 0; i < listOfCat.length; i++) {
      
      listOfArt.forEach(item => {
        if(item[0] == listOfCat[i]) {
          count += Number( item.match(/\d+/) )
        }
      })
      result[i] = '(' + listOfCat[i] + ' : ' + count + ')';
      count = 0;
    }
    return result.join(' - ')
  }