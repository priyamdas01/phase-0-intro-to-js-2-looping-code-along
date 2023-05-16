// Code your solutions in this file
function writeCards(arr, e){
    const newArr = [];
    for(let i = 0; i< arr.length; i++){
        newArr[i] = `Thank you, ${arr[i]}, for the wonderful surprise gift!`
    }
    return newArr;
}
function countDown(num){
    while(num>=0){
        console.log(num);
        num--;
    }
}