const main = document.getElementById('main');
// const addUserBtn = document.getElementById('add-user');


let count=1;
 
let data = [];




getRandomUser()
getRandomUser()
getRandomUser()
getRandomUser()
getRandomUser()

// get random username
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  setTimeout(function(){
    const test = data.results[0];
    console.log(test)
    const newUser = {
      name:`${test.name.first} ${test.name.last}`, 
      money : count++
    }
    addData(newUser);
  },6000)
}
function addData(obj) {
  data.push(obj);
  updateDOM()
  }

function updateDOM(providedData = data) {
// clear Main  div
main.innerHTML = ''
providedData.forEach((item)=>{
  const element = document.createElement('tr');
  element.classList.add('person');
  element.innerHTML = `<td>${item.money}</td>
  <td>${item.name}</td>`
 
  main.appendChild(element);
});
}






