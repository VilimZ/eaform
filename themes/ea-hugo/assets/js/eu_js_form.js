/*
*
*
*/
const username = '';
const password = '';
const username2 = '';
const password2 = '';

const uriAppointments = 'https://appointments.aspose.com/index.php/api/v1/services';
const uriLocal =  'http://easyappointments.local/index.php/api/v1/services/';
const uriFile  =  './services.json';

const credentials = `${username}:${password}`;
const encodedCredentials = btoa(credentials);
const headers2 = new Headers();

const batchTrack = document.getElementById("select-service");
console.log({ batchTrack });
const getPost = async () => {
  const response = await fetch(uriFile, {
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
*      Provider
*/

const uriProvider = './providers.json';

const provider = document.getElementById("select-provider");
console.log({ provider });
const getProvider = async () => {
  const response = await fetch(uriProvider, {
    credentials: 'include',
    method: 'GET',
    mode: 'no-cors',
    headers: new Headers ({
            'Authorization' : 'Basic' + encodedCredentials,
            'Accept': 'application/json',
    })
    
  });  

 
  
  const data =  response.json();
  return data;
};

const displayOptionProviders = async () => {
  const options = await getProvider();
  for (option of options) {
    const provOption = document.createElement("option");
    provOption.value = option.firstName;
    provOption.text = option.firstName + ' ' + option.lastName ;
    provider.appendChild(provOption);
  }
};

displayOptionProviders();


