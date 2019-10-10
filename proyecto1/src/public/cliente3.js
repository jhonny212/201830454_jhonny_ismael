const getButton = document.querySelector("#getButton");
const url = "http://localhost:3000/users2";
const urlp = "http://localhost:3000/pusers";
var arrayReporte=[];
var datos=document.getElementById("historial");

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

function llenarReporte() {
    const arreglo = [
        {
            "nombre": "Maggie",
            "edad": 5,
        }, {
            "nombre": "Cuco",
            "edad": 1
        },
        {
            "nombre": "Misifú",
            "edad": 10
        },
        {
            "nombre": "Teddy",
            "edad": 2
        }
    ];
    //console.log("Antes de ordenar: ", arreglo);
    //console.log("Después de ordenar: ", arreglo);
//var htmlTexto="<tr>"+"<td>"+tmp+"</td>" +"<td style="+"color:gray"+">"+response.data.carne+"</td><td>"+count+"</td></tr>";
//arrayReporte.sort();
//arrayReporte=arrayReporte.reverse();  
arrayReporte.sort((unaCadena, otraCadena) => otraCadena.tipo.localeCompare(unaCadena.tipo)); 
for (let index = 0; index < arrayReporte.length; index++) {
   
    datos.innerHTML=datos.innerHTML+"<tr><td>"+arrayReporte[index].palabra+"</td><td>"+arrayReporte[index].tipo+"</td></tr>";
    
}
//

    
}
getButton.addEventListener('click', getData);
