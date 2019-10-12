
// obtener el identificador en constantes y var
const getButton = document.querySelector("#getButton");
const postButton = document.querySelector("#postButton");
var datos=document.getElementById("historial");
var datos2=document.getElementById("div2");

// rutas para Get y Post
const url = "http://localhost:3000/users";
const urlp = "http://localhost:3000/pusers";



// obtener input del form (file)
    var input = myForm.myInput;
 
// variable para leer el file    
    var reader = new FileReader;
   // eventos al input 
    input.addEventListener('change', onChange);
    



function onChange(event) {
    var file = event.target.files[0];
    
    reader.readAsText(file);
    
    reader.onload = onLoad;
    
  }
  var array=[];
  
  function onLoad() {
    
    var tmpo=[];
    var result = reader.result; 

    var lineas = result.split('\n');
    for(var linea of lineas) {
     if(linea!=''){
// almacenar cada linea leida en un array
        tmpo.push(linea);
// imprimir el texto en el html
      datos2.innerHTML=datos2.innerHTML+linea+"<br>"
      }
    }
   
// leer el array de las lineas    
   for (let index = 0; index < tmpo.length; index++) {
     // separar cada linea en palabras
     var temporal=tmpo[index].split(' ');
     for (let i = 0; i < temporal.length; i++) {

 try {
    // Eliminar cadenas vacias
        var numero=temporal[i].length;
       
        if(numero==0){
     
        }else{
        
          // agragar cadena final al array final
          array.push(temporal[i]);
        }
      
        
      } catch (error) {
        
      }
      
       
       
     }
   }
 
 
  }
  
  var count=0;
  var tmp;
  // envio de datos al servidor por cada solicitud
  const sendData = () => {
  
  
    if(count<array.length){
    tmp=array[count];
  //  console.log(tmp);
}
    
    else {

        tmp='vacio';
    }
// enviar palabra al servido con ruta /postusers
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


    // obtener token de la letra enviada 
    var Count=0;
    const getData = () => {
        axios.get(url).then(response => {
    
 
      // agregar en tabla para los tokens
   
      Count++;
  
         //
       
        
          for (let index = 0; index <response.data.kind.length; index++) {
            console.log(response.data.kind[index]);
            var htmlTexto="<tr>"+"<td>"+tmp+"</td>" +"<td style="+"color:gray"+">"+response.data.kind[index]+"</td><td>"+count+"</td></tr>";
            datos.innerHTML=datos.innerHTML+htmlTexto;
           
            
          }
            })
            .catch(error => {
                console.log(error);
            });
    };
  
    // agregar eventos a las constantes de id, enviandolo a su respectivo metodo
  postButton.addEventListener('click', sendData);

getButton.addEventListener('click', getData);
