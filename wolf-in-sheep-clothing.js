function warnTheSheep(queue) {
    if (queue[queue.length -1] === "wolf") {
      return "Pls go away and stop eating my sheep";
    } else {
      let n = queue.reverse().indexOf("wolf");
      return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
    }
  }