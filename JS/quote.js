const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    }
];


document.getElementById('quote').addEventListener('click',function(){
    const p = document.getElementById('quote-p');
    const h2 = document.getElementById('name');
    // console.log(p)

    const randomIndex = Math.floor(Math.random() * quotes.length);
    // console.log(quotes[randomIndex]);
    p.innerText = quotes[randomIndex].quote;
    h2.innerText =quotes[randomIndex].author;
})