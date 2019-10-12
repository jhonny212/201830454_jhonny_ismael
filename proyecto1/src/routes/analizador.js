const express = require('express');
const router = express.Router();
router.use(express.json());
const path = require('path');
// variables
let bolean=true;  
let tipo;

// analizar palabra

var arrayObjeto=[];

// ruta que recibe la letra desde el cliente
router.post('/postusers', (req, res) => {
   

    bolean=true;
  //  tipo="ERROR";
    // obtener palabra que se envio del cliente
const palabra= req.body.text;
// funcion automata
//automata(palabra);
FuncionAutomata(palabra);

res.status(200).send('wrong');
});
// automata
function FuncionAutomata(textoA){

var arrayTotal;
arrayTotal+=textoA.split('/');
arrayTotal+=textoA.split('(');

var Matriz = new Object ();
Matriz=[];

for(var i=0; i<8; i++) {
 Matriz[i] = new Array(6);
} 


// movimiento, estado, valor, estado ant
Matriz[0][0]=['Operador','B','Operador','A'];
Matriz[0][1]=['Signo','C','Signo','A'];
Matriz[0][2]=['Agrupacion','D','Agrupacion','A'];
Matriz[0][4]=['Digito','G','Numero','A'];
Matriz[0][5]=['Letra','F','Identificador','A'];
Matriz[4][3]=['Punto','H','Error','G'];
Matriz[4][4]=['Digito','G','Numero','G'];
Matriz[5][4]=['Digito','L','Flotante','H'];
Matriz[6][4]=['Digito','L','Flotante','L'];
Matriz[7][4]=['Digito','F','Identificador','F'];
Matriz[7][5]=['Letra','F','Identificador','F'];

var letraTemporal=textoA.split('');
var contador=0;
var fila;
var columna;
let validador=true;
let validador2=true;
var estadoAnterio;
estadoAnterio="";
estadoAnterio="A";
tipo="";
if (validador2) {
    

for (let index = 0; index < letraTemporal.length; index++) {
    let letratmt=detectarPalabra(letraTemporal[index]);
   
   validador=true;
    for (var i = 0; i < 8; i++) {
        
        for (var j = 0; j < 6; j++) {
            try {
            
               
                if(letratmt==Matriz[i][j][0] && validador)
         {
        
          if(Matriz[i][j][3]==estadoAnterio){
            estadoAnterio=Matriz[i][j][1];
             tipo=Matriz[i][j][2];
            validador=false;
            contador++;
         
            }
          
         }

            } catch (error) {
                
            }
           
        
        }
    
    }


}
if(tipo=='Identificador' ){
//

if(textoA=='VERDADERO' || textoA=='FALSO'){
    tipo='Booleano';}
    else {
        if (textoA=='variable' || textoA=='entero' || textoA=='decimal' ||
        textoA=='booleano' || textoA=='cadena' || textoA=='si' ||
        textoA=='sino' || textoA=='mientras' || textoA=='hacer' 
        ) {
            tipo='Palabra reservada';
            
        }}
    }
    if(!(contador==letraTemporal.length)){
        tipo='Error';
    }
//

var objeto=new Object();
objeto.palabra=textoA;
objeto.tipo=tipo;
// array con todos los objetos
arrayObjeto.push(objeto);}
}

// funcion para obtener la expresion con que se movera en el automata
function detectarPalabra(textoTxt) {
    // Globales
    const array= ['+', '-', '*', '/', '%', '=','==','<','>','>=','<='];
    var tipoLetra="";
 
    var validar=true;
  
    // para operador
    if (bolean) {
        for(var i=0; i<array.length;i++){
            if(textoTxt==array[i]){
    
                tipoLetra="Operador";
             
               
               
                validar=false;
                break;
            }
            }
    }
  
    // signo
    if(validar && bolean){
        const arraySigno= ['"', ';'];
        for(var i=0; i<arraySigno.length;i++){

            if(textoTxt==arraySigno[i]){
                tipoLetra="Signo";
           
                validar=false;
                break;
            }
        }  
    }   
    // agrupacion
    if(validar && bolean){
        const arrayAgrupacion= ['(', ')', '{', '}'];
        for(var i=0; i<arrayAgrupacion.length;i++){
            if(textoTxt==arrayAgrupacion[i]){
                tipoLetra="Agrupacion";
              
                validar=false;
                break;
            }
        }  
    }   
    //digito
    if(validar && bolean){
        const arrayNumero=['1','2','3','4','5','6','7','8','9','0'];
        for(var i=0; i<arrayNumero.length;i++){
            if(textoTxt==arrayNumero[i]){
                tipoLetra="Digito";
           
               
                validar=false;
                break;
            }
        }  
    }
    // punto
    if(validar && bolean){
           if(textoTxt=="."){
                tipoLetra="Punto";
           
                validar=false;
               
            }
          
    } 
    //letra
    if(validar && bolean){
        const arrayLetra=['a','b','c','d','e','f','g','h','i',
        'j','k','l','m','n','ñ','o','p','q','r',
        's','t','u','v','w','x','y','z'];
        var tmporal=textoTxt.toLowerCase();
        for(var i=0; i<arrayLetra.length;i++){
            if(tmporal==arrayLetra[i]){
                tipoLetra="Letra";
                validar=false;
                break;
            }
        }  
    }
    


return tipoLetra;
}




// metodo para obtener el token
router.get('/users', (req, res) => {

    setTimeout(() => {
        res.status(200).json({
            usurio: 'Jhonny',
            // envio del token
            kind: tipo
        });
    }, 500);

});

// metodo para el reporte final
router.get('/users2', (req, res) => {
  
    setTimeout(() => {
        res.status(200).json({
            usurio: 'Jhonny',
            // enviar un objeto con atributos del tipo y letra
            obj: arrayObjeto
        });
    }, 500);

});
module.exports = router;