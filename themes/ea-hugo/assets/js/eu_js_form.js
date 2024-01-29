/*
*
*
*/

const username = 'janedoe';
const password = 'Mrkva123';
const username2 = 'vilimtelnet';
const password2 = '12345678';
const uriAppointments = 'https://appointments.aspose.com/index.php/api/v1/services';
const uriLocal =  'http://easyappointments.local/index.php/api/v1/services/';
const uriFile  =  './services.json';

const credentials = `${username}:${password}`;
const encodedCredentials = btoa(credentials);
const headers2 = new Headers();

const batchTrack = document.getElementById("select-service");
console.log({ batchTrack });
const getPost = async () => {
  const response = await fetch(uriAppointments, {
    credentials: 'include',
    method: 'GET',
    mode: 'no-cors',
    headers: new Headers ({
            'Authorization' : 'Basic' + encodedCredentials,
            'Accept': 'application/json',
    })
    
  });  //  https://jsonplaceholder.typicode.com/users

 
  
  const data =  response.json();
  return data;
};

const displayOption = async () => {
  const options = await getPost();
  for (option of options) {
    const newOption = document.createElement("option");
    newOption.value = option.username;
    newOption.text = option.name;
    batchTrack.appendChild(newOption);
  }
};

displayOption();




/*
*

const batchTrack = document.getElementById("select-service");
console.log({ batchTrack });
const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

const displayOption = async () => {
  const options = await getPost();
  for (option of options) {
    const newOption = document.createElement("option");
    newOption.value = option.username;
    newOption.text = option.name;
    batchTrack.appendChild(newOption);
  }
};

displayOption();;


*
*/


/* 
// Select modal
var mpopup = document.getElementById('mpopupBox');

// Select trigger link
var mpLink = document.getElementById("mpopupLink");

// Select close action element
var close = document.getElementsByClassName("close")[0];

// Open modal once the link is clicked
mpLink.onclick = function() {
    mpopup.style.display = "block";
};

// Close modal once close element is clicked
close.onclick = function() {
    mpopup.style.display = "none";
};

// Close modal when user clicks outside of the modal box
window.onclick = function(event) {
    if (event.target == mpopup) {
        mpopup.style.display = "none";
    }
};
 */