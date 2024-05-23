// Function to rotate the array
(function rotateArray(arr, k) {
    const n = arr.length;
    if (k === 0) {
        return;
    }
    const temp = arr[n - 1];
    for (let i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    rotateArray(arr, k - 1);
    console.log(arr);
})([1,3,5,7,9],2)


