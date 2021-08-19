let ctx = document.getElementById('myChart');

let data= []
getRandomUser()
getRandomUser()
getRandomUser()
getRandomUser()
getRandomUser()
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: '# of Votes',
            data:[20,20,40,50,40],

            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
        
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});




// get random username
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  setTimeout(function(){
    const test = data.results[0].dob;
    const newUser = parseInt(test.age)
    addData(newUser)
  },0)
 }
function addData(obj) {
    data.push(obj);
    toTestData() 
}

function toTestData(){
    const pela = data;
    console.log(pela)
    return pela;

}



