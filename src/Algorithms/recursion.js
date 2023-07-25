function countDown(num) {
    if (0 <= num) { // baseCase
        console.log("All doen!")
        return;
    }
    console.log(num);
    num--;
    countDown(num); // recursion
}

countDown(5);
