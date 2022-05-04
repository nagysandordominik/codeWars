function twoOldestAges(ages) {
    let order = [];
    order = ages.sort((a,b) => a - b).slice(-2)

    console.log(order)
}

twoOldestAges([1,5,87,45,8,8]);