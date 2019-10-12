// obtener eleementos by id
const getButton = document.querySelector("#getButton");
// rutas
const url = "http://localhost:3000/users2";
const urlp = "http://localhost:3000/pusers";
var arrayReporte=[];
var datos=document.getElementById("historial");

// obtener el array de objetos completo
const getData = () => {
    axios.get(url).then(response => {
      console.log('obteniendo data');


            //console.log(response.data.obj);
        arrayReporte=response.data.obj;
        llenarReporte();
       // console.log(arrayReporte[0].palabra);
        })
        .catch(error => {
            console.log(error);
        });
};

//
function llenarReporte() {
  // ordenar array por el tipo   
arrayReporte.sort((unaCadena, otraCadena) => otraCadena.tipo.localeCompare(unaCadena.tipo)); 
for (let index = 0; index < arrayReporte.length; index++) {
   
    datos.innerHTML=datos.innerHTML+"<tr><td>"+arrayReporte[index].palabra+"</td><td>"+arrayReporte[index].tipo+"</td><td>"+arrayReporte[index].col+"</td></tr>";
    
}

    
}
getButton.addEventListener('click', getData);
