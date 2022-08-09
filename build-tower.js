function towerBuilder(nFloors) {
    let tower = [];
    
    for (i = 1; i <= nFloors; i++) {
      tower.push(makeFloor((nFloors * 2),(i * 2)));    
    }
    
    return tower;
}

function makeFloor(width, stars) {
    let padding = Math.floor((width - stars) / 2) + 1;
    return Array(padding).join(' ') + Array(stars).join('*') + Array(padding).join(' ');            
}