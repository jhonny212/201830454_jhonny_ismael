console.log('hola mundo ');
// obtener elemintos por id
const getButton = document.querySelector("#getButton");
const postButton = document.querySelector("#postButton");

var respuesta = document.querySelector('#respuesta');

// rutas para Get y Post
const url = "http://localhost:3000/users";
const urlp = "http://localhost:3000/pusers";

var datos=document.getElementById("historial");


// metodo para obtener el token
var array;
for (let index = 0; index <respuesta.length; index++) {
    
    
}
var count=0;
const getData = () => {
    axios.get(url).then(response => {
     console.log(response.data.kind.length);
        if(count<response.data.kind.length){
    var htmlTexto="<tr>"+"<td>"+respuesta.value+"</td>" +"<td style="+"color:gray"+">"+response.data.kind[count]+"</td>"+"</tr>";
      datos.innerHTML=datos.innerHTML+htmlTexto;
    count++;
}
            console.log(response.data.carne);
        })
        .catch(error => {
            console.log(error);
        });
};


// metodo para enviar letra del input hacia el servidos
const sendData = () => {
    axios.post('http://localhost:3000/postusers', {
            firstName: 'Jhonyy',
            lastName: 'Garcia',
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




// asignar metodos y evento 
getButton.addEventListener('click', getData);

postButton.addEventListener('click', sendData);



