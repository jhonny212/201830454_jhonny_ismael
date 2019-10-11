console.log('hola mundo ');
const getButton = document.querySelector("#getButton");
const postButton = document.querySelector("#postButton");

const respuesta = document.querySelector('#respuesta');


const url = "http://localhost:3000/users";
const urlp = "http://localhost:3000/pusers";

var datos=document.getElementById("historial");



const getData = () => {
    axios.get(url).then(response => {
      console.log('obteniendo data');

var htmlTexto="<tr>"+"<td>"+respuesta.value+"</td>" +"<td style="+"color:gray"+">"+response.data.kind+"</td>"+"</tr>";
      datos.innerHTML=datos.innerHTML+htmlTexto;
            console.log(response.data.carne);
        })
        .catch(error => {
            console.log(error);
        });
};




/*const sendData = () => {
    axios.post('http://localhost:3000/postusers', {
          
           text: respuesta.value
        }/*, {
            'Content-Type': 'application/json'
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        }
        
  //      );
//};
*/
const sendData = () => {
    axios.post('http://localhost:3000/postusers', {
            firstName: 'Oliver hola',
            lastName: 'sierra',
            text: respuesta.value
        }, {
            'Content-Type': 'application/json'
        })
        .then(response => {
            console.log(response+respuesta.value);
        })
        .catch(error => {
            console.log(error);
        });
};





getButton.addEventListener('click', getData);

postButton.addEventListener('click', sendData);



