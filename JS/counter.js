let sum = 0;
document.getElementById('plus-btn').addEventListener('click',function(){
   
   const plusBtn = document.getElementById('counter');
   sum = sum + 1;
   plusBtn.innerText = sum,"amer mon motho ja chai tai";
})

document.getElementById('minus-btn').addEventListener('click',function(){
   
//    const minusBtn = document.getElementById('counter');
//    sum = sum - 1;
//    minusBtn.innerText = sum;
if (sum > 0) { 
    sum = sum - 1;
}
counter.innerText = sum;
})