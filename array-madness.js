function arrayMadness(a, b) {
    let sum1 = 0;
    let sum2 = 0;
    for (i =0, {length} = a; i < length; ++i)
    {
        sum1 += a[i] ** 2;
    }
    for (i =0, {length} = b; i < length; ++i)
    {
        sum2 += b[i] ** 3;
    }
    return sum1 > sum2;
}