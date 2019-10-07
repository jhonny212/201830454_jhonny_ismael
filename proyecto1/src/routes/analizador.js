const express = require('express');
const router = express.Router();
router.use(express.json());
const path = require('path');
// variables
let bolean=true;  
let tipo;
// analizar palabra


router.post('/postusers', (req, res) => {

    bolean=true;
    tipo="ERROR";
const palabra= req.body.text;

reservadas(palabra);
if(bolean){
    booleanos(palabra);
}

if(bolean){
agrupacion(palabra)
}

if(bolean){
    operadores(palabra);
}
if(bolean){
    signo(palabra);
}
if(bolean){
    numero(palabra);

}
if(bolean){
    flotante(palabra);

}
if(bolean){
    identificador(palabra);

}
console.log(tipo);

res.status(200).send('wrong');
});

function reservadas(textoA){
const array= ['variable', 'entero', 'decimal', 'booleano', 
'cadena', 'si', 'sino', 'mientras','hacer'];
for(var i=0; i<array.length;i++){
if(textoA==array[i]){
    bolean=false;
    tipo="reservada";
    break;
}
}
}

function booleanos( textoA){
    const array= ['VERDADERO', 'FALSO'];
    for(var i=0; i<array.length;i++){
    if(textoA==array[i]){
        bolean=false;
        tipo="boleano";
        break;
    }
    }
    }
    
    function operadores( textoA){
        const array= ['+', '-', '*', '/', '%', '=','==','<','>','>=','<='];
        for(var i=0; i<array.length;i++){
        if(textoA==array[i]){
            bolean=false;
            tipo="operador";
            break;
        }
        }
        }
        function agrupacion( textoA){
            const array= ['(', ')', '{', '}'];
            for(var i=0; i<array.length;i++){
            if(textoA==array[i]){
                bolean=false;
                tipo="agrupacion";
                break;
            }
            }
            }
            function signo( textoA){
                const array= ['"', ';'];
                for(var i=0; i<array.length;i++){
                if(textoA==array[i]){
                    bolean=false;
                    tipo="signo";
                    break;
                }
                }
                }

            
function numero(textoA){
    const array=['1','2','3','4','5','6','7','8','9','0'];
    var tmp=0;
    var aux=textoA.split("");
    for(var i=0; i<aux.length;i++){
        for(var j=0; j<array.length;j++){
            if(aux[i]==array[j]){
                
              tmp++;
                break;
            }
        }   
    }

    if(tmp==aux.length){
        tipo="numero";
        bolean=false;
    }

}
function flotante(textoA){
    const array=['1','2','3','4','5','6','7','8','9','0','.'];
    var tmp=0;
    var aux=textoA.split("");
    var tmp2=0;

    for(var i=0; i<aux.length;i++){
            if(aux[i]=='.'){
              tmp2++;
              

        }   if(tmp2>1){
            break;
        }
    }

    if(tmp2>1){
        
    }else if(tmp2==1){
    for(var i=0; i<aux.length;i++){
        for(var j=0; j<array.length;j++){
            if(aux[i]==array[j]){
                
              tmp++;
                break;
            }
          
            
        }   
    }}

    if(tmp==aux.length){
        tipo="flotante";
        bolean=false;
    }

}
function identificador(textoA){
    textoA=textoA.toLowerCase();
    const array=['1','2','3','4','5','6','7','8','9',
    '0','a','b','c','d','e','f','g','h','i',
    'j','k','l','m','n','ñ','o','p','q','r',
    's','t','u','v','w','x','y','z'];
    const array2=['a','b','c','d','e','f','g','h','i',
    'j','k','l','m','n','ñ','o','p','q','r',
    's','t','u','v','w','x','y','z'];
    
    var tmp=0;
    var aux=textoA.split("");
   
        for(var j=0; j<array2.length;j++){
            if(aux[0]==array2[j] ){
                tmp=1;
                if(aux[1]=='0'){
                    tmp=2;
                    for(var i=2; i<aux.length;i++){
                        for(var k=0; k<array.length;k++){
                            if(aux[i]==array[k]){
                    
                                tmp++;
                                  break;
                              }
                        }
                    }
                  break;  
                }
              
              break;  
            }
        }   
   

    if(tmp==aux.length){
        tipo="identificador";
        bolean=false;
    }

    /*
      for(var i=2; i<aux.length;i++){
                    for(var k=0; k<array.length;k++){
                        if(aux[i]==array[k]){
                
                            tmp++;
                              
                          }
                    }
                }
    */
}

router.get('/users', (req, res) => {
    console.log("envio usuario+ holaaa");

    setTimeout(() => {
        res.status(200).json({
            usurio: 'oliver',
            id: '4s',
            carne: tipo
        });
    }, 1500);

});

module.exports = router;