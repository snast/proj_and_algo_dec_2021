function countForward(num) {
    console.log(num);
    countForward(num+1);
}

countForward(0);