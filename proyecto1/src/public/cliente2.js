
const getButton = document.querySelector("#getButton");
const postButton = document.querySelector("#postButton");

const url = "http://localhost:3000/users";
const urlp = "http://localhost:3000/pusers";

var datos=document.getElementById("historial");
var datos2=document.getElementById("div2");


    var input = myForm.myInput;
    console.log(input);
    var reader = new FileReader;
    
    input.addEventListener('change', onChange);
    



function onChange(event) {
    var file = event.target.files[0];
    
    reader.readAsText(file);
    
    reader.onload = onLoad;
    
  }
  var array=[];
  
  function onLoad() {
    var result = reader.result; // Obtienes el texto
    // En tu ejemplo lo obtienes de una petición HTTP
    
    var lineas = result.split('\n');
    for(var linea of lineas) {
      console.log('[linea]', linea)
      if(linea!=''){
        array.push(linea);
       ; 
      datos2.innerHTML=datos2.innerHTML+linea+"<br>"

      }
    }
    //document.write(array);

    console.log(array.length+"aca");
   
    
  //  document.write(array[0]);
    
  }
  var count=0;
  var tmp;
  const sendData = () => {
  
  
    if(count<array.length){
    tmp=array[count];
    console.log(tmp);
}
    
    else {

        tmp='vacio';
    }

    axios.post('http://localhost:3000/postusers', {
            firstName: 'jhonny',
            lastName: 'garcia',
            
            text: tmp
           

        }, {
            'Content-Type': 'application/json'
        })
        .then(response => {
         
        })
        .catch(error => {
            console.log(error);
        }); 
        count++;
    };


    const getData = () => {
        axios.get(url).then(response => {
          console.log('obteniendo data');
    if(tmp!='vacio'){
    var htmlTexto="<tr>"+"<td>"+tmp+"</td>" +"<td style="+"color:gray"+">"+response.data.carne+"</td><td>"+count+"</td></tr>";
         datos.innerHTML=datos.innerHTML+htmlTexto;

                console.log(response.data.carne);}
            })
            .catch(error => {
                console.log(error);
            });
    };
  
  postButton.addEventListener('click', sendData);

getButton.addEventListener('click', getData);
