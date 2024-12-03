/**
 * * single element selector
 */
const header = document.getElementById('header');
header.style.color = 'red';

/**
 * * query selector
 */
const uniquePara =document.querySelector('#unique-para')
// console.log('hello boss')
/**
 * multi Element Selector
 */
const myTags =document.getElementsByTagName('p');
for(let i = 0; i < myTags.length; i++){
    const element = myTags[i];
    element.style.backgroundColor = 'green';
    element.style.fontSize = '40px'
}

const allElement = document.getElementsByClassName('info');
for(const element of allElement){
    element.style.border = '5px solid red'
}

const myParam = document.querySelectorAll('.info');
// console.log(myParam[0]);




/**
 * * Node VS Element in DOM
 */
const container2 = document.querySelector('.container2');
// console.log(container2.children);

/**
 * * Traversing DOM Hierarchy----parentElement
 */
const item2 = document.getElementById('item2');
const parent = item2.parentElement;

const nextSibling = item2.nextElementSibling;
// console.log(nextSibling)


/**
 * *Manipulate The Dom
 * *innerText || innerHTML || textContent
 */
const container4 = document.querySelector('.container4');
console.log(container4.innerText);
console.log(container4.textContent);
console.log(container4.innerHTML);


/**
 * *Manipulate The Dom
 * *setAttribute || getAttribute || removeAttribute
 */

const myBtn = document.getElementById('myButton');
myBtn.setAttribute('class', 'btn btn-primary common-class');
myBtn.setAttribute('disabled', true);
myBtn.removeAttribute('disabled');


const myLinks = document.getElementById('myLink');
const link = myLinks.getAttribute('title');
console.log(link);


/**
 * *Creating an element and append || Add class name  || classList[add(),remove()] || append Child vs append ||remove() or remove Child()
 */
const container5 = document.querySelector('.container5');


const p = document.createElement('p');
p.innerText = 'I am create by js dynamically';
container5.appendChild(p);

const h1 = document.createElement('h1');
h1.innerText = 'hello h1 boss!!!!! ';
container5.appendChild(h1);
// h1.classList.add('text');
h1.className = 'text'
h1.classList.remove('text');
// console.log(p);



