// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
    let name = str.split(' ');
    let shuffledName = name[1] + ' ' + name[0];

    return shuffledName;
  }

nameShuffler('Nagy Sándor')