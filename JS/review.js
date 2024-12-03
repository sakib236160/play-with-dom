// document.getElementById('submit-btn').addEventListener('click', function () {
//     const reviewText = document.getElementById('review').value;
//     const output = document.getElementById('output');

//    
//     if (reviewText.trim() === "") {
//         output.textContent = "Please write something before submitting!";
//         output.classList.add("text-red-500");
//         return;
//     }

//     
//     output.textContent = `Your Review: "${reviewText}"`;
//     output.classList.remove("text-red-500");
//     output.classList.add("text-green-500");

//    
//     document.getElementById('review').value = "";
// });


document.getElementById('submit-btn').addEventListener('click',function(){
    const inputValue = document.getElementById('text-area').value;

    const container = document.getElementById('review');
    const p = document.createElement('h1');
    p.innerText = inputValue;
    container.appendChild(p);
    document.getElementById('text-area').value = '';
})