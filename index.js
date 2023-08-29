// Writedocument.body.append(element); your code here!
const main = document.getElementById("main");
main.remove()
// const secondChild = ul.querySelector("li:nth-child(2)");
// ul.removeChild(secondChild);
const newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory')
newHeader.textContent = "Sackett is the champion"
console.log (newHeader)
// const newHeader = document.getElementById("main");
// main.innerHTML = 'victory'
document.body.appendChild(newHeader)