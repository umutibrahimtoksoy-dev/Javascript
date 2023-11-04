const taskList = document.querySelector("#task-list");

//**removing element => seçilen id'yi siler

//taskList.remove();

//taskList.childNodes[1].remove();

//bunu kullan :) 
//taskList.children[3].remove();

//alternatif
//taskList.removeChild(taskList.children[3]);


//** removing attribute

//taskList.children[0].removeAttribute("class"); => seçili olan li nesnesinin class nitelik siler

/*for(i=0; i<taskList.children.length; i++)
{
    taskList.children[i].removeAttribute("class");
}
=> ul nesnesinin altındaki children(li)'ları siler.
*/

//** Replacing Elements => element değiştrime
const kart = document.querySelector(".card-header");

//create element
const h2 = document.createElement("h2");
h2.setAttribute("class","card-header");
h2.appendChild(document.createTextNode("New Header"));

const parent = document.querySelector(".card");
parent.replaceChild(h2,kart);

//** Classes
let val;
link = taskList.children[0].children[0];
//val = link.className;
//val = link.classList;
//val = link.classList[0];
//val = link.classList[1];

link.classList.add("new"); // => new classı adında yeni bir class ekler
link.classList.remove("new");


val = link.getAttribute("href");


console.log(val);